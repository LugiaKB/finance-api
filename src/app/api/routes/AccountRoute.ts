import { Router } from "express";
import { CardMiddleware } from "../middlewares/CardMiddleware";
import { CardValidation } from "../validations/CardValidation";
import * as accountController from "../controllers/AccountController";
import {
    TransactCreateValidation,
    TransactRevertValidation,
} from "../validations/TransactValidation";

const AccountRouter: Router = Router();

AccountRouter.post(
    "/:accountId/cards",
    CardMiddleware,
    CardValidation,
    accountController.createCard
);
AccountRouter.post(
    "/:accountId/transactions",
    TransactCreateValidation,
    accountController.createTransact
);
AccountRouter.post(
    "/:accountId/transactions/:transactionId/revert",
    TransactRevertValidation,
    accountController.revertTransact
);
AccountRouter.get("/:accountId/cards", accountController.getAccountWithCards);
AccountRouter.get("/:accountId/balance", accountController.getBalance);
AccountRouter.get("/:accountId/transactions", accountController.getTransacts);

export default AccountRouter;
