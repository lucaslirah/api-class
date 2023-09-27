// const { Router } = require("express");

// const usersRouters = require("./users.routes");

// const routes =  Router();

// routes.use("/users", usersRouters);

// module.exports = routes;

const { Router } = require("express");

const sessionsRouter = require("./sessions.routes");
const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);
routes.use("/sessions", sessionsRouter);

module.exports = routes;