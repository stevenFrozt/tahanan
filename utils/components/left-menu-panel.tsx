"use client";

import { Button } from "@/shadcn/components/button";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/shadcn/components/sheet";
import { cn } from "@/shadcn/lib/utils";
import { GalleryVerticalEnd, Menu } from "lucide-react";

export default function LeftMenuPanel() {
   return (
      <Sheet modal>
         <SheetTrigger asChild>
            <Button
               size="sm"
               className={cn(
                  "shrink-0 rounded-lg px-4 mr-2",
                  "bg-muted hover:bg-muted/80",
               )}
            >
               <Menu className="text-card-foreground" />
            </Button>
         </SheetTrigger>
         <SheetContent showCloseButton={false} side="left">
            <SheetHeader>
               <SheetTitle className="sr-only">
                  Are you absolutely sure?
               </SheetTitle>
               <SheetDescription className="sr-only">
                  This action cannot be undone.
               </SheetDescription>
               <div className="flex gap-1 ">
                  <a href="#" className="flex items-center gap-2 font-medium">
                     <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <GalleryVerticalEnd className="size-4" />
                     </div>
                     Tahanan
                  </a>
               </div>
            </SheetHeader>
         </SheetContent>
      </Sheet>
   );
}
