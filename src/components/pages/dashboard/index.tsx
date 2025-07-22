import { TrendingUp, Grid3X3, List, Search, Divide } from "lucide-react"
import { Button, Input } from "@ui"
// import { mockTokens } from "./tokenData"
import { Token } from "./tokenData"
import TokenCard from "./tokencard"
import PortfolioSkeleton from "./loaders/portfolioSkeleton"
import SearchSkeleton from "./loaders/searchSkeleton"
import TokenSkeleton from "./loaders/tokenSkeleton"
import { useCallback, useEffect, useState } from "react"
import { walletAtom } from "utils/wallet"
import { useRecoilValue } from "recoil"
import { ethers } from "ethers"
import axios from "axios"
const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const wallet = useRecoilValue(walletAtom)
  const [tokens, setTokens] = useState<Token[]>([])
  const [totalTokens, setTotalTokens] = useState<string>("0")
  const [loading, setLoading] = useState<Boolean>(false)

  const filteredTokens = tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getTokenCA = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.post('/api/tokens',{walletAddress: wallet?.address})


      const listOfTokens = await response.data.message
      const parsedTokens: Token[] = listOfTokens.map((token: Token) => ({
        name: token.name,
        symbol: token.symbol,
        balance: ethers.formatUnits(token.balance, token.decimals),
        token_address: token.token_address,
        decimals: token.decimals,
        verified_contract: token.verified_contract,
        logo: token.logo,
        security_score: token.security_score,
      })
      )
      setTokens(parsedTokens)
      const tokenNumber = listOfTokens.length
      setTotalTokens(`${tokenNumber}`)
      setLoading(false)

    } catch (err) {
      console.error('Error fetching token balances:', err);
    }
  }, [])

  useEffect(
    () => {
      getTokenCA()
    }
    , [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Content */}
      <main className="container mx-auto py-6 px-[20px]">
        {/* Portfolio Overview */}
        {loading ?
          <PortfolioSkeleton /> :

          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio Overview</h2>
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">+2.4% (24h)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Value</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">$7,576</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Tokens</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalTokens}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Network</p>
                <p className="text-lg font-semibold text-red-500">Avalanche C-Chain</p>
              </div>
            </div>
          </div>}

        {/* Your Tokens Section */}
        <div>
          {loading ? <SearchSkeleton /> :
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Tokens</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{totalTokens} tokens found</p>
                  {/* <button onClick={getTokenCA} className="bg-[black]">test</button> */}
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className={viewMode === "grid" ? "w-4 h-4 text-white" : "w-4 h-4 text-gray-600"} />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                  >
                    <List className={viewMode === "list" ? "w-4 h-4 text-white" : "w-4 h-4 text-gray-600"} />
                  </Button>
                </div>
              </div>

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search tokens by name or symbol..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white dark:bg-gray-800 text-gray-900 w-[50%] lg:w-[30%] h-[50px] !text-lg"
                />
              </div></div>}

          {/* Token Grid/List */}
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative" : " relative space-y-3"}>
            {loading ? [1, 2, 3, 4, 5, 6].map(() => (<TokenSkeleton />)) :
              tokens.length === 0 ? (<p className="text-center text-2xl mt-24 absolute left-1/2 -translate-x-1/2 text-slate-400">You do not have any tokens</p>) :

                (filteredTokens.map((token, index) => (
                  <TokenCard key={index} token={token} viewMode={viewMode} />
                )))
            }
          </div>
        </div>
      </main>
    </div>
  )
}
export default DashboardPage