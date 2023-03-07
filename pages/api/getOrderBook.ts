import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const getData = async () => {
        const response = await fetch(`https://api.0x.org/orderbook/v1?quoteToken=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&baseToken=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`, {
            method: "GET",
            headers: {
                Accepet: '*/*'
            }
        })

        const data = await response.json()
        res.status(200).json({data})
    }
    getData()
}