const dbConfig = require("../config/db.config.js");


const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];


db.url = dbConfig.url;

db.artwalks = require("./artwalk.model.js")(mongoose, mongoosePaginate);

module.exports = db;