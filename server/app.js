import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import CookieParser from "cookie-parser";
import BodyParser from "body-parser";

import userRouter from "./router/userRouter";
// import express from "express";

const app = express();

app.use(cors());
app.use(helmet());
app.use(CookieParser());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/", userRouter);


export default app;