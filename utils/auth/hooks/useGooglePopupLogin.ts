"use client"

import { useSession } from "next-auth/react"
import { useCallback, useEffect, useRef } from "react"

export function useGooglePopupLogin() {
  const { update } = useSession()
  const popupRef = useRef<Window | null>(null)

  const loginWithPopup = useCallback(() => {
    const width = 500
    const height = 600
    const left = window.screenX + (window.innerWidth - width) / 2
    const top = window.screenY + (window.innerHeight - height) / 2

    // The callbackUrl sends Google back to our popup-callback page
    const authUrl = `/api/auth/signin/google?callbackUrl=${encodeURIComponent(
      "/auth/popup-callback"
    )}`

    popupRef.current = window.open(
      authUrl,
      "GoogleLogin",
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`
    )
  }, [])

  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      // Security: only accept messages from our own origin
      if (event.origin !== window.location.origin) return
      if (event.data?.type !== "AUTH_COMPLETE") return

      // Refresh the session in the parent window
      await update()

      if (popupRef.current && !popupRef.current.closed) {
        popupRef.current.close()
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [update])

  return { loginWithPopup }
}