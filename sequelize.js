const Sequelize = require('sequelize');
const UserModel = require('./models/User');

const sequelize = new Sequelize('usersApp', 'root', 'password', {
    // host: 'localhost',
    // dialect: 'mysql', 
    HOST: "us-cdbr-east-03.cleardb.com",
    USER: "b444dc7bd6d321",
    PASSWORD: "6da63696",
    DB: "heroku_8580e419a8c1c06"
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: true })
.then(() => {
    console.log('Database and tables created here!')
});

module.exports = { User }