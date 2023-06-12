const { Sequelize } = require('sequelize');
const chalk = require('chalk');
const { User, Note } = require('../models/Models');

const sequelize = new Sequelize(process.env.PG_URI, { logging: false });

const port = process.env.PORT;

module.exports = function (app) {
    sequelize.authenticate().then(async () => {
        console.log(
            `${chalk.green('✓')} ${chalk.blue('connected to the database')}`
        );
        app.listen(port, (req, res) => {
            console.log(
                `${chalk.green('✓')} ${chalk.blue(`running on port ${port}`)}`
            );
        });
    });
};
