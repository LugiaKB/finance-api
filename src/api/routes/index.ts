import { Router } from "express";
import CardRouter from "./CardRoute";

const router = Router();

router.use("/card", CardRouter);

export default router;
