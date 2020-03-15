require('dotenv').config();

module.exports = {
    development: {
        username: process.env.SEQUELIZE_USERNAME,
        password: process.env.SEQUELIZE_PASSWORD,
        database: process.env.SEQUELIZE_DATABASE,
        host: "127.0.0.1",
        dialect:'mysql',
        operatorsAliases: false,
        logging:false,
    },
    production: {
        username: process.env.SEQUELIZE_USERNAME,
        password: process.env.SEQUELIZE_PASSWORD,
        database: process.env.SEQUELIZE_DATABASE,
        host: "127.0.0.1",
        dialect:'mysql',
        operatorsAliases: false,
        logging:false,
    },
}