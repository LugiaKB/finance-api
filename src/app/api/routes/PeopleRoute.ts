import { Router } from "express";
import { PeopleValidation } from "../validations/PeopleValidation";
import * as peopleController from "../controllers/PeopleController";

const PeopleRouter: Router = Router();

PeopleRouter.post("/", PeopleValidation, peopleController.create);

export default PeopleRouter;
