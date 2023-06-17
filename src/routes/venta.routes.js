import { Router } from "express";
import {
  getVenta,
  createVenta,
  getOneVenta,
  updateVenta,
  deleteVenta,
} from "../controllers/ventaController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getVenta);

router.post("/", requireToken,createVenta);

router.get("/:ID", getOneVenta);

router.put("/:ID",requireToken ,updateVenta);

router.delete("/:ID", requireToken,deleteVenta);

export default router;