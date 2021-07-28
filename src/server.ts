import "typeorm";
import express, {NextFunction, Request, Response} from "express";
import ".database";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);

app.listen(8080, () => console.log('server is running'));