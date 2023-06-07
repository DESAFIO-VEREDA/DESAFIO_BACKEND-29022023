import { Router } from "express";
import { currencyConverterController } from "../controllers/currencyConverter.controller";
import { validatedQuery } from "../middlewares/currencyConverter.middleware";

export const currencyConverterRoute: Router = Router()

currencyConverterRoute.get('', validatedQuery, currencyConverterController)