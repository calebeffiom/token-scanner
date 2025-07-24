import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { walletAddress } = req.body
    const apiKey = process.env.MORALIS_API_KEY

    const tokensUrl = `https://deep-index.moralis.io/api/v2.2/0x76eC5A0D3632b2133d9f1980903305B62678Fbd3/erc20?chain=avalanche`

    try {
      // Step 1: Fetch tokens from Moralis
      const getTokens = await axios.get(tokensUrl, {
        headers: {
          'accept': 'application/json',
          'X-API-Key': apiKey as string
        }
      })

      const tokens = getTokens.data

      // Step 2: Fetch USD prices for each token in parallel
      const tokenPrices = await Promise.all(
        tokens.map(async (token: any) => {
          const address = token.token_address
          try {
            const res = await axios.get(
              `https://deep-index.moralis.io/api/v2.2/erc20/${address}/price?chain=avalanche&include=percent_change`,
              {
                headers: {
                  accept: 'application/json',
                  'X-API-Key': apiKey as string,
                },
              }
            )
            return {
              address,
              priceUsd: res.data.usdPrice,
              change24h: res.data.usdPrice_24hr_percent_change,
            }
          } catch (error) {
            console.error(`Price fetch failed for ${address}`, error)
            return {
              address,
              priceUsd: 0,
              change24h: 0,
            }
          }
        })
      )

      // Step 3: Merge price info back into token data
      const enrichedTokens = tokens.map((token: any) => {
        const priceInfo = tokenPrices.find(p => p.address.toLowerCase() === token.token_address.toLowerCase())
        return {
          ...token,
          priceUsd: priceInfo?.priceUsd ?? 0,
          change24h: priceInfo?.change24h ?? 0,
        }
      })

      res.status(200).json({ message: enrichedTokens })

    } catch (error) {
      console.error("Server error:", error)
      res.status(500).json({ message: "Server failed" })
    }
  } else {
    res.status(404).json({ message: "Not found. Bad request." })
  }
}
