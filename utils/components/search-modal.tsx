"use client";

import { ArrowLeft, Clock3, Search, X } from "lucide-react";

import { Button } from "@/shadcn/components/button";
import { Dialog, DialogContent, DialogTitle } from "@/shadcn/components/dialog";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput
} from "@/shadcn/components/input-group";
import { useState } from "react";

const recentSearches = [
   "Apartment near UP Diliman",
   "Boarding house",
   "Studio apartment",
   "Pet friendly",
   "Condo",
];

const suggestions = [
   "₱5k - ₱10k",
   "Near School",
   "With Parking",
   "Furnished",
   "Air Conditioned",
];

type Props = {
   open: boolean;
   setOpen: (open: boolean) => void;
};

export default function SearchModal({ open, setOpen }: Props) {
   const [search, setSearch] = useState("");
   return (
      <>
         <Dialog open={open} onOpenChange={setOpen}>
            {/* <DialogTitle hidden>Search</DialogTitle> */}
            <DialogContent
               showCloseButton={false}
               className="h-dvh max-w-full rounded-none border-0 p-0 sm:max-w-full"
            >
               <div>
                  <div className="flex gap-2 px-2 py-4 mt-4 ">
                     <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setOpen(false)}
                     >
                        <ArrowLeft className="size-8=7.5" />
                     </Button>

                     <div className="flex-1 pr-8">
                        <InputGroup className="w-full px-1 rounded-full">
                           <InputGroupAddon>
                              <Search size="18" />
                           </InputGroupAddon>
                           <InputGroupInput
                              autoFocus
                              placeholder="Search Tahanan"
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              className="text-lg"
                           />
                           {search && (
                              <InputGroupAddon align="inline-end">
                                 <X className="size-5" onClick={() => setSearch("")} />
                              </InputGroupAddon>
                           )}
                        </InputGroup>
                     </div>
                  </div>

                  <div className="space-y-4 overflow-y-auto px-2">
                     <section>
                        {/* <h2 className="mb-3 text-sm font-semibold">
                           Recent Searches
                        </h2> */}

                        <div className="space-y-2">
                           {recentSearches.map((item) => (
                              <button
                                 key={item}
                                 className="flex text-lg w-full items-center gap-3 rounded-lg px-2 py-3 text-left hover:bg-muted"
                              >
                                 <Clock3 className="size-5 text-muted-foreground" />
                                 <span>{item}</span>
                              </button>
                           ))}
                        </div>
                     </section>

                     <section>
                        <h2 className="mb-3 text-sm font-semibold">
                           Suggested Filters
                        </h2>

                        <div className="flex flex-wrap gap-2">
                           {suggestions.map((item) => (
                              <Button
                                 key={item}
                                 variant="secondary"
                                 className="rounded-full"
                              >
                                 {item}
                              </Button>
                           ))}
                        </div>
                     </section>
                  </div>
               </div>
            </DialogContent>
         </Dialog>
      </>
   );
}
