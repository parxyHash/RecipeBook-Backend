import * as Sequelize from 'sequelize';
export default sequelize => {
    const Recipe = sequelize.define('Recipe', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        directions: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        time: {
            type: Sequelize.STRING,
        },
        ingredients: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    }, {});
    Recipe.associate = models => {
        Recipe.belongsTo(models.User);
    };
    return Recipe;
};
