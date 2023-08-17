// const express = require("express");

// const routes = require("./routes");

// const app = express();
// app.use(express.json());
// app.use(routes);

// const PORT = 3333;
// app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
// require('express-async-errors')
const AppError = require("../src/utils/AppError")
const express = require('express');
const routes = require("./routes/index.js"); //by default JS uses index.js file, so is not necessary put it.

const app = express();

app.use(express.json());
app.use(routes);
app.use( (error, request, response, next) => {

    if(error instanceof AppError){
        return response.status(400).json({
            "status": "Error",
            "message": error.message
        });
    };

    console.error(error);

    return response.status(500).json({
        "status": "Error",
        "message": "Internal Error"
    });

});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));