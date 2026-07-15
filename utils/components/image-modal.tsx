"use client";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
} from "@/shadcn/components/dialog";

import {
   Carousel,
   CarouselContent,
   CarouselItem,
} from "@/shadcn/components/carousel";

const images = [
   "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
   "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
   "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
   "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
];

import Image from "next/image";
import { useState } from "react";
const ImageModal = () => {
   const [open, setOpen] = useState(true);

   return (
      <Dialog open={open} onOpenChange={setOpen} modal>
         <DialogContent className=" max-w-none max-h-none rounded-none py-4 p-0 bg-transparent backdrop-blur-sm border-0">
            <DialogHeader>
               <DialogTitle className="sr-only">
                  Are you absolutely sure?
               </DialogTitle>
               <DialogDescription className="sr-only">
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
               </DialogDescription>

               {/* <Image
                  src="https://images.pexels.com/photos/19069180/pexels-photo-19069180.jpeg"
                  fill
                  alt="a"
                  className="object-contain"
               /> */}
            </DialogHeader>
            <Carousel className="h-full">
               <CarouselContent className="h-full">
                  {images.map((image, index) => (
                     <CarouselItem key={index} className="h-screen">
                        <div className="relative h-full w-full">
                           <Image
                              src={image}
                              fill
                              alt={`Slide ${index + 1}`}
                              className="object-contain"
                           />
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>
            </Carousel>
         </DialogContent>
      </Dialog>
   );
};

export default ImageModal;
