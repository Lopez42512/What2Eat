var path = require("path")

module.exports = function(app){

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../html-css-js/html/home.html"))
    })

    app.get("/register", (req,res) => {
        res.sendFile(path.join(__dirname, "../html-css-js/html/register.html"))
    })
}

