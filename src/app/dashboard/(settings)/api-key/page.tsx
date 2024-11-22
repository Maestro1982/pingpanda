import { redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs/server"

import { db } from "@/lib/db"

import { DashboardIndividualPage } from "@/components/dashboard-individual-page"

import { ApiKeySettings } from "@/app/dashboard/(settings)/api-key/api-key-settings"

const ApiKeySettingsPage = async () => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) redirect("/sign-in")

  return (
    <DashboardIndividualPage title="API Key">
      <ApiKeySettings apiKey={user.apiKey ?? ""} />
    </DashboardIndividualPage>
  )
}
export default ApiKeySettingsPage
