import { Router } from "express";
import {
  analyzeText,
  getApistats,
  getSupportedLanguagesList,
} from "../controllers/analysisController";

const router = Router();

router.post("/analyze", async (req, res, next) => {
  analyzeText(req, res, next);
});

router.get("/stats", async (req, res, next) => {
  getApistats(req, res, next);
});

router.get("/languages", async (req, res) => {
  getSupportedLanguagesList(req, res);
});

export default router;
