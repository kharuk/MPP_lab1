const Sequelize = require("sequelize");
const db  = require('../config/db_connection');
const Film = require('./film');
const Cinema = require('./cinema');

const Session = db.define('session', {
    date: {
        type: Sequelize.DATE
    }
});

Film.belongsToMany(Cinema, { through: Session, foreignKey: 'Film_Id'});
Cinema.belongsToMany(Film, { through: Session, foreignKey: 'Cinema_Id'});
Session.sync();
module.exports = Session;