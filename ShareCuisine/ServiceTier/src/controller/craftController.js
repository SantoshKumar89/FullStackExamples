const express = require("express"),craftRouter = express.Router();


craftRouter.get("/", async function (req, res) {
    res.send({ message:"not a valid user" });
});

module.exports = craftRouter;    