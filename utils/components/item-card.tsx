"use client";
import { cn } from "@/shadcn/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type itemCardProps = {
   image: string;
   author: string;
   views: number;
   timeCreated: string;
   address: string;
   price: string;
   tags: string[];
};

function ItemCard({
   image,
   address,
   price,
   author,
   views,
   timeCreated,
   tags,
}: itemCardProps) {
   const [isFavorite, setIsFavorite] = useState(false);
   function onAddToFavorites() {
      setIsFavorite(!isFavorite);
   }

   return (
      <div className="pb-6 mb-6">
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
            {/* <div
               className=" rounded-full p-2 absolute top-2 right-2 bg-black/5 backdrop-blur-sm"
               onClick={onAddToFavorites}
            >
               <Heart className={cn(" size-7 text-white", isFavorite && "fill-red-400 ")} />
            </div> */}
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
         </div>
         <div className="px-3 py-3 flex gap-3 items-center flex-wrap">
            {/* <div className="bg-gray-400 size-10 aspect-square rounded-full" /> */}
            <div className="flex-1">
               <p className="leading-6 font-semibold">{address}</p>
               <div>
                  {/* <p className="text-xs">{author}</p> */}
                  <div className="text-xs pt-1.5 flex items-center gap-1">
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
