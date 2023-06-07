import "express-async-errors"
import express, { Application } from "express";
import { handleErrors } from "./error";
import { currencyConverterRoute } from "./routes/currencyConverter.route";

export const app: Application = express()

app.use(express.json())
app.use("", currencyConverterRoute)
app.use(handleErrors)

