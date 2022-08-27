import { DB_DIALECT, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "@/config/database";
import { Sequelize } from "sequelize-typescript";
import * as models from "./models";
import { Sync } from "./sync";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    define: {
        freezeTableName: true,
    },
    logging: false,
    models: Object.values(models),
    dialectOptions: {
        useUTC: false,
    },
    timezone: "-03:00",
});

export const connectDatabase = async () => {
    await sequelize
        .authenticate()
        .then(() => {
            console.log(`Successfully connected to ${DB_DIALECT}`);
        })
        .catch((error: Error) => {
            console.log(`Could not connect to ${DB_DIALECT}: ${error}`);
        });

    await Sync();
};
