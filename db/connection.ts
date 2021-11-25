const express = require('express');
const cors = require('cors');
import { Sequelize } from "sequelize";
const db = new Sequelize('scio-bot', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false,
});
export default  db;