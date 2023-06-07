import { Request, Response } from "express";
import { currentConverterService } from "../services/currencyConverter.service";

export const currencyConverterController = async (req: Request, res: Response): Promise<Response> => {
    const from = String(req.query.from).toLocaleUpperCase()
    const to = String(req.query.to).toLocaleUpperCase()
    const amount = Number(req.query.amount)

    const coinConverted = await currentConverterService(from, to, amount)

    return res.status(201).json({ "result": coinConverted })
}