import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const detalleVenta = sequelize.define("detalleVenta", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idItem: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      idVenta: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      
      
    }
);


