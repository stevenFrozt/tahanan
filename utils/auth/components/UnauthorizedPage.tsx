// app/unauthorized/page.tsx
"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function UnauthorizedPage() {
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const callbackUrl = `${pathname}?${searchParams.toString()}`;
   return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
         <h1 className="text-2xl font-bold">Unauthorized Access</h1>
         <p className="text-gray-500">
            You need to be logged in to view this page.
         </p>

         <Link
            href={"/login" + `?callbackUrl=${encodeURIComponent(callbackUrl)}`}
            className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
         >
            Go to Login
         </Link>
      </div>
   );
}
