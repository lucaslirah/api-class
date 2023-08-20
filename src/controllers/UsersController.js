// class UserController {
//     /* 
//         - `index` - GET to list multiple records.
//         - `show` - GET to display a specific record.
//         - `create` - POST to create a record.
//         - `update` - PUT to update a record.
//         - `delete` - DELETE to remove a record.  
//     */

//     async create(request, response){
//         const { name, email, password } = request.body;

//         response.status(201).json({ name, email, password }); //status code is not required, must be used following the standard.
//     }    

// }

// module.exports = UserController;
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersController {

    async create( request, response ){
        const { name, email, password } = request.body;

        const database = await sqliteConnection();

        const checkIfUserExists = await database.get("SELECT email FROM users WHERE email = (?)", [email]);

        if(checkIfUserExists){
            throw new AppError("The email is already in use!");
        };

        database.run("INSERT INTO users (name, email, password) VALUES ( ?, ?, ? )", [ name, email, password]);

        return response.status(201).json();
    };
};

module.exports = UsersController;