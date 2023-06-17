import { Router } from "express";
import {
  getUsuario,
  createUsuario,
  getOneUsuario,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usuarioController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getUsuario);

router.post("/",createUsuario);

router.get("/:ID", getOneUsuario);

router.put("/:ID",requireToken ,updateUsuario);

router.delete("/:ID", requireToken,deleteUsuario);

export default router;