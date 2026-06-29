"use client";

import { Button } from "@/shadcn/components/button";
import { cn } from "@/shadcn/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

const categories = [
   "All",
   "Apartments",
   "Boarding House",
   "Condo",
   "Studio",
   "Pet Friendly",
   "Near School",
   "Near Mall",
   "Furnished",
   "₱5k - ₱10k",
   "₱10k+",
   "With Parking",
];

export default function SuggestionBar() {
   const [active, setActive] = useState("All");

   return (
      <div className="no-scrollbar px-4 flex gap-2 overflow-x-auto py-2">
         <Button
            size="sm"
            // onClick={() => setActive(category)}
            className={cn(
               "shrink-0 rounded-lg px-4 mr-2",
               "bg-muted hover:bg-muted/80",
            )}
         >
            <Menu className="text-card-foreground" />
         </Button>
         {categories.map((category) => (
            <Button
               key={category}
               variant={active === category ? "default" : "secondary"}
               size="sm"
               onClick={() => setActive(category)}
               className={cn(
                  "shrink-0 rounded-lg px-4",
                  active === category
                     ? "bg-primary text-primary-foreground"
                     : "bg-muted/80 hover:bg-muted/80 text-card-foreground",
               )}
            >
               {category}
            </Button>
         ))}
      </div>
   );
}
