import { PropsWithChildren } from "react"
import { PlusCircle } from "lucide-react"

import { Icons } from "@/components/icons"

export const MockDiscordUI = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-gray text-white rounded-lg overflow-hidden shadow-xl">
      {/* server list */}
      <div className="hidden sm:flex w-[72px] bg-[#202225] py-3 flex-col items-center">
        <div className="size-12 bg-discord-brand-color rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
          <Icons.discord className="size-3/5 text-white" />
        </div>

        <div className="w-8 h-[2px] bg-discord-gray rounded-full my-2" />

        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="size-12 bg-discord-gray rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-discord-brand-color cursor-not-allowed"
          >
            <span className="text-lg font-semibold text-gray-400">
              {String.fromCharCode(65 + i)}
            </span>
          </div>
        ))}

        <div className="size-12 bg-discord-gray rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-discord-brand-color cursor-not-allowed">
          <PlusCircle className="text-[#3ba55c] hover:text-white" />
        </div>
      </div>
    </div>
  )
}