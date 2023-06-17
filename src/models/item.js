import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const item = sequelize.define("item", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idTipoItem: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      idCategoria: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipoPrecio: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fechaVencimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      
    }
);


