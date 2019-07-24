var path = require("path")

const isAuthenticated = require("../config/middleware/isAuthenticated")


module.exports = function(app){

    app.get("/", function(req, res){

        if(req.user){
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"))
    });

    app.get("/signup", function(req,res){

        if(req.user){
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"))
    })

    app.get("/members", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/members.html"))
    })

    app.get("/food", (req, res) => {
        res.sendFile(path.join(__dirname, "../html-css-js/html/home.html"))
    })

    app.get("/register", (req,res) => {
        res.sendFile(path.join(__dirname, "../html-css-js/html/register.html"))
    })


}

