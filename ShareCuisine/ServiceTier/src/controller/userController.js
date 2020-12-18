const express = require("express"),
    userRoute = express.Router();
// Import User model
User = require('../model/user');

userRoute.get("/", async function (req, res) {

    User.find(function (err, result) {
        if (err) {
            res.json({
                status: "error",
                message: err,
                data: result
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: result
        });
    });
});


//get user details
userRoute.get("/:id", async function (req, res) {

    if (req.params.id !== undefined) {
        User.findById(req.params.id, function (err, result) {
            if (err)
                res.send(err);
            res.json({
                status: "success",
                message: 'User details loading..',
                data: result
            });
        });
    } else {
       
            res.json({
                status: "failed",
                message: "No Data found",
                data: result
            });
        
    }

});


//Save User Details
userRoute.post("/", async function (req, res) {
    let user = new User();
    user.name = req.body.user.name;
    user.userName = req.body.user.userName;
    user.email = req.body.user.email;
    user.password = req.body.user.password;
    // save the contact and check for errors
    user.save(function (err) {
        res.json({
            status: "success",
            message: 'New User created!',
            data: user
        });
    });

});

//get logged in user cec id information from header
userRoute.put("/:id", async function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err)
            res.send(err);
        user.name = req.body.user.name;
        user.userName = req.body.user.userName;
        user.email = req.body.user.email;
        user.password = req.body.user.password;
        user.description = req.body.user.description;
        user.phone = req.body.user.phone;
    
        // save the user and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                status: "success",
                message: 'user Info updated',
                data: user
            });
        });
    });

});


//get logged in user cec id information from header
userRoute.delete("/", async function (req, res) {
    User.remove({
        _id: id
    }, function (err, result) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'User deleted',
            data: result            
        });
    });

});

module.exports = userRoute;
