import MobileNav from "@/utils/components/mobile-nav";
import React from "react";
import { auth } from "../auth/auth";

const MobileLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth();
   return (
      <>
         <>{children}</>
          <MobileNav session={session} />
      </>
   );
};

export default MobileLayout;
