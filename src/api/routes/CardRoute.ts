import { Router } from "express";
import * as controller from "../controllers/CardController";
import { CardMiddleware } from "../middlewares/CardMiddleware";
import { CardValidation } from "../validations/CardValidation";

const CardRouter: Router = Router();

CardRouter.post("/", CardMiddleware, CardValidation, controller.create);

export default CardRouter;
