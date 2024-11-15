import { redirect } from "next/navigation"
import { PlusIcon } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"

import { db } from "@/lib/db"

import { DashboardIndividualPage } from "@/components/dashboard-individual-page"
import { CreateEventCategoryModal } from "@/components/create-event-category-modal"

import { DashboardPageContent } from "@/app/dashboard/dashboard-page-content"

import { Button } from "@/components/ui/button"

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
    <DashboardIndividualPage
      title="Dashboard"
      cta={
        <CreateEventCategoryModal>
          <Button>
            <PlusIcon className="size-4 mr-2" />
            Add Category
          </Button>
        </CreateEventCategoryModal>
      }
    >
      <DashboardPageContent />
    </DashboardIndividualPage>
  )
}
export default DashboardPage
