import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll();

    res.json({
      usuarios,
    });
  } catch (error: any) {
    res.json({
      error: error.message,
    });
  }
};

export const getUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuarios = await Usuario.findByPk(id);
    if (usuarios) {
      res.json({
        usuarios,
      });
    } else {
      res.status(404).json({
        msg: "no encontrado",
      });
    }
  } catch (error: any) {
    res.json({
      error: error.message,
    });
  }
};

export const postUsuario = (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    msg: "postUsuario",
    body,
  });
};

export const putUsuario = (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  res.json({
    msg: "putUsuario",
    body,
  });
};

export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "deleteado",
    id,
  });
};
