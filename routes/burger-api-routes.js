var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function(dbBurger) {
      var hbsObject = {
        burgers: res.body
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
      });
  });


  // POST route for saving a new post
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      name: req.body.name,
      devoured: req.body.devoured
    })
      .then(function(dbBurger) {
      res.redirect('/index');
      });
  });

  // PUT route for updating burgers
  app.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    db.Burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
      }).then(function(){
       res.redirect('/index');
    });
  });
};
