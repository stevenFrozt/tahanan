"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
   const router = useRouter();

   return (
      <div className="flex items-center gap-2" onClick={() => router.back()}>
         <MoveLeft className="size-8 stroke-2 " />
         Menu
      </div>
   );
}
