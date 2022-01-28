import express, { Application } from "express";
import userRoutes from "../routes/usuarios";
import cors from "cors";

import db from "../config/connection";
class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
    usuario: "/api/usuario",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";
    this.dbConnection();
    this.middleware();
    this.routes();
  }

  async dbConnection() {
    try {
      db.authenticate();
      console.log("conectado a la db");
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`servidor en puerto ${this.port}`);
    });
  }
}

export default Server;
