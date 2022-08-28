import { Account, Card, People } from "./models";
import Transact from "./models/TransactModel";

export const Sync = async () => {
    await console.log("Synchronizing tables...");
    await People.sync({ alter: true });
    await Account.sync({ alter: true });
    await Card.sync();
    await Transact.sync({ alter: true });
    await console.log("Tables synced successfully.");
};
