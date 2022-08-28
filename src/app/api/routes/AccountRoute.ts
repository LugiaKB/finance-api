import { Router } from "express";
import { CardMiddleware } from "../middlewares/CardMiddleware";
import { CardValidation } from "../validations/CardValidation";
import * as accountController from "../controllers/AccountController";

const AccountRouter: Router = Router();

AccountRouter.post(
    "/:accountId/cards",
    CardMiddleware,
    CardValidation,
    accountController.createCard
);
AccountRouter.get("/:accountId/cards", accountController.getAccountWithCards);

export default AccountRouter;
