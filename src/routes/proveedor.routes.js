import { Router } from "express";
import {
  getProveedor,
  createProveedor,
  getOneProveedor,
  updateProveedor,
  deleteProveedor,
} from "../controllers/proveedorController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getProveedor);

router.post("/", requireToken,createProveedor);

router.get("/:ID", getOneProveedor);

router.put("/:ID",requireToken ,updateProveedor);

router.delete("/:ID", requireToken,deleteProveedor);

export default router;