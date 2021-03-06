"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define('user', {
    number: {
        type: sequelize_1.DataTypes.STRING,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    videogame: {
        type: sequelize_1.DataTypes.STRING,
    },
    genres: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = User;
//# sourceMappingURL=user.js.map