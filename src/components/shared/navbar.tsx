import { Button } from "@ui"
import { Wallet } from "lucide-react"
import { useWallet } from "hooks/wallet"
import { useRecoilValue } from "recoil"
import { walletAtom } from "utils/wallet"
const Navbar = () =>{
    const { connectWallet } = useWallet()
    const wallet = useRecoilValue(walletAtom)
    return(
        <nav className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Token Scanner</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Avalanche C-Chain</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button onClick={()=>{connectWallet()}} className="bg-blue-600 hover:bg-blue-700">
            <Wallet className="w-4 h-4 mr-2" />
            {wallet?.connected ? `${wallet?.address?.slice(0, 14)}...` : "Connect Wallet"}
          </Button>
        </div>
      </nav>
    )
}
export default Navbar