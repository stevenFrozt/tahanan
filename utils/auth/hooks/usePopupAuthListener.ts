"use client"

import { useSession } from "next-auth/react"
import { useEffect } from "react"

// Add this in your login component or layout
export function usePopupAuthListener() {
  const { update } = useSession()

  useEffect(() => {
    const handler = async (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return
      if (event.data?.type !== "AUTH_COMPLETE") return
      await update() // refreshes session in parent window
      window.location.href = "/" // ← add this
    }

    window.addEventListener("message", handler)
    return () => window.removeEventListener("message", handler)
  }, [update])
}