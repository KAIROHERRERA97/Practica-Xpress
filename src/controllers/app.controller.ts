import { Request, Response } from "express";
import { appConsultas } from "../services/app.service";

export async function buscarController(req: Request, res: Response) {
  const response = await appConsultas.BuscarEstudiante();
  res.status(200).json({
    data: response,
    message: "body de la API",
  });
}

export async function deleteController(req: Request, res: Response) {
  const id = req.params.id;
  const response = await appConsultas.EliminarEstudiante(id);
  res.status(200).json(response);
}

export async function createController(req: Request, res: Response) {
  const data = req.body;
  const response = await appConsultas.CrearEstudiante(data.nombre, data.escuela);
  res.status(200).json(response);
}

export async function editeController(req: Request, res: Response) {
  const id = req.params.id;
  const data = req.body;
  const response = await appConsultas.ActualizarEstudiante(id, data.nombre, data.escuela);
  res.status(200).json(response);
}