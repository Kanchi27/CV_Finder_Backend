import { DataTypes } from "sequelize";
import { sequelize } from "../database/index.js";

export const Candidate = sequelize.define("candidate", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jobTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jobDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    currentCompany: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

sequelize.sync({ force: false })
