import express, { Router } from "express";
import { buscarController, deleteController } from "../controllers/app.controller";

const router = express.Router();

router.get("/estudiante", buscarController);
router.delete("/estudiante/:id", deleteController);

// router.put("/estudiante/:id", deleteController);

// router.patch("/estudiante/:id", deleteController);
// router.post("/estudiante/:id", deleteController);


export default router;