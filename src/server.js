// const express = require("express");

// const routes = require("./routes");

// const app = express();
// app.use(express.json());
// app.use(routes);

// const PORT = 3333;
// app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

const express = require('express');

const routes = require("./routes/index.js"); //by default JS uses index.js file, so is not necessary put it.

const app = express();
app.use(express.json());

app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));