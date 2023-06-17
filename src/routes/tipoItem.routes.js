import { Router } from "express";
import {
  getTipoItem,
  createTipoItem,
  getOneTipoItem,
  updateTipoItem,
  deleteTipoItem,
} from "../controllers/tipoItemController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getTipoItem);

router.post("/", requireToken,createTipoItem);

router.get("/:ID", getOneTipoItem);

router.put("/:ID",requireToken ,updateTipoItem);

router.delete("/:ID", requireToken,deleteTipoItem);

export default router;