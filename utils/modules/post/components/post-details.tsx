"use client";

import { Button } from "@/shadcn/components/button";
import {
   Item,
   ItemContent,
   ItemDescription,
   ItemMedia,
   ItemTitle,
} from "@/shadcn/components/item";
import { Marker, MarkerContent } from "@/shadcn/components/marker";
import ItemCard from "@/utils/components/item-card";
import ReadMoreDetails from "@/utils/components/read-more-details";
import { BedDouble, Eye, PawPrint, Users } from "lucide-react";
import Image from "next/image";
import { data } from "../../home/index2";
import { Session } from "next-auth";

const PostDetails = ({ session }: { session: Session | null }) => {
   const sample = {
      id: 1,
      title: "Modern Apartment in Makati",
      address: "Legazpi Village, Makati City, Metro Manila",
      description:
         "A modern apartment with a spacious living room, balcony, and easy access to malls and offices.",
      price: "$100",
      image: "https://images.pexels.com/photos/19069180/pexels-photo-19069180.jpeg",
      author: "John Doe",
      tags: ["2 Bedrooms", "1 Bathroom", "Car parking area", "Air Conditioned"],
      test: ["2 persons", "1 car"],
      views: 100,
      timeCreated: "1 min ago",
   };

   const zoom = 16; // 1-20
   const latitude = 14.655;
   const longitude = 121.043;
   const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;

   return (
      <>
         <div className="px-3 py-3 flex gap-3 flex-wrap">
            <div className="flex-1">
               <div className="flex items-center justify-between">
                  <div>
                     <p className="text-md">{sample.title}</p>
                     <p className="leading-6 font-semibold text-lg">
                        {sample.address}
                     </p>
                  </div>
                  {/* <Drawer>
                  <DrawerTrigger>
                  <EllipsisVertical className="self-start" />
                  </DrawerTrigger>
                  <DrawerContent>
                  <DrawerHeader className="m-0 p-0 pb-4">
                  <DrawerTitle className="sr-only">Post Menu</DrawerTitle>
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
               </Drawer> */}
               </div>

               <div>
                  <div className="text-xs py-4 flex items-center gap-1 justify-between">
                     <p className="font-bold text-2xl text-primary ">
                        {sample.price}
                        <span className="text-sm">/ month</span>
                     </p>
                     <div className="text-xs pt-2 flex items-center gap-1">
                        <Eye className="size-3" /> {sample.views} views •{" "}
                        {sample.timeCreated}
                     </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8 mt-4 w-full relative pb-6">
                     <h6 className="text-sm font-semibold pb-2 ">
                        Description
                     </h6>
                     <ReadMoreDetails>
                        {sample.description} Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Dolore officiis asperiores
                        inventore ratione accusamus ullam id, totam saepe modi?
                        Nam alias dolorum modi quod quas cum accusamus
                        laudantium laborum possimus?{" "}
                     </ReadMoreDetails>
                  </div>

                  <iframe
                     src={mapUrl}
                     width="100%"
                     height="200"
                     style={{ border: 0 }}
                     loading="lazy"
                     allowFullScreen
                     referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Features */}
                  <div className="mb-20 mt-8">
                     <Marker variant="separator" className="mb-6">
                        <MarkerContent>Features</MarkerContent>
                     </Marker>
                     {/* <h6 className="text-sm font-semibold pb-2">Features</h6> */}
                     <div className="grid grid-cols-3 gap-4">
                        {sample.tags.map((tag) => (
                           <div
                              key={tag}
                              className=" p-2 bg-secondary text-secondary-foreground rounded-md text-xs flex flex-col items-center justify-center text-center aspect-square gap-2"
                           >
                              <BedDouble className="size-6" />
                              <p>{tag}</p>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Capacity
               <div className="space-y-8 my-8">
                  <div className="">
                     <h6 className="text-sm font-semibold pb-2 flex gap-1 items-center">
                     <Users className="size-4" />
                     Max Capacity
                     </h6>
                     <p className="text-sm ">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Adipisci, itaque!
                     </p>
                  </div>
               </div> */}

                  {/* Author */}
                  <div className="flex justify-between items-center my-8">
                     <div className="flex items-center gap-2 ">
                        <div className="bg-gray-500 size-12 aspect-square rounded-full relative">
                           <Image
                              alt="a"
                              src={sample.image}
                              fill
                              className="object-cover absolute rounded-full"
                           />
                        </div>
                        <div>
                           {sample.author}
                           <p className="text-xs text-muted-foreground">
                              Landlord
                           </p>
                        </div>
                     </div>
                     <Button variant={"secondary"}>View Profile</Button>
                  </div>

                  {/* Features */}
                  <div className="mb-10 mt-8">
                     <Marker variant="separator" className="mb-6">
                        <MarkerContent>Landlord Rules</MarkerContent>
                     </Marker>
                     {/* <h6 className="text-sm font-semibold pb-2">Features</h6> */}
                     <div className="space-y-4">
                        <Item variant="outline">
                           <ItemMedia variant="icon">
                              <PawPrint />
                           </ItemMedia>
                           <ItemContent>
                              <ItemTitle className="font-semibold">
                                 No Pets Allowed
                              </ItemTitle>
                              <ItemDescription>
                                 We dont allow pets in this property
                              </ItemDescription>
                           </ItemContent>
                        </Item>
                        <Item variant="outline">
                           <ItemMedia variant="icon">
                              <Users />
                           </ItemMedia>
                           <ItemContent>
                              <ItemTitle className="font-semibold">
                                 Capacity
                              </ItemTitle>
                              <ItemDescription>
                                 Maximum Capacity: <b>2 persons. </b>
                              </ItemDescription>
                           </ItemContent>
                        </Item>
                     </div>
                  </div>

                  {/* <Accordion
                  type={"multiple"}
                  defaultValue={["item-1"]}
                  className="rounded-lg border bg-muted/40"
                  >
                  <AccordionItem
                  value="item-1"
                  className="border-b px-4 last:border-b-0"
                  >
                  <AccordionTrigger>Description</AccordionTrigger>
                  <AccordionContent>{sample.description}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                  value="item-2"
                  className="border-b px-4 last:border-b-0"
                  >
                     <AccordionTrigger>
                        <div className="flex gap-2 items-center">
                           Capacity <Users className="size-4" />
                           <span className="font-semibold bg-primary text-primary-foreground rounded-full size-5 text-sm flex items-center justify-center">2</span>
                        </div>
                     </AccordionTrigger>
                     <AccordionContent>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Unde sapiente asperiores facere
                        </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                     value="item-3"
                     className="border-b px-4 last:border-b-0"
                  >
                     <AccordionTrigger>Features</AccordionTrigger>
                     <AccordionContent>
                     {
                           <div className="flex flex-wrap gap-2">
                           {sample.test.map((tag) => (
                                 <div
                                    key={tag}
                                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs "
                                    >
                                    <p>{tag}</p>
                                    </div>
                              ))}
                              </div>
                              }
                              </AccordionContent>
                              </AccordionItem>
                              </Accordion> */}
               </div>
            </div>
            {/* <ImageModal /> */}
         </div>
         {/* This destroyed my layout why? */}
         <div className="mt-20 ">
            <Marker variant="separator" className="mb-10">
               <MarkerContent>You May Also Like</MarkerContent>
            </Marker>

            <div className="grid grid-cols-2 gap-4">
               {data.map((item) => (
                  <ItemCard
                     key={item.id}
                     id={item.id}
                     session={session}
                     image={item.image}
                     address={item.address}
                     price={item.price}
                     tags={item.tags}
                     author={item.author}
                     views={item.views}
                     timeCreated={item.timeCreated}
                     title={item.title}
                  />
               ))}
            </div>
         </div>
      </>
   );
};

export default PostDetails;
