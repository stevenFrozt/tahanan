
"use client";

import { Button } from "@/shadcn/components/button";
import { cn } from "@/shadcn/lib/utils";
import { useLayoutEffect, useRef, useState } from "react";

export default function ReadMoreDetails({ children }: { children: React.ReactNode }) {
   const [expanded, setExpanded] = useState(false);
   const [showReadMore, setShowReadMore] = useState(false);

   const textRef = useRef<HTMLParagraphElement>(null);

   useLayoutEffect(() => {
      const el = textRef.current;
      if (!el) return;

      setShowReadMore(el.scrollHeight > el.clientHeight);
   }, [children]);

   return (
      <div
         className={cn(
            "relative",
            showReadMore && (expanded ? "pb-10" : "pb-8"),
         )}
      >
         <p
            ref={textRef}
            className={cn(
               "text-sm overflow-hidden",
               expanded ? "line-clamp-none" : "line-clamp-3",
            )}
         >
            {children}
         </p>

         {showReadMore &&
            (expanded ? (
               <Button
                  variant="link"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                  onClick={() => setExpanded(false)}
               >
                  Read less
               </Button>
            ) : (
               <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <Button
                     variant="link"
                     className="absolute bottom-0 left-1/2 -translate-x-1/2"
                     onClick={() => setExpanded(true)}
                  >
                     Read more
                  </Button>
               </div>
            ))}
      </div>
   );
}
