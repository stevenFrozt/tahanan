import {
   Bell,
   BuildingComplex,
   Flag,
   GalleryVerticalEnd,
   LucideIcon,
   Megaphone,
   Monitor,
   SquareText,
   UserRound,
   UserRoundKey
} from "lucide-react";

const Dashboard = () => {
   /*
 FEATURES

-- can create notification

 LEASES TABLE
 USERS TABLE
 ROLES TABLE
 TRANSACTIONS TABLE
 PROPERTIES TABLE


*/

   const servicesOptions = [
      {
         icon: SquareText,
         title: "Leases",
         description: "Manage leases and agreements",
         url: "/admin/leases",
      },
      {
         icon: UserRound,
         title: "Users",
         description: "Manage users and their roles",
         url: "/admin/users",
      },
      {
         icon: UserRoundKey,
         title: "Roles",
         description: "Manage user roles and permissions",
         url: "/admin/roles",
      },
      {
         icon: BuildingComplex,
         title: "Properties",
         description: "Manage properties and listings",
         url: "/admin/properties",
      },
      {
         icon: Flag,
         title: "Users Report",
         description: "View and manage reports",
         url: "/admin/reports",
      },
      {
         icon: Monitor,
         title: "View as Client",
         description: "View as Client POV",
         url: "/",
      },
      {
         icon: Megaphone,
         title: "Create Notification",
         description: "View as Client POV",
         url: "/admin/announcements",
      },
   ];

   return (
      <>
         <div className="p-4 flex justify-between">
            <div className="flex gap-1 ">
               <a href="#" className="flex items-center gap-2 font-medium">
                  <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                     <GalleryVerticalEnd className="size-4" />
                  </div>
                  Tahanan
               </a>
            </div>
            <div className="flex gap-4 items-center">
               {/* Notification */}
                  <div className="relative inline-block">
                     <Bell />
                     <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex min-w-5 h-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs text-white">
                        9
                     </span>
                  </div>
            </div>
         </div>
         {/* DASHBOARD */}
         <div className="p-4">
            {/* <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1> */}
            <div className="mb-6">
               <div className="grid grid-cols-2 gap-2">
                  <div className="border p-4 rounded-lg">
                     <p className="text-sm font-semibold">Users</p>
                     <p className="text-lg">100</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                     <p className="text-sm font-semibold">Landlords</p>
                     <p className="text-lg">50</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                     <p className="text-sm font-semibold">Tenants</p>
                     <p className="text-lg">50</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                     <p className="text-sm font-semibold">Properties</p>
                     <p className="text-lg">20</p>
                  </div>
               </div>
            </div>
            {/* SERVICES */}
            <div className="grid grid-cols-4 p-2 my-6">
               {servicesOptions.map((option, index) => (
                  <Option
                     key={index}
                     Icon={option.icon}
                     title={option.title}
                     url={option.url}
                  />
               ))}
            </div>

            {/* TRANSACTIONS */}
            <div className="mt-8">
               <h2 className="text-lg font-semibold mb-4">Transactions</h2>
               <div className="border p-4 rounded-lg">
                  <p className="text-lg font-semibold"> Transactions</p>
                  <p className="text-2xl">100</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default Dashboard;

function Option({
   Icon,
   title,
   url,
}: {
   Icon: LucideIcon;
   title: string;
   url: string;
}) {
   return (
      <div className="flex flex-col items-center justify-center p-2 cursor-pointer">
         <div className="border bg-gray-100 aspect-square p-6  rounded-lg flex items-center justify-center ">
            <Icon className="w-5 h-5" />
         </div>
         <p className="text-xs text-center my-2">{title}</p>
      </div>
   );
}
