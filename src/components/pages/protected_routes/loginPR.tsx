// utils/withRedirectIfConnected.tsx
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { walletAtom } from 'utils/wallet'
import type { ComponentType } from 'react'

interface Props {
    children: React.ReactNode
    redirectTo?: string // optional custom redirect path
  }
  
  const RedirectIfConnected: React.FC<Props> = ({ children, redirectTo = '/dashboard' }) => {
    const wallet = useRecoilValue(walletAtom)
    const router = useRouter()
  
    useEffect(() => {
      if (wallet?.connected && wallet.address) {
        router.replace(redirectTo)
      }
    }, [wallet?.address, redirectTo])
  
    if (wallet?.connected && wallet.address) return null// hide content while redirecting
  
    return <>{children}</>
  }
  
  export default RedirectIfConnected