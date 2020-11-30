// Import express
let express = require('express')
// Import routes
let apiRoutes = require("./src/routes/apiRoutes")
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');

// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb+srv://admin:2020adminJP@cluster0.zhq9g.mongodb.net/Dev?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true });
var db = mongoose.connection;


// Initialize the app
let app = express();


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));

 app.use(bodyParser.json());
// Setup server port
var port = process.env.PORT || 3000;

// configure our routes
app.use('/api/v1', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});