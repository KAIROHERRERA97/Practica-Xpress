import { Request, Response } from "express";
import { appConsultas } from "../services/app.service";

export async function buscarController(req: Request, res: Response) {
  const response = await appConsultas.BuscarEstudiante();
  res.status(200).json({
    data: response,
    message: "Hola desde el controlador",
  });
}

export async function deleteController(req: Request, res: Response) {
  const id = req.params.id;
  const response = await appConsultas.EliminarEstudiante(id);
  res.status(200).json(response);
}

export async function createController(req: Request, res: Response) {
  const nombre = req.params.nombre;
  const escuela = req.params.escuela;
  const response = await appConsultas.CrearEstudiante(nombre, escuela);
  res.status(200).json(response);
}