import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { walletAtom } from 'utils/wallet'
import type { ComponentType } from 'react'

interface Props {
    children: React.ReactNode
    redirectTo?: string // optional custom redirect path
  }
  
  const RedirectIfNotConnected: React.FC<Props> = ({ children, redirectTo = '/' }) => {
    const wallet = useRecoilValue(walletAtom)
    const router = useRouter()
  
   
  useEffect(() => {
    // Redirect if wallet is not connected
    if (!wallet?.connected || !wallet.address) {
      router.replace(redirectTo)
    }
  }, [wallet, redirectTo])

  if (!wallet?.connected || !wallet.address) return null // avoid flicker

  return <>{children}</>
  }
  
  export default RedirectIfNotConnected