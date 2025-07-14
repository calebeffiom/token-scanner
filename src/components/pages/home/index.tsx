import { Button } from "@ui"
import { Wallet, Shield, Zap, BarChart3 } from "lucide-react"
import { useWallet } from "hooks/wallet"
const HomePage = () =>{
const {connectWallet} = useWallet()

    return(
        <div className="flex flex-col items-center justify-center px-6 py-20">
        <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center mb-8">
          <Wallet className="w-12 h-12 text-white" />
        </div>

        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">Welcome to Token Scanner</h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-12 leading-relaxed">
          Connect your MetaMask wallet to view and analyze your ERC-20 tokens on Avalanche C-Chain. Get insights into
          your portfolio with our advanced scanning tools.
        </p>

        <Button
          onClick={()=>{connectWallet()}}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl mb-16"
        >
          <Wallet className="w-5 h-5 mr-3" />
          Connect Wallet
        </Button>

        {/* Features */}
        <div className="flex items-center space-x-16 mt-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-3">
              <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-gray-600 dark:text-gray-300 font-medium">Secure</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-gray-600 dark:text-gray-300 font-medium">Fast</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-3">
              <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-gray-600 dark:text-gray-300 font-medium">Analytics</span>
          </div>
        </div>
      </div>
    )
}
export default HomePage