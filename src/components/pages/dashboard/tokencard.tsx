import { Token } from "./tokenData";
import { Card, CardContent, Badge, Button } from "@ui";
import { TrendingUp, Copy, ExternalLink, Check, X } from "lucide-react";
export default function TokenCard({ token, viewMode }: { token: Token; viewMode: "grid" | "list" }) {
  const usdValue = parseFloat(token.balance) * parseFloat(token.priceUsd)
  const formattedBalance = Number(token.balance).toFixed(4)
  let displayValue = usdValue.toFixed(6)
    if (viewMode === "list") {
      return (
        <Card className="p-4 hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 ${token.logo===null ? "bg-slate-500" : "bg-transparent"} rounded-full flex items-center justify-center`}>
                  {token.logo === null ?
                    <span className={`text-lg font-bold text-white`}>{token.symbol.slice(0, 2)}</span>
                  :
                  <img src={token.logo} alt="" />
                  }
                </div>
                <div className=" items-center">
                  <div>
                    <h3 className="font-semibold text-[10px] sm:text-lg text-gray-900 dark:text-white">{token.symbol}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{token.name}</p>
                  </div>
                 {token.verified_contract ?
                  <Badge
                  variant="secondary"
                  className="bg-green-100 mt-2 text-green-700 dark:bg-green-900 dark:text-green-300"
                >
                  <span className="flex flex-row items-center text-[10px] sm:text-sm"><Check className="w-3 h-3 mr-1" />
                  Verified</span>
                </Badge> :

                 <Badge
                 variant="secondary"
                 className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
               >
                 <span className="flex flex-row items-center text-[10px] sm:text-sm"><X className="w-3 h-3 mr-1" />
                 Unverified</span>
               </Badge>}
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-[15px] sm:text-lg text-gray-900 dark:text-white">{formattedBalance + " " + token.symbol}</p>
                <p className={`text-sm font-medium ${Number(token.security_score) < 50?"text-red-600 dark:text-red-400":"text-green-600 dark:text-green-400"}`}>{token.security_score === null?"0%":token.security_score + "%"}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    }
  
    // Grid view (existing code)
    return (
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${token.logo===null ? "bg-slate-500" : "bg-transparent"} rounded-full flex items-center justify-center`}>
                  {token.logo === null ?
                    <span className={`text-lg font-bold text-white`}>{token.symbol.slice(0, 2)}</span>
                  :
                  <img src={token.logo} alt="" />
                  }
                </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{token.symbol}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{token.name}</p>
              </div>
            </div>
            {token.verified_contract ?
                  <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                >
                  <span className="flex flex-row items-center"><Check className="w-3 h-3 mr-1" />
                  Verified</span>
                </Badge> :

                 <Badge
                 variant="secondary"
                 className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
               >
                 <span className="flex flex-row items-center"><X className="w-3 h-3 mr-1" />
                 Unverified</span>
               </Badge>}
          </div>
  
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">Balance</span>
              <span className="font-medium text-gray-900 dark:text-white">{formattedBalance  + " " + token.symbol}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">Security score</span>
              <span className={`text-sm font-medium ${Number(token.security_score) < 50?"text-red-600 dark:text-red-400":"text-green-600 dark:text-green-400"}`}>{token.security_score === null?"0%":token.security_score + "%"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">USD Value</span>
              <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                {"$" + " " + displayValue}
              </span>
            </div>
          </div>
  
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-center bg-transparent">
              <Copy className="w-4 h-4 mr-2" />
              Copy Address
            </Button>
            <Button variant="outline" className="w-full justify-center bg-transparent">
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Explorer
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }