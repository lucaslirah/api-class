// const express = require("express");

// const routes = require("./routes");

// const app = express();
// app.use(express.json());
// app.use(routes);

// const PORT = 3333;
// app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
// require('express-async-errors')

require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("../src/utils/AppError");
const uploadConfig = require("./configs/upload");

const cors = require("cors");
const express = require('express');
const routes = require("./routes/index.js"); //by default JS uses index.js file, so is not necessary put it.

migrationsRun();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);
app.use( (err, request, response, next) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            "status": "error",
            "message": err.message
        });
    };

    console.error(err);

    return response.status(500).json({
        "status": "Error",
        "message": "Internal Error"
    });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));