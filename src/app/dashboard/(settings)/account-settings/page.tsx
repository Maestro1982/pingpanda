import { redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs/server"

import { db } from "@/lib/db"

import { DashboardIndividualPage } from "@/components/dashboard-individual-page"

import { AccountSettings } from "@/app/dashboard/(settings)/account-settings/settings-page-content"

const AccountSettingsPage = async () => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) redirect("/sign-in")

  return (
    <DashboardIndividualPage title="Account Settings">
      <AccountSettings discordId={user.discordId ?? ""} />
    </DashboardIndividualPage>
  )
}
export default AccountSettingsPage
