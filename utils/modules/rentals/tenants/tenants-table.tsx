"use client";

import { useId, useState } from "react";
import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from "@/shadcn/components/avatar";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/shadcn/components/table";
import {
   PencilIcon,
   Trash2Icon,
   ArchiveIcon,
   Building,
   EyeIcon,
   Search,
} from "lucide-react";
import { Checkbox } from "@/shadcn/components/checkbox";
import { Button } from "@/shadcn/components/button";
import SearchModal from "@/utils/components/search-modal";

const items2 = [
   {
      id: "lease-001",
      tenant_id: "tenant-001",
      tenant_name: "Juan Dela Cruz",
      tenant_email: "juan.delacruz@example.com",
      tenant_phone: "+63 917 123 4567",
      tenant_image: "https://i.pravatar.cc/150?img=12",
      property_id: "property-001",
      property_name: "Tahanan Residences",
      property_image:
         "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      room_id: "room-001",
      room_name: "Room 101",
      room_image:
         "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      monthly_rent: 8500,
      monthly_due: "15th",
      deposit: 8500,
      start_date: "2026-08-01",
      end_date: "2027-07-31",
      status: "Active",
      created_at: "2026-07-25T10:30:00Z",
   },
   {
      id: "lease-002",
      tenant_id: "tenant-002",
      tenant_name: "Maria Santos",
      tenant_email: "maria.santos@example.com",
      tenant_phone: "+63 905 987 6543",
      tenant_image: "https://i.pravatar.cc/150?img=47",
      property_id: "property-002",
      property_name: "Greenview Apartments",
      property_image:
         "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      room_id: "room-002",
      room_name: "Room 203",
      room_image:
         "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      monthly_rent: 12000,
      monthly_due: "15th",
      deposit: 12000,
      start_date: "2026-09-01",
      end_date: "2027-08-31",
      status: "Active",
      created_at: "2026-08-05T14:15:00Z",
   },
];

const NewTable = () => {
   const id = useId();

   const [open, setOpen] = useState(false);

   return (
      <>
         <div className="p-4">
            <div className="flex items-center justify-between">
               <h6 className="text-lg font-semibold">Tenants</h6>
               <Search onClick={() => setOpen(true)} />
               <SearchModal
                  open={open}
                  setOpen={setOpen}
                  placeholder="Search tenants"
               />
            </div>
         </div>
         <div className="w-full ">
            <div className="[&>div]:rounded-sm [&>div]:border">
               <Table>
                  <TableHeader>
                     <TableRow className="hover:bg-transparent">
                        <TableHead>
                           <Checkbox
                              id={id}
                              aria-label="select-all"
                              className="ml-2 mr-6 size-6"
                           />
                        </TableHead>
                        <TableHead className="text-md font-semibold">
                           Name
                        </TableHead>
                        <TableHead className="text-md font-semibold">
                           Status
                        </TableHead>
                        <TableHead className="text-md font-semibold">
                           Property
                        </TableHead>
                        <TableHead className="text-md font-semibold">
                           Room
                        </TableHead>
                        <TableHead className="text-md font-semibold">
                           Monthly Rent
                        </TableHead>
                        <TableHead className="text-md font-semibold">
                           Deposit
                        </TableHead>
                        <TableHead className="text-md font-semibold">
                           Start Date
                        </TableHead>
                        <TableHead className="text-md font-semibold">
                           End Date
                        </TableHead>
                        <TableHead className="w-0 pr-4 text-center text-md font-semibold">
                           Actions
                        </TableHead>
                        <TableHead className="w-0 pr-4 text-center text-md font-semibold"></TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {items2.map((item) => (
                        <TableRow
                           key={item.id}
                           className="has-data-[state=checked]:bg-blue-500/10 odd:bg-muted/50 odd:hover:bg-muted/50 hover:bg-transparent"
                        >
                           <TableCell>
                              <Checkbox
                                 id={`table-checkbox-${item.id}`}
                                 aria-label={`product-checkbox-${item.id}`}
                                 className="ml-2 mr-6 size-6"
                              />
                           </TableCell>
                           <TableCell>
                              <div className="flex items-center gap-3 mr-6">
                                 <Avatar className="overflow-hidden rounded-sm after:rounded-[inherit]">
                                    <AvatarImage
                                       src={item.tenant_image}
                                       alt={item.tenant_name}
                                       className="rounded-none!"
                                    />
                                    <AvatarFallback className="text-xs">
                                       {item.tenant_name.slice(0, 2)}
                                    </AvatarFallback>
                                 </Avatar>
                                 <div>
                                    <div className="font-medium">
                                       {item.tenant_name}
                                    </div>
                                    <span className="text-muted-foreground mt-0.5 text-xs">
                                       {item.tenant_phone}
                                    </span>
                                 </div>
                              </div>
                           </TableCell>
                           <TableCell className="pr-8 text-primary font-bold">
                              {item.status}
                           </TableCell>
                           <TableCell className="pr-8 ">
                              <div className="flex items-center gap-2">
                                 <Building className="size-4 text-foreground/50" />
                                 {item.property_name}
                              </div>
                           </TableCell>
                           <TableCell className="pr-8">
                              {item.room_name}
                           </TableCell>
                           <TableCell className="text-right pr-8">
                              {item.monthly_rent}
                           </TableCell>
                           <TableCell className="text-right pr-8">
                              {item.deposit}
                           </TableCell>
                           <TableCell className="pr-8">
                              {item.start_date}
                           </TableCell>
                           <TableCell className="pr-8">
                              {item.end_date}
                           </TableCell>
                           <TableCell className="pr-8">
                              <Button className="flex items-center gap-1 justify-center">
                                 <EyeIcon />
                                 View Records
                              </Button>
                           </TableCell>
                           <TableCell className="pr-8">
                              <div className="flex items-center gap-1">
                                 <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full"
                                    aria-label={`product-${item.id}-edit`}
                                 >
                                    <PencilIcon />
                                 </Button>

                                 <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full"
                                    aria-label={`product-${item.id}-archive`}
                                 >
                                    <ArchiveIcon />
                                 </Button>
                                 <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full text-red-500"
                                    aria-label={`product-${item.id}-remove`}
                                 >
                                    <Trash2Icon />
                                 </Button>
                              </div>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </div>
         </div>
      </>
   );
};

export default NewTable;
