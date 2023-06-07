import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const validatedQuery = (req: Request, res: Response, next: NextFunction): Response | void => {
    const coins = ["USD", "BRL", "EUR", "BTC", "ETH"]
    const from = String(req.query.from).toLocaleUpperCase()
    const to = String(req.query.to).toLocaleUpperCase()

    if (from !== "UNDEFINED" && to !== "UNDEFINED") {
        const checkCoinExistFrom = coins.includes(from)
        const checkCoinExistTo = coins.includes(to)

        if (!checkCoinExistFrom || !checkCoinExistTo) {
            throw new AppError(`We only accept the following types of currencies: ${coins}`, 400)
        }
    }

    next()
}