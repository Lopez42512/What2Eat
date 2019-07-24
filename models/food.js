module.exports = function(sequelize, Datatypes){
    var Food = sequelize.define("Food", {
        name: Datatypes.STRING,
        memberId: Datatypes.INTEGER,
        ingredient: Datatypes.STRING,
        recipe: Datatypes.STRING,
        favorite: { type: Datatypes.BOOLEAN, allowNull: false, defaultValue: false },
        image: Datatypes.TEXT('medium')
    });

    return Food;
}