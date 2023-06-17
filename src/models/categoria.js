import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const categoria = sequelize.define("categoria", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombreCategoria: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    }
);


