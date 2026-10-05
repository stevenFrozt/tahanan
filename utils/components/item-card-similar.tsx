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
    MapPin
} from "lucide-react";
import { Session } from "next-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type itemCardSimilarProps = {
   id: number;
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

function ItemCardSimilar({
   id,
   session,
   image,
   address,
   price,
   author,
   views,
   timeCreated,
   tags,
   title,
}: itemCardSimilarProps) {
   const [isFavorite, setIsFavorite] = useState(false);
   const router = useRouter();
   function onAddToFavorites() {
      setIsFavorite(!isFavorite);
   }

   function ViewItem() {
      router.push(`/post/${id}`);
   }
   return (
      <div className="pb-8">
         <div className="relative w-full h-40">
            <Image
               src={image}
               fill
               alt="Image"
               className="object-cover absolute"
               onClick={() => ViewItem()}
            />

            {session && (
               <motion.div
                  whileTap={{ scale: 0.85 }}
                  onClick={onAddToFavorites}
                  className="absolute top-2 right-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-black/5 backdrop-blur-sm"
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
                           "size-5 transition-colors duration-300",
                           isFavorite
                              ? "fill-red-500 text-transparent"
                              : "text-white",
                        )}
                     />
                  </motion.div>
               </motion.div>
            )}
         </div>
         <div className="px-1 py-2 flex gap-3 items-center flex-wrap">
            {/* <div className="bg-gray-400 size-10 aspect-square rounded-full" /> */}
            <div className="flex-1">
               <div className="flex items-center justify-between">
                  <div onClick={() => ViewItem()}>
                     <p className="text-[.7rem]">{title}</p>
                     <p className="leading-5 font-semibold text-xs inline-flex gap-.5">
                        <MapPin className="size-4 fill-primary stroke-white mt-.7" /> {address}
                     </p>
                  </div>
                  <Drawer>
                     <DrawerTrigger>
                        <EllipsisVertical className="self-start size-4" />
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
                  <div className="text-[.6rem] pt-4 flex items-center gap-1 no-scrollbar overflow-x-auto  ">
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
                  className="dark:bg-secondary bg-muted flex items-center text-nowrap   px-2 py-1.5 rounded-full mr-2  text-[.5rem]"
               >
                  {tag}
               </span>
            ))}
         </div>
         <p
            className="font-bold text-sm mt-4 text-primary px-3"
            onClick={() => ViewItem()}
         >
            {price}
            <span className="text-sm">/ month</span>
         </p>
      </div>
   );
}

export default ItemCardSimilar;
