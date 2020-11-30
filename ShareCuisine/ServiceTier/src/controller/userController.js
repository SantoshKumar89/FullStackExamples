const express = require("express"),
    userRoute = express.Router();
// Import User model
User = require('../model/user');

//get user details
userRoute.get("/:id", async function (req, res) {

    if (req.params.id !== undefined) {
        User.findById(req.params.id, function (err, result) {
            if (err)
                res.send(err);
            res.json({
                message: 'User details loading..',
                data: result
            });
        });
    } else {
        User.get(function (err, result) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
            }
            res.json({
                status: "success",
                message: "Users retrieved successfully",
                data: result
            });
        });
    }

});


//Save User Details
userRoute.post("/", async function (req, res) {
    var user = new User();
    user.name = req.body.name;
    user.userName = req.body.userName;
    user.email = req.body.email;
    user.password = req.body.password;
    // save the contact and check for errors
    user.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
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
        user.name = req.body.name;
        user.userName = req.body.userName;
        user.email = req.body.email;
        user.password = req.body.password;
        // save the user and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
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
            message: 'User deleted'
        });
    });

});

module.exports = userRoute;
