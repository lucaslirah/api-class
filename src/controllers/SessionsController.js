const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class SessionsController{
    async create(request, response){
        const { email, password } = request.body;
        console.log(email)

        const user = await knex("users").where({email}).first();

        if(!user){
            throw new AppError("Incorrect email and/or password.", 401)
        }

        return response.json(user);
    }
}

module.exports = SessionsController;