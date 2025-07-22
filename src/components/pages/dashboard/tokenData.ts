
export interface Token {
  name: string
  symbol: string
  balance: string
  token_address: string
  decimals: 18,
  verified_contract: boolean
  logo: string
  security_score: string
}
//  export const mockTokens: Token[] = [
//     {
//       id: "1",
//       symbol: "WAVAX",
//       name: "Wrapped AVAX",
//       balance: "2.5000",
//       balanceFormatted: "2.5000 WAVAX",
//       usdValue: "$2.85K",
//       logoUrl: "/placeholder.svg?height=48&width=48",
//       lastTransfer: "2 days ago",
//       bgColor: "bg-teal-500",
//       textColor: "text-white",
//     },
//     {
//       id: "2",
//       symbol: "USDC.e",
//       name: "USD Coin",
//       balance: "1,250.0000",
//       balanceFormatted: "1,250.0000 USDC.e",
//       usdValue: "$1.25K",
//       logoUrl: "/placeholder.svg?height=48&width=48",
//       lastTransfer: "5 days ago",
//       bgColor: "bg-blue-600",
//       textColor: "text-white",
//     },
//     {
//       id: "3",
//       symbol: "WETH.e",
//       name: "Wrapped Ether",
//       balance: "1.2000",
//       balanceFormatted: "1.2000 WETH.e",
//       usdValue: "$3.24K",
//       logoUrl: "/placeholder.svg?height=48&width=48",
//       lastTransfer: "1 day ago",
//       bgColor: "bg-teal-600",
//       textColor: "text-white",
//     },
//     {
//       id: "4",
//       symbol: "JOE",
//       name: "JoeToken",
//       balance: "500.0000",
//       balanceFormatted: "500.0000 JOE",
//       usdValue: "$235.50",
//       logoUrl: "/placeholder.svg?height=48&width=48",
//       lastTransfer: "3 days ago",
//       bgColor: "bg-purple-600",
//       textColor: "text-white",
//     },
//   ]