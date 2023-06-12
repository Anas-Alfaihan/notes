const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI);
const chalk = require('chalk');

class Author extends Model {}
Author.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(1024),
        },
    },
    {
        sequelize,
        modelName: 'Author',
    }
);

class Note extends Model {}
Note.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
    },
    {
        sequelize,
        modelName: 'Note',
    }
);

Author.Notes = Author.hasMany(Note); // A Author can have many notes
Note.Usre = Note.belongsTo(Author); // A note belongs to one Author

sequelize
    .sync({ logging: false })
    .then(() => {
        console.log(
            `${chalk.green('✓')} ${chalk.blue(
                'Database schema synchronized successfully.'
            )}`
        );
    })
    .catch((error) => {
        console.error('Error synchronizing database schema:', error);
    });

module.exports = { Author, Note };
