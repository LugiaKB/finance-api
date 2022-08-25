import bodyParser from "body-parser";
import express, { Application, Request } from "express";
import { ErrorHandler } from "./api/middlewares/ErrorMiddleware";
import router from "./api/routes";
import { InvalidRouteError } from "./shared/errors";

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
