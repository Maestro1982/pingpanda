import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { EB_Garamond } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

import { Providers } from "@/components/providers"

import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "PingPanda",
  description:
    "PingPanda is the easiest way to monitor your Saas. Get instant notifications for sales, new users or any other event sent directly to your Discord.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn(inter.variable, eb_garamond.variable)}>
        <body className="font-sans bg-brand-50 text-brand-950 antialiased">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
