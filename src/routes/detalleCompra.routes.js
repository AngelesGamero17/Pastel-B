import { Router } from "express";
import {
  getDetalleCompra,
  createDetalleCompra,
  getOneDetalleCompra,
  updateDetalleCompra,
  deleteDetalleCompra,
} from "../controllers/detalleCompraController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getDetalleCompra);

router.post("/", requireToken,createDetalleCompra);

router.get("/:ID", getOneDetalleCompra);

router.put("/:ID",requireToken ,updateDetalleCompra);

router.delete("/:ID", requireToken,deleteDetalleCompra);

export default router;