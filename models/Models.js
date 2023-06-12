const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI);
class User extends Model {}
User.init(
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
        modelName: 'User',
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
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('NOW()'),
        },
    },
    {
        sequelize,
        modelName: 'Note',
    }
);

User.Notes = User.hasMany(Note); // A user can have many notes
Note.Usre = Note.belongsTo(User); // A note belongs to one user

sequelize
    .sync()
    .then(() => {
        console.log('Database schema synchronized successfully.');
    })
    .catch((error) => {
        console.error('Error synchronizing database schema:', error);
    });

module.exports = { User, Note };
