import { ReactNode } from "react"
import { Navbar } from "@shared"

interface PropTypes{
    showNav: boolean
    children: ReactNode
}
const LandingLayout =({showNav, children}:PropTypes)=>{
    return(
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* <div className="container mx-auto"> */}
            {showNav && <Navbar/>}
            {children}
            {/* </div> */}
        </main>  
    )
}
export default LandingLayout