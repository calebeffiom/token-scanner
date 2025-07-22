import { Button } from "@ui"
import { ChevronDown, Wallet} from "lucide-react"
import { useWallet } from "hooks/wallet"
import { useRecoilValue } from "recoil"
import { walletAtom } from "utils/wallet"
import { useState } from "react"
const Navbar = () => {
  const { connectWallet, disconnectWallet } = useWallet()
  const [showDropdown, setShowDropDown] = useState<boolean>(false)
  const wallet = useRecoilValue(walletAtom)
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 md:w-12 md:h-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <Wallet className="w-3 h-3 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <h1 className="text-sm md:text-xl font-bold text-gray-900 dark:text-white">C-Scan</h1>
          </div>
        </div>
        <div className="relative flex items-center">
          <Button onClick={wallet?.connected ? () => { setShowDropDown(!showDropdown) } : () => { connectWallet()}} className="bg-blue-600 hover:bg-blue-700">
            {/* <Wallet className="w-4 h-4 mr-2" /> */}
            <div className={`w-3 h-3 mr-1 ${wallet?.connected?"bg-[#36dc36]":"bg-red-500"} rounded-full`}></div>
            {wallet?.connected ? `${wallet?.address?.slice(0, 14)}...` : "Connect Wallet"}
            {wallet?.connected && <ChevronDown className={`w-3 h-3 ${showDropdown?"-rotate-180":"rotate-0"}`}/>}
          </Button>
            

         {showDropdown &&
           <div className="absolute top-11 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1">
           <Button
             onClick={() => {
              disconnectWallet()
             }}
             className="bg-[transparent] flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
           >
             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
             </svg>
             Disconnect
           </Button>
         </div>
         }
        </div>
        
      </div>
    
    </nav>
  )
}
export default Navbar