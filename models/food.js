module.exports = function(sequelize, Datatypes){
    var Food = sequelize.define("Food", {
        name: Datatypes.STRING,
        ingredient: Datatypes.STRING,
        recipe: Datatypes.STRING
        // image: Datatypes.TEXT('medium')
    });

    return Food;
}