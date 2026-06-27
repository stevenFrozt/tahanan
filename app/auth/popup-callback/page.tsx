"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function PopupCallback() {
   const { data: session, status } = useSession();

   useEffect(() => {
      if (status === "loading") return;

      if (window.opener) {
         window.opener.postMessage(
            { type: "AUTH_COMPLETE", session },
            window.location.origin,
         );
         window.close();
      }
   }, [session, status]);

   return (
      <div className="h-screen grid place-items-center">
         <p className="p-4 text-center">
            Signing in... this window will close.
         </p>
      </div>
   );
}
