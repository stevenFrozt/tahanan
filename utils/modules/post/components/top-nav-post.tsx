"use client";
import SearchModal from "@/utils/components/search-modal";
import { Heart, MoveLeft, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/shadcn/lib/utils";

const TopNavPost = () => {
   const [open, setOpen] = useState(false);

   const router = useRouter();

   const handleBack = () => {
      if (window.history.length > 1) return router.back();
      return router.push("/"); // fallback
   };
   const [isFavorite, setIsFavorite] = useState(false);
   function onAddToFavorites() {
      setIsFavorite(!isFavorite);
   }

   return (
      <>
         <div className="flex gap-4 px-4 py-4 items-center justify-between">
            <div className="flex items-center gap-2" onClick={handleBack}>
               <MoveLeft className="size-8 stroke-2" />
               Back
            </div>
            <div className="flex gap-4 items-center">
               <Search className="size-6" onClick={() => setOpen(true)} />
               <motion.div
                  onClick={onAddToFavorites}
                  animate={{
                     scale: isFavorite ? [1, 1.35, 1] : 1,
                  }}
                  transition={{
                     duration: 0.3,
                  }}
               >
                  <Heart
                     className={cn(
                        "size-6 transition-colors duration-300",
                        isFavorite
                           ? "fill-red-500 text-transparent"
                           : "text-foreground",
                     )}
                  />
               </motion.div>
            </div>
         </div>
         <SearchModal open={open} setOpen={setOpen} />
      </>
   );
};

export default TopNavPost;
