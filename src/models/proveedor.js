import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const proveedor = sequelize.define("proveedor", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      identificador: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    }
);


