let router = require('express').Router();

// Set default API response
router.use("/user",require("../controller/userController"));

// Export API routes
module.exports = router;