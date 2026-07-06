"use client";

import {
   Carousel,
   type CarouselApi,
   CarouselContent,
   CarouselItem,
} from "@/shadcn/components/carousel";
import { cn } from "@/shadcn/lib/utils";
import Image from "next/image";
import * as React from "react";

const images = [
   "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
   "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
   "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
   "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
];

export default function CarouselWithPagination() {
   const [api, setApi] = React.useState<CarouselApi>();

   const current = React.useSyncExternalStore(
      React.useCallback(
         (onStoreChange) => {
            if (!api) return () => {};

            api.on("select", onStoreChange);
            api.on("reInit", onStoreChange);

            return () => {
               api.off("select", onStoreChange);
               api.off("reInit", onStoreChange);
            };
         },
         [api],
      ),
      React.useCallback(() => {
         return api ? api.selectedScrollSnap() + 1 : 1;
      }, [api]),
      () => 1,
   );

   const count = api?.scrollSnapList().length ?? images.length;

   return (
      <div className="relative w-full overflow-hidden">
         <Carousel setApi={setApi}>
            <CarouselContent >
               {images.map((image, index) => (
                  <CarouselItem key={index} className="w-full h-60">
                     <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="object-cover h-60 w-full"
                     />
                  </CarouselItem>
               ))}
            </CarouselContent>

            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
         </Carousel>

         {/* Pagination Dots */}
         <div className=" flex absolute transform -translate-x-1/2 left-1/2 bottom-2 items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
               <button
                  key={index}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                     "h-1 w-1 rounded-full transition-all duration-200",
                     current === index + 1
                        ? "bg-primary w-3"
                        : "bg-muted-foreground/50",
                  )}
               />
            ))}
         </div>
      </div>
   );
}
