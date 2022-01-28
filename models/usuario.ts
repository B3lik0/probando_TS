import { DataTypes } from "sequelize";
import db from "../config/connection";

const Usuario = db.define("Usuario", {
  nombre: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.TINYINT,
  },
});

export default Usuario;
