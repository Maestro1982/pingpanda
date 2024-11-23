import { redirect } from "next/navigation"
import { PlusIcon } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"

import { db } from "@/lib/db"
import { createCheckoutSession } from "@/lib/stripe"

import { DashboardIndividualPage } from "@/components/dashboard-individual-page"
import { CreateEventCategoryModal } from "@/components/create-event-category-modal"
import { PaymentSuccessModal } from "@/components/payment-success-modal"

import { DashboardPageContent } from "@/app/dashboard/dashboard-page-content"

import { Button } from "@/components/ui/button"

interface DashboardPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) {
    redirect("/welcome")
  }

  const intent = searchParams.intent

  if (intent === "upgrade") {
    const session = await createCheckoutSession({
      userEmail: user.email,
      userId: user.id,
    })

    if (session.url) redirect(session.url)
  }

  const success = searchParams.success

  return (
    <>
      {success ? <PaymentSuccessModal /> : null}
      <DashboardIndividualPage
        title="Dashboard"
        cta={
          <CreateEventCategoryModal>
            <Button className="w-full sm:w-fit">
              <PlusIcon className="size-4 mr-2" />
              Add Category
            </Button>
          </CreateEventCategoryModal>
        }
      >
        <DashboardPageContent />
      </DashboardIndividualPage>
    </>
  )
}
export default DashboardPage
