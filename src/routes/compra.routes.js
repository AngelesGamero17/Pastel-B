import { Router } from "express";
import {
  getCompra,
  createCompra,
  getOneCompra,
  updateCompra,
  deleteCompra,
} from "../controllers/compraController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getCompra);

router.post("/", requireToken,createCompra);

router.get("/:ID", getOneCompra);

router.put("/:ID",requireToken ,updateCompra);

router.delete("/:ID", requireToken,deleteCompra);

export default router;