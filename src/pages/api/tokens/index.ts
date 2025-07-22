import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default  async function handler (req: NextApiRequest, res: NextApiResponse){
    if(req.method === "POST"){
      const {walletAddress} = req.body
      const apiKey = process.env.MORALIS_API_KEY
      const url = `https://deep-index.moralis.io/api/v2.2/${walletAddress}/erc20?chain=avalanche`
       try {
        const getTokens = await axios.get(url,{
            headers:{
              'accept': 'application/json',
              'X-API-Key': apiKey as string
            }
           })
        //    console.log(getTokens)
        res.status(200).json({message: getTokens.data})

       } catch (error) {
         res.status(500).json({message: "server failed"})
       }
    }
    else{
        res.status(404).json({message: "Not found Bad Request"})
    }
}