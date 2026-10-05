import { auth } from "@/utils/auth/auth";
import ProtectThisPage from "@/utils/auth/components/ProtectThisPage";
import MobileTopNav from "@/utils/components/mobile-top-nav";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { cn } from "@/shadcn/lib/utils";
import Link from "next/link";

const Rentals = async () => {
   const session = await auth();

   const name = session?.user?.name;
   const email = session?.user?.email;

   return (
      <ProtectThisPage>
         <MobileTopNav session={session} />
         <div className="p-4 h-auto">
            <main className="py-4">
               
               <div className="space-y-4">
                  <div className="border bg-secondary text-secondary-foreground p-4 rounded-lg space-y-1">
                     <h6>Manage Properties</h6>
                     <p className="text-xs text-primary-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     </p>
                  </div>

                  <Link href="/rentals/tenants" >
                     <div className="border bg-secondary text-secondary-foreground p-4 rounded-lg space-y-1">
                        <h6>Manage Tenants</h6>
                        <p className="text-xs text-primary-foreground">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit.
                        </p>
                     </div>
                  </Link>
               </div>
            </main>
         </div>
      </ProtectThisPage>
   );
};

export default Rentals;
