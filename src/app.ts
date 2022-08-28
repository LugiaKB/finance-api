//libraries
import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import bodyParser from "body-parser";
import express, { Application, Request } from "express";

//in file
import { ErrorHandler } from "./app/api/middlewares/ErrorMiddleware";
import router from "./app/api/routes";
import { InvalidRouteError } from "./shared/errors";
import { connectDatabase } from "./app/database";

const app: Application = express();
const port: number = 2500;

app.use(bodyParser.json());
app.use("/", router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use("*", (req: Request) => {
    throw new InvalidRouteError(req.baseUrl, req.method);
});

app.use(ErrorHandler);

connectDatabase();
