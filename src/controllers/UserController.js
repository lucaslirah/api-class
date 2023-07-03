class UserController {
    /* 
        - `index` - GET to list multiple records.
        - `show` - GET to display a specific record.
        - `create` - POST to create a record.
        - `update` - PUT to update a record.
        - `delete` - DELETE to remove a record.  
    */

    create(request, response){
        const { name, email, password } = request.body;

        response.json({ name, email, password });
    }    

}

module.exports = UserController;