"use client"

import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
  return (
    <div className="flex flex-1 w-full items-center justify-center">
      <SignUp fallbackRedirectUrl="/welcome" forceRedirectUrl="/welcome" />
    </div>
  )
}
export default SignUpPage
