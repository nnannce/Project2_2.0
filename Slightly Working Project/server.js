// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 4100;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // logic to pull in API's
var apiRoutes = require("./app/routing/apiRoutes.js");
apiRoutes(app, __dirname);

// logic to determine HTML routes
var htmlRoutes = require("./app/routing/htmlRoutes.js");
htmlRoutes(app, __dirname);

app.use(express.static("./app/public"));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

