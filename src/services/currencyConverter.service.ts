import axios from "axios";
import { AppError } from "../error";

interface Coin {
    name: string,
    bid: string,
    code: string
}

interface DataJson {
    coins: Coin[]
}

export const currentConverterService = async (from: string, to: string, amount: number): Promise<string> => {
    const dataJson: DataJson = require('../coins.json')
    const url: string = `https://economia.awesomeapi.com.br/last/${from}-${to}`
    let coinConverted = ""

    const getBidDollar = async () => {
        try {
            const request = await axios.get('https://economia.awesomeapi.com.br/last/USD')
            return request.data
        } catch (err) {
            console.log(err)
        }
    }

    const currencyConverter = async () => {
        try {
            const request = await axios.get(url)
            return request.data
        } catch (err: any) {
            if (err.response.data.code === 'CoinNotExists' && to == "UNDEFINED") {
                const coin = dataJson.coins.find((element: Coin) => element.code == from)

                if (!coin) {
                    throw new AppError("Coin not found in coins.json", 404)
                }

                const getDollar = await getBidDollar()
                const dollar = Number(getDollar.USDBRL.bid)
                const bidCoin = Number(coin.bid)

                const nameCoin = coin.name.split('/')[1]

                if (dollar > bidCoin) {
                    return coinConverted = `${(bidCoin / dollar).toFixed(2)} ${nameCoin}`
                } else if (dollar < bidCoin) {
                    return coinConverted = `${(bidCoin * dollar).toFixed(2)} ${nameCoin}`
                } else {
                    return coinConverted = `${dollar.toFixed(2)} dollar`
                }
            }

            console.log(err)
        }
    }

    const resultConversion = await currencyConverter()

    if (to !== "UNDEFINED") {
        const keyObject = Object.keys(resultConversion)[0]
        const result = (Number(resultConversion[keyObject].bid) * amount).toFixed(2)

        const coin = resultConversion[keyObject].name.split('/')[1]

        coinConverted = `${result} ${coin}`
    }

    return coinConverted
}