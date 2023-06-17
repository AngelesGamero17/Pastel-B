import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const compra = sequelize.define("compra", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idProveedor: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fechaCompra: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      igv: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      total: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      
      
    }
);


