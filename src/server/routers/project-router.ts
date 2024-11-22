import { addMonths, startOfMonth } from "date-fns"

import { router } from "@/server/__internals/router"
import { privateProcedure } from "@/server/procedures"

import { db } from "@/lib/db"

import { FREE_QUOTA, PRO_QUOTA } from "@/config"

export const ProjectRouter = router({
  getUsage: privateProcedure.query(async ({ c, ctx }) => {
    const { user } = ctx

    const currentDate = startOfMonth(new Date())

    const quota = await db.quota.findFirst({
      where: {
        userId: user.id,
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
      },
    })

    const eventCount = quota?.count ?? 0

    const categoryCount = await db.eventCategory.count({
      where: { userId: user.id },
    })

    const limits = user.plan === "PRO" ? PRO_QUOTA : FREE_QUOTA

    const resetDate = addMonths(currentDate, 1)

    return c.superjson({
      eventsUsed: eventCount,
      eventsLimit: limits.maxEventsPerMonth,
      categoriesUsed: categoryCount,
      categoriesLimits: limits.maxEventCategories,
      resetDate,
    })
  }),
})
