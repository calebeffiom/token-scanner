import { Token } from "./tokenData";
import { Card, CardContent, Badge, Button } from "@ui";
import { TrendingUp, Copy, ExternalLink } from "lucide-react";
export default function TokenCard({ token, viewMode }: { token: Token; viewMode: "grid" | "list" }) {
    if (viewMode === "list") {
      return (
        <Card className="p-4 hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 ${token.bgColor} rounded-full flex items-center justify-center`}>
                  <span className={`text-lg font-bold ${token.textColor}`}>{token.symbol.slice(0, 2)}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{token.symbol}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{token.name}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  >
                    <TrendingUp className="w-3 h-3 mr-1" />
                    High Value
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg text-gray-900 dark:text-white">{token.balanceFormatted}</p>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">{token.usdValue}</p>
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
              <div className={`w-12 h-12 ${token.bgColor} rounded-full flex items-center justify-center`}>
                <span className={`text-lg font-bold ${token.textColor}`}>{token.symbol.slice(0, 2)}</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{token.symbol}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{token.name}</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
              <TrendingUp className="w-3 h-3 mr-1" />
              High Value
            </Badge>
          </div>
  
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">Balance</span>
              <span className="font-medium text-gray-900 dark:text-white">{token.balanceFormatted}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">USD Value</span>
              <span className="font-semibold text-green-600 dark:text-green-400">{token.usdValue}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">Last Transfer</span>
              <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2" />
                {token.lastTransfer}
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