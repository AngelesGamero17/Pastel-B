import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const usuario = sequelize.define("usuario", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombres: {
        type: DataTypes.STRING,
        allowNull: false
      },
      apellidoMaterno: {
        type: DataTypes.STRING,
        allowNull: false
      },
      apellidoPaterno: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true } 
      },
        
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      celular: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dni: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipoUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      
    }
);


