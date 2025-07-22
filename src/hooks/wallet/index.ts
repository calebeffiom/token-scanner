import { ethers } from "ethers";
import { useCallback } from "react";
import { useRecoilState } from 'recoil';
import { walletAtom } from "utils/wallet";
import { useRouter } from 'next/router'; 
export function useWallet (){
    const [wallet, setWallet] = useRecoilState(walletAtom)
    const router = useRouter();
    
     const connectWallet = useCallback(async () =>{
        if (typeof window.ethereum === 'undefined'){
            console.error("No crypto wallet found")
            return;
          } 
          try{
            const accounts = await window.ethereum.request({
              method: 'eth_requestAccounts'
            });
        
            // Request to add Avalanche C-Chain network
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0xa869', // Fuji Testnet chain ID
                chainName: 'Avalanche Fuji C-Chain',
                nativeCurrency: {
                  name: 'Avalanche',
                  symbol: 'AVAX',
                  decimals: 18
                },
                rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
                blockExplorerUrls: ['https://testnet.snowtrace.io']
              }]
            })
            const provider = await new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner()
            const address = await signer.getAddress()
            
            const activeWallet = {
              address : address ?? "",
              connected: true
            }
            setWallet(activeWallet)
            router.push('/dashboard'); 


          }
          catch (err: any){
            console.error("Connection failed:", err)
            console.log(err.code)
          }
     }, [])

     const disconnectWallet=()=>{
      setWallet(null)
      router.push("/")
     }

        return{connectWallet, disconnectWallet}
}
