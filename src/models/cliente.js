import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const cliente = sequelize.define("cliente", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: false
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dni: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    }
);


