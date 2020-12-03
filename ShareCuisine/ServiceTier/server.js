// Import express
let express = require('express')
// Import routes
let apiRoutes = require("./src/routes/apiRoutes")
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
//Contains all the configuration
const config = require('./config/config');
const cors = require('cors');

// Connect to Mongoose and set connection variable
//mongoose.connect('mongodb+srv://admin:2020adminJP@cluster0.zhq9g.mongodb.net/Dev?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true });
let {host,user,password,database}=config.mongoDB.connection;
mongoose.connect(`mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`, {useNewUrlParser: true,useUnifiedTopology: true });
var db = mongoose.connection;

// Initialize the app
let app = express();

app.use(cors())


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));

 app.use(bodyParser.json());
// Setup server port
var port = process.env.PORT || config.PORT;

// configure our routes
app.use('/api/v1', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});