import { atom } from "recoil";
interface userWallet{
    address: string,
    connected: boolean  
}
export const walletAtom = atom<userWallet | null>({
    key: "userWallet",
    default: null
})