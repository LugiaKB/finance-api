import { Router } from "express";
import CardRouter from "./CardRoute";
import PeopleRouter from "./PeopleRoute";

const router = Router();

router.use("/card", CardRouter);
router.use("/people", PeopleRouter);

export default router;
