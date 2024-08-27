const Sequelize = require('sequelize');
const dataBase = require('./db')

const Produto = dataBase.define('sessao', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Nome:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    Empresa:{
        type: Sequelize.STRING,
        allowNull:false,
    },
}

)

module.exports = Produto