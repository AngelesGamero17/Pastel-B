import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const detalleCompra = sequelize.define("detalleCompra", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idItem: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      idCompra: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      
      
    }
);


