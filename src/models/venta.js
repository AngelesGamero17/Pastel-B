import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const venta = sequelize.define("venta", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fechaVenta: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      total: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      igv: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      
      
      
      

    }
);


