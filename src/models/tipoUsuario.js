import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const tipoUsuario = sequelize.define("tipoUsuario", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      rol: {
        type: DataTypes.STRING,
        allowNull: false
      },

    }
);


