import express from "express";
import {
  createUrl,
  deleteUrl,
  getAllUrl,
  getUrl,
} from "../controller/controllers";

const router = express.Router();

router.post("/api", createUrl);
router.get("/api", getAllUrl);
router.get("/api/:id", getUrl);
router.delete("/api/:id", deleteUrl);

export default router;
