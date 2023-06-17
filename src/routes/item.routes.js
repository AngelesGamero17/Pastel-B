import { Router } from "express";
import {
  getItem,
  createItem,
  getOneItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getItem);

router.post("/", requireToken,createItem);

router.get("/:ID", getOneItem);

router.put("/:ID",requireToken ,updateItem);

router.delete("/:ID", requireToken,deleteItem);

export default router;