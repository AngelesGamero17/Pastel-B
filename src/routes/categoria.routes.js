import { Router } from "express";
import {
  getCategoria,
  createCategoria,
  getOneCategoria,
  updateCategoria,
  deleteCategoria,
} from "../controllers/categoriaController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getCategoria);

router.post("/", requireToken,createCategoria);

router.get("/:ID", getOneCategoria);

router.put("/:ID",requireToken ,updateCategoria);

router.delete("/:ID", requireToken,deleteCategoria);

export default router;