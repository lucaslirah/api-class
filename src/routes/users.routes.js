// const { Router } = require("express");
// const UsersController = require("../controllers/UserController");

// const usersRoutes = Router();
// const usersController = new UsersController();

// usersRoutes.post("/", usersController.create);

// module.exports = usersRoutes;

const { Router } = require('express');

const usersRoutes = Router();

usersRoutes.post('/users', (request, response) => {
    const { name, email, password } = request.body;

    response.json({ name, email, password });
});

module.exports = usersRoutes;