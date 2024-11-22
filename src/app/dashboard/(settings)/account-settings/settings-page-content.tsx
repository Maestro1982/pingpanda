"use client"

import Link from "next/link"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"

import { client } from "@/lib/client"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export const AccountSettings = ({
  discordId: initialDiscordId,
}: {
  discordId: string
}) => {
  const [discordId, setDiscordId] = useState(initialDiscordId)

  const { mutate, isPending } = useMutation({
    mutationFn: async (discordId: string) => {
      const res = await client.project.setDiscordID.$post({ discordId })
      return await res.json()
    },
  })

  return (
    <Card className="max-w-xl w-full space-y-4">
      <div>
        <Label>Discord ID</Label>
        <Input
          className="mt-1"
          value={discordId}
          onChange={(e) => setDiscordId(e.target.value)}
          placeholder="Enter your Discord ID"
        />
      </div>

      <p className="text-sm/6 mt-2 text-gray-600">
        Don&apos;t know how to find your Discord ID?{" "}
        <Link
          href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID"
          className="text-brand-600 hover:text-brand-500"
          target="_blank"
          rel="noopener"
        >
          Learn how to obtain it here
        </Link>
        .
      </p>

      <div className="pt-4">
        <Button onClick={() => mutate(discordId)} disabled={isPending}>
          {isPending ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </Card>
  )
}
