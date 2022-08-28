import { Router } from "express";
import AccountRouter from "./AccountRoute";
import PeopleRouter from "./PeopleRoute";

const router = Router();

router.use("/people", PeopleRouter);
router.use("/accounts", AccountRouter);

export default router;
