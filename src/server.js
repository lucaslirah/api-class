const express = require("express");

const routes = require("./routes");

const app = express();
app.post("/users", (request, response) => {
    response.send(`Você chamou o POST.`);
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));