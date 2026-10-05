"use client";

import { Button } from "@/shadcn/components/button";
import { BookOpenCheck, Handshake, LogOut, Moon, Sun } from "lucide-react";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";

const ProfileMenu = () => {
   const { setTheme, theme } = useTheme();

   return (
      <div className="py-4">
         <p className="text-[.6rem] py-2">PROFILE MENU</p>
         <div className="space-y-1">
            <Button
               variant="ghost"
               className="w-full justify-start text-md py-6"
            >
               <BookOpenCheck /> Quick guide
            </Button>
            <Button
               variant="ghost"
               className="w-full justify-start text-md py-6"
               onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
               {theme === "light" ? <Moon /> : <Sun />}
               {theme === "light" ? "Dark" : "Light"} mode
            </Button>
            <Button
               variant="ghost"
               className="w-full justify-start text-md py-6"
            >
               <Handshake /> Terms & conditions
            </Button>
            {/* <form
               action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/login" });
               }}
            >
            </form> */}
            <Button
               variant="ghost"
               className="w-full justify-start text-md py-6"
               onClick={() => signOut({ callbackUrl: "/login" })}
            >
               <LogOut /> Log Out
            </Button>
         </div>
      </div>
   );
};

export default ProfileMenu;
