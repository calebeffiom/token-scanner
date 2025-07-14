import DashboardPage from "components/pages/dashboard"
import LandingLayout from "@layout"
export default function Dashboard() {
  return (
    <LandingLayout
    showNav={true}>
      <DashboardPage/>
    </LandingLayout>
  )
}
