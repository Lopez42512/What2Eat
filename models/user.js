module.exports = function(sequelize, Datatypes){
    var User = sequelize.define("User", {
        name: Datatypes.STRING,
        password: Datatypes.STRING
    });

    return User
}