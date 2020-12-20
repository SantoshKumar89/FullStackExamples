const express = require("express"),
masterRouter = express.Router();
const language = require("../model/language")
const level = require("../model/level")
const enrollment = require("../model/enrollment")


masterRouter.get("/language", function (req, res) {
    language.find(function (err, data) {
        if (err) {console.log(err)};
        res.send(data);
      });

})

masterRouter.get("/level", function (req, res) {
    level.find(function (err, data) {
        if (err) {console.log(err)};
        res.send(data);
      });

})


masterRouter.get("/enrollment", function (req, res) {
    enrollment.find(function (err, data) {
        if (err) {console.log(err)};
        res.send(data);
      });

})

module.exports = masterRouter;    