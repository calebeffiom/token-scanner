import HomePage from "components/pages/home"
import LandingLayout from "@layout"
export default function Home() {
  return (
    <LandingLayout
    showNav={true}>
      <HomePage/>
    </LandingLayout>
  )
}
