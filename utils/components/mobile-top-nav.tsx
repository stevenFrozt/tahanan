"use client";
import { Bell, GalleryVerticalEnd, Search } from "lucide-react";
import { useState } from "react";
import SearchModal from "./search-modal";

const MobileTopNav = () => {
   const [open, setOpen] = useState(false);

   return (
      <div className="p-4 flex justify-between">
         <div className="flex gap-1 ">
            <a href="#" className="flex items-center gap-2 font-medium">
               <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
               </div>
               Tahanan
            </a>
         </div>
         <div className="flex gap-4 items-center">
            <Bell />
            <Search onClick={() => setOpen(true)} />
         </div>
         <SearchModal  open={open} setOpen={setOpen}/>
      </div>
   );
};

export default MobileTopNav;
