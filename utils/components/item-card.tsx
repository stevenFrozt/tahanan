"use client";
import {
   Drawer,
   DrawerContent,
   DrawerDescription,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "@/shadcn/components/drawer";

import {
   Command,
   CommandGroup,
   CommandItem,
   CommandList,
} from "@/shadcn/components/command";

import { cn } from "@/shadcn/lib/utils";
import { motion } from "framer-motion";
import {
   Clipboard,
   EllipsisVertical,
   Flag,
   Forward,
   Heart,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Session } from "next-auth";

type itemCardProps = {
   image: string;
   title: string;
   author: string;
   views: number;
   timeCreated: string;
   address: string;
   price: string;
   tags: string[];
   session: Session | null;
};

function ItemCard({
   session,
   image,
   address,
   price,
   author,
   views,
   timeCreated,
   tags,
   title,
}: itemCardProps) {
   const [isFavorite, setIsFavorite] = useState(false);
   function onAddToFavorites() {
      setIsFavorite(!isFavorite);
   }

   return (
      <div className="pb-8">
         {/* <Image /> */}
         <div className="w-full relative">
            {/* <CarouselWithPagination /> */}
         </div>
         <div className="relative w-full h-60">
            <Image
               src={image}
               fill
               alt="Image"
               className="object-cover absolute"
            />

            {session && (
               <motion.div
                  whileTap={{ scale: 0.85 }}
                  onClick={onAddToFavorites}
                  className="absolute top-2 right-2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-black/5 backdrop-blur-sm"
               >
                  <motion.div
                     animate={{
                        scale: isFavorite ? [1, 1.35, 1] : 1,
                     }}
                     transition={{
                        duration: 0.3,
                     }}
                  >
                     <Heart
                        className={cn(
                           "size-7 transition-colors duration-300",
                           isFavorite
                              ? "fill-red-500 text-transparent"
                              : "text-white",
                        )}
                     />
                  </motion.div>
               </motion.div>
            )}
         </div>
         <div className="px-3 py-3 flex gap-3 items-center flex-wrap">
            {/* <div className="bg-gray-400 size-10 aspect-square rounded-full" /> */}
            <div className="flex-1">
               <div className="flex items-center justify-between">
                  <div>
                     <p className="text-sm">{title}</p>
                     <p className="leading-6 font-semibold">{address}</p>
                  </div>
                  <Drawer>
                     <DrawerTrigger>
                        <EllipsisVertical className="self-start" />
                     </DrawerTrigger>
                     <DrawerContent>
                        <DrawerHeader className="m-0 p-0 pb-4">
                           <DrawerTitle className="sr-only">
                              Post Menu
                           </DrawerTitle>
                           <DrawerDescription className="sr-only">
                              Post Menu Description
                           </DrawerDescription>
                        </DrawerHeader>
                        <Command>
                           <CommandList>
                              <CommandGroup
                              //  heading="Suggestions"
                              >
                                 <CommandItem className="py-4 text-md ">
                                    <Heart />
                                    Save to Favorites
                                 </CommandItem>
                                 <CommandItem className="py-4 text-md">
                                    <Clipboard />
                                    Copy Link
                                 </CommandItem>
                                 <CommandItem className="py-4 text-md">
                                    <Forward /> Share
                                 </CommandItem>
                                 <CommandItem className="py-4 text-md">
                                    <Flag />
                                    Report
                                 </CommandItem>
                              </CommandGroup>
                           </CommandList>
                        </Command>
                     </DrawerContent>
                  </Drawer>
               </div>
               <div>
                  {/* <p className="text-xs">{author}</p> */}
                  <div className="text-xs pt-4 flex items-center gap-1">
                     <div className="bg-gray-500 size-4 aspect-square rounded-full relative">
                        <Image
                           alt="a"
                           src={image}
                           fill
                           className="object-cover absolute rounded-full"
                        />
                     </div>
                     {author} • {views} views • {timeCreated}
                  </div>
               </div>
            </div>
         </div>
         <div className="px-3 flex items-center no-scrollbar overflow-x-auto  ">
            {tags?.map((tag, index) => (
               <span
                  key={index}
                  className="dark:bg-secondary bg-muted flex items-center text-nowrap   px-2 py-1.5 rounded-full mr-2 text-xs"
               >
                  {tag}
               </span>
            ))}
         </div>
         <p className="font-bold text-2xl mt-4 text-primary px-3">
            {price}
            <span className="text-sm">/ month</span>
         </p>
      </div>
   );
}

export default ItemCard;
