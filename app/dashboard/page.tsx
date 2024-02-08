import DropZone from "@/components/DropZone"
import { auth } from "@clerk/nextjs"


function Dashboard() {
  const { userId } = auth()
  return (
    <div>
      <DropZone/>
    </div>
  )
}

export default Dashboard
