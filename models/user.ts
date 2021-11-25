import {DataTypes } from "sequelize";
import db from "../db/connection";

const User = db.define('user', {
    number: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    videogame: {
        type: DataTypes.STRING,
    },
    genres: {
        type: DataTypes.STRING, 
    },

});

export default User;