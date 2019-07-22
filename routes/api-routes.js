var db = require("../models");

module.exports = function(app) {
  app.post("/api/new", function(req, res) {
    console.log(req.body);

    db.Food.create({
      name: req.body.name,
      ingredient: req.body.ingredient,
      recipe: req.body.recipe
    }).then(function(results) {
      res.end();
    });
  });

  app.post("/api/newUser", function(req,res){

    db.User.create({
        name: req.body.name,
        password: req.body.password
    }).then(function(results){
        res.end();
    })
  })
};
