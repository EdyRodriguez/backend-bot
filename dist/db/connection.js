"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('scio-bot', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map