// const express = require("express");

// const routes = require("./routes");

// const app = express();
// app.use(express.json());
// app.use(routes);

// const PORT = 3333;
// app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

const express = require('express');

const app = express();
app.use(express.json());

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));