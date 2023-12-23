import express, { Router } from "express";
import {
  buscarController,
  createController,
  deleteController,
  editeController,
} from "../controllers/app.controller";

const router = express.Router();
const prefix = "/estudiantes";

router.get(prefix, buscarController);
router.delete(`${prefix}/:id`, deleteController);
router.post(prefix, createController);
router.patch(`${prefix}/:id`, editeController);

export default router;
