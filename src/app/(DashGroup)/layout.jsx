import DashNav from "../components/DashNav";


export default function DashboardGroup({children}) {
  return (
    <div>
      <DashNav />
      {children}
    </div>
  )
}
