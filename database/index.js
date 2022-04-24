import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import { DIALECT, DB_CONNECTION_SUCCESS, DB_CONNECTION_ERROR } from '../constants/index.js';
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
        dialect: DIALECT,
        host: process.env.host,
    });

(async () => {
    try {
        await sequelize.authenticate();
        console.log(DB_CONNECTION_SUCCESS);
    } catch (error) {
        console.error(DB_CONNECTION_ERROR, error);
    }
})();
