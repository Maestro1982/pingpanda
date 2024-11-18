"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

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
  const router = useRouter()
  return (
    <section className="flex flex-col flex-1 h-full w-full">
      <div className="flex justify-between w-full p-6 sm:p-8 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row w-full items-start sm:items-center gap-6">
          <div className="flex items-center gap-8">
            {hideBackButton ? null : (
              <Button
                onClick={() => router.push("/dashboard")}
                className="w-fit bg-white"
                variant="outline"
              >
                <ArrowLeft className="size-4" />
              </Button>
            )}

            <Heading>{title}</Heading>
          </div>

          {cta ? <div className="w-full">{cta}</div> : null}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-8 overflow-y-auto">
        {children}
      </div>
    </section>
  )
}
