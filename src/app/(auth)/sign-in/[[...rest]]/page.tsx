"use client"

import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
  return (
    <div className="flex flex-1 w-full items-center justify-center">
      <SignIn />
    </div>
  )
}
export default SignInPage
