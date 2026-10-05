import { auth } from "@/utils/auth/auth";
import ProtectThisPage from "@/utils/auth/components/ProtectThisPage";
import { MoveLeft } from "lucide-react";
import NewTable from "../tenants-table";

const Rentals = async () => {
   const session = await auth();

   const name = session?.user?.name;
   const email = session?.user?.email;

   const data = [
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
         deposit: 12000,
         start_date: "2026-09-01",
         end_date: "2027-08-31",
         status: "Active",
         created_at: "2026-08-05T14:15:00Z",
      },
   ];
   return (
      <ProtectThisPage>
         {/* <MobileTopNav session={session} /> */}
         <div className="px-4 h-auto">
            <div className="flex items-center gap-2">
               <MoveLeft className="size-8 stroke-2 " />
               Menu
            </div>
            <main>
               {/* TABLE */}
               {/* <DataTable columns={columns} data={data} /> */}
               <NewTable />
            </main>
         </div>
      </ProtectThisPage>
   );
};

export default Rentals;
