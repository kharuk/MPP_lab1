const Sequelize = require("sequelize");
const db  = require('../config/db_connection');
const { Film } = require('./film');
const { Cinema } = require('./cinema');

const Session = db.define('session', {
    date: {
        type: Sequelize.DATE
    }
});
Film.be

Film.belongsToMany(Cinema, { through: Session, foreignKey: 'Film_rowId'});
Cinema.hasMany(Film, { through: Session, foreignKey: 'Cinema_rowId'});

module.exports = Session;