const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session")
var db = require("./models");
const passport = require("./config/passport")

// support parsing of application/json type post data
app.use(bodyParser.json({ limit: "10mb", extended: true }));

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("public"));

// User session with passport
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);



db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
