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

class UsersController {

    create( request, response ){
        const { name, email, password } = request.body;

        response.json({ name, email, password });
    };
};

module.exports = UsersController;