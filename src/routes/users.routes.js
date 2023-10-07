// const { Router } = require("express");
// const UsersController = require("../controllers/UserController");

// const usersRoutes = Router();
// const usersController = new UsersController();

// usersRoutes.post("/", usersController.create);

// module.exports = usersRoutes;

const { Router } = require("express");

const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");

const UsersAvatarController = require("../controllers/UsersAvatarController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

// function myMiddleware(request, response, next){
    
    //     if(!request.body.isAdmin){
        //         return response.json({ message: "user unauthorized"});
        //     };
        
        //     next();
        // }
        
const usersController = new UsersController();

const usersAvatarController = new UsersAvatarController();

const upload = multer(uploadConfig.MULTER);

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), usersAvatarController.update);

module.exports = usersRoutes;