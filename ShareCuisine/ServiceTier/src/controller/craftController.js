const express = require("express"),craftRouter = express.Router();
const craft = require("../model/craft");
const mongoose = require('mongoose');

//Create Craft object
craftRouter.post("/", async function (req, res) {
    
    craft.create({ title: 'New Craft', createdBy : req.body.craft.createdBy }, function (err, data) {
        if (err) {console.log(err)};
        res.send(data);
      });

});

//Update Craft object
craftRouter.put("/", async function (req, res) {
    console.log(req.body);
    craft.findOneAndUpdate({_id:req.body.craft._id, createdBy : req.body.craft.createdBy},req.body.craft, function (err, data) {
        if (err) {console.log(err)};
        res.send(data);
      });

});

//Get All Craft objects
craftRouter.get("/", async function (req, res) {

    const data=await craft.find({publish:true}).populate(['courseLandingPage.basicInfo.language','courseLandingPage.basicInfo.level','settings.enrollment.option']);
    res.send(data);
});

//Get Craft By Id object
craftRouter.get("/:id", async function (req, res) {
    const data=await craft.find({_id:req.params.id}).populate(['courseLandingPage.basicInfo.language','courseLandingPage.basicInfo.level','settings.enrollment.option']);
    res.send(data[0]);

});


//Get All Published Crafts created By user
craftRouter.get("/createdBy/:userId", async function (req, res) {

    console.log(req.query.isPublished);
    const isPublished=req.query.isPublished != undefined ? req.query.isPublished : false;
    const userId = new mongoose.Types.ObjectId(req.params.userId);
    console.log(isPublished);

    const data=await craft.find({"$and":[{createdBy :userId,publish : isPublished}]}).populate(['courseLandingPage.basicInfo.language','courseLandingPage.basicInfo.level','settings.enrollment.option']);
    res.send(data);

});


//Delete All Craft objects
craftRouter.delete("/", async function (req, res) {

    craft.deleteMany({createdBy : req.body.craft.createdBy},function (err, data) {
        if (err) {console.log(err)};
        res.send({deletedCount:data.deletedCount});
      });

});

//Delete Craft By Id object
craftRouter.delete("/:id", async function (req, res) {
    craft.deleteOne({_id:req.params.id,createdBy : req.headers.userid}, function (err, data) {
        if (err) {console.log(err)};
        res.send({deletedCount:data.deletedCount});
      });

});

module.exports = craftRouter;    