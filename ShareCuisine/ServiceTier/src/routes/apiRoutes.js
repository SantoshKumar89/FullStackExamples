let router = require('express').Router();

// Set User Route
router.use("/user",require("../controller/userController"));

// Set login route
router.use("/login",require("../controller/loginController"));

// Set login route
router.use("/craft",require("../controller/craftController"));


// Set master data routes
router.use("/master",require("../controller/masterController"));


// Export API routes
module.exports = router;