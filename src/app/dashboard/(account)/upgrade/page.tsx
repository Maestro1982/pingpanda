import { notFound, redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs/server"

import { db } from "@/lib/db"

import { DashboardIndividualPage } from "@/components/dashboard-individual-page"

import { UpgradePageContent } from "@/app/dashboard/(account)/upgrade/upgrade-page-content"

const AccountUpgradePage = async () => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) redirect("/sign-in")

  return (
    <DashboardIndividualPage title="Pro Membership">
      <UpgradePageContent plan={user.plan} />
    </DashboardIndividualPage>
  )
}
export default AccountUpgradePage
