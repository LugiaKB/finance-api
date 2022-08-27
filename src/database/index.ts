import {
  DB_DIALECT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
} from "@/shared/config/database";
import { Sequelize } from "sequelize-typescript";
import { Client } from "pg";
import * as models from "./models";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  define: {
    freezeTableName: true,
  },
  logging: false,
  models: Object.values(models),
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

  await sequelize.sync({ alter: true });
};
