const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require("body-parser");
var db = require("./models");

// support parsing of application/json type post data
app.use(bodyParser.json({ limit: "10mb", extended: true }));

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("html-css-js"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);



db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
