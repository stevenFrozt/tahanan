import { auth } from "@/utils/auth/auth";
import ProtectThisPage from "@/utils/auth/components/ProtectThisPage";
import MobileTopNav from "@/utils/components/mobile-top-nav";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import ProfileMenu from "./components/profile-menu";
import { cn } from "@/shadcn/lib/utils";

const Profile = async () => {
   const session = await auth();

   const name = session?.user?.name;
   const email = session?.user?.email;

   return (
      <ProtectThisPage>
         <MobileTopNav session={session} />
         <div className="p-4 h-auto">
            <div className="flex justify-center mb-4">
               <div className="flex flex-col items-center justify-center">
                  <Image
                     src={session?.user?.image ?? ""}
                     alt="Next.js logo"
                     width={70}
                     height={70}
                     priority
                     className="rounded-full"
                  />
                  <div className="px-4">
                     <h1 className="text-lg font-semibold">{name}</h1>
                     {email !== "null" && (
                        <p className="text-xs text-muted-foreground leading-2">
                           {email}
                        </p>
                     )}
                     <div
                        className={cn(
                           "flex items-center gap-1 text-xs ",
                           email !== "null" && "mt-2",
                        )}
                     >
                        <BadgeCheck className=" size-4 fill-blue-400 text-white" />
                        Verified
                     </div>
                  </div>
               </div>
            </div>
            <main className="py-4">
               <div className="space-y-4">

               <div className="border bg-primary text-primary-foreground p-4 rounded-lg space-y-1">
                  <h6>Become a landlord</h6>
                  <p className="text-xs text-primary-foreground">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
               </div>
               <div className="border p-4 rounded-lg space-y-1">
                  <h6>My Favorites</h6>
                  <p className="text-xs text-muted-foreground">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
               </div>
               </div>
            </main>
            {/* FOOTER */}
            <ProfileMenu />
         </div>
      </ProtectThisPage>
   );
};

export default Profile;
