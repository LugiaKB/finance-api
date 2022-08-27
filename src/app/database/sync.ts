import { Account, Card, People } from "./models";

export const Sync = async () => {
    await console.log("Synchronizing tables...");
    await People.sync({ alter: true });
    await Account.sync({ alter: true });
    await Card.sync();
    await console.log("Tables synced successfully.");
};
