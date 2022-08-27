import { Router } from "express";
import { PeopleValidation } from "../validations/PeopleValidation";
import * as peopleController from "../controllers/PeopleController";
import { PeopleMiddleware } from "../middlewares/PeopleMiddleware";

const PeopleRouter: Router = Router();

PeopleRouter.post("/", PeopleMiddleware, PeopleValidation, peopleController.create);

export default PeopleRouter;
