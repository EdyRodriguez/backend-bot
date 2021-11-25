"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const users = mongoose.model('User', new Schema({
    name: String,
    number: String,
    age: String,
    videogame: String,
    genders: [String]
}));
module.exports = users;
//# sourceMappingURL=users.js.map