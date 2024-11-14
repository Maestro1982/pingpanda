import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

import { Heading } from "@/components/heading"

interface DashboardIndividualPageProps {
  title: string
  children?: React.ReactNode
  hideBackButton?: boolean
  cta?: React.ReactNode
}

export const DashboardIndividualPage = ({
  title,
  children,
  hideBackButton,
  cta,
}: DashboardIndividualPageProps) => {
  return (
    <section className="flex flex-col flex-1 h-full w-full">
      <div className="flex justify-between p-6 sm:p-8 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-8">
          {hideBackButton ? null : (
            <Button className="w-fit bg-white" variant="outline">
              <ArrowLeft className="size-4" />
            </Button>
          )}

          <Heading>{title}</Heading>

          {cta ? <div>{cta}</div> : null}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-8 overflow-y-auto">
        {children}
      </div>
    </section>
  )
}
