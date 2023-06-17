import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const tipoItem = sequelize.define("tipoItem", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombreItem: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    }
);


