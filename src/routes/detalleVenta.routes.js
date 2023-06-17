import { Router } from "express";
import {
  getDetalleVenta,
  createDetalleVenta,
  getOneDetalleVenta,
  updateDetalleVenta,
  deleteDetalleVenta,
} from "../controllers/detalleVentaController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getDetalleVenta);

router.post("/", requireToken,createDetalleVenta);

router.get("/:ID", getOneDetalleVenta);

router.put("/:ID",requireToken ,updateDetalleVenta);

router.delete("/:ID", requireToken,deleteDetalleVenta);

export default router;