"use client"

import { useSearchParams } from "next/navigation"
import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
  const searchParams = useSearchParams()
  const intent = searchParams.get("intent")
  return (
    <div className="flex flex-1 w-full items-center justify-center">
      <SignIn
        forceRedirectUrl={intent ? `/dashboard?intent=${intent}` : "/dashboard"}
      />
    </div>
  )
}
export default SignInPage
