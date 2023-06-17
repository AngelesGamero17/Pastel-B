import { Router } from "express";
import {
  getTipoUsuario,
  createTipoUsuario,
  getOneTipoUsuario,
  updateTipoUsuario,
  deleteTipoUsuario,
} from "../controllers/tipoUsuarioController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getTipoUsuario);

router.post("/",createTipoUsuario);

router.get("/:ID", getOneTipoUsuario);

router.put("/:ID",requireToken ,updateTipoUsuario);

router.delete("/:ID", requireToken,deleteTipoUsuario);

export default router;