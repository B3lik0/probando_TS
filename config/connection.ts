import { Sequelize } from "sequelize";

const db = new Sequelize("node", "root", "guada", {
  host: "localhost",
  dialect: "mysql",
});

export default db;