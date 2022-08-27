import { Router } from "express";
import { PeopleValidation } from "../validations/PeopleValidation";
import * as peopleController from "../controllers/PeopleController";
import { PeopleMiddleware } from "../middlewares/PeopleMiddleware";
import { AccountValidation } from "../validations/AccountValidation";

const PeopleRouter: Router = Router();

PeopleRouter.post("/", PeopleMiddleware, PeopleValidation, peopleController.create);
PeopleRouter.post("/:peopleId/accounts", AccountValidation, peopleController.createAccount);
PeopleRouter.get("/:peopleId/accounts", peopleController.getAccounts);

export default PeopleRouter;
