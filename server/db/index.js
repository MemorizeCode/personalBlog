const Sequelize = require('sequelize')

const sequelize = new Sequelize('personalblog', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port:8889,
  });

sequelize
.authenticate()
.then(() => console.log('БД подключена.'))
.catch((err) => console.error('Ошибка подключения БД: ', err))

module.exports = sequelize
