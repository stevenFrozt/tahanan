"use client"

import { useEffect } from "react"
import { signIn } from "next-auth/react"

export default function GooglePopup() {
  useEffect(() => {
    signIn("google", {
      callbackUrl: "/auth/popup-callback",
      redirect: true,
    })
  }, [])

  return <div className="h-screen grid place-items-center">
  <p className="p-4 text-center ">Redirecting to Google...</p>
  </div>
}