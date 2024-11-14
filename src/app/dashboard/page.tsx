import { redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs/server"

import { db } from "@/lib/db"

import { DashboardIndividualPage } from "@/components/dashboard-individual-page"
import { DashboardPageContent } from "@/app/dashboard/dashboard-page-content"

const DashboardPage = async () => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) {
    redirect("/sign-in")
  }

  return (
    <DashboardIndividualPage title="Dashboard">
      <DashboardPageContent />
    </DashboardIndividualPage>
  )
}
export default DashboardPage
