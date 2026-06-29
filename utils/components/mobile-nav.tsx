"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, User } from "lucide-react";
import { cn } from "@/shadcn/lib/utils";
import { Session } from "next-auth";
import Image from "next/image";

export default function MobileNav({ session }: { session: Session | null }) {
   const pathname = usePathname();

   const navItems = [
      {
         href: "/",
         label: "Home",
         icon: Home,
      },
      {
         href: "/saved",
         label: "Saved",
         icon: Heart,
      },
      {
         href: "/profile",
         label: "Profile",
         icon: null,
         image: session?.user?.image ?? "",
      },
   ];

   return (
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 md:hidden">
         <div className="mx-auto flex h-16 max-w-md items-center justify-around px-4 pb-safe">
            {navItems.map((item) => {
               const Icon = item.icon;
               const active =
                  item.href === "/"
                     ? pathname === "/"
                     : pathname.startsWith(item.href);

               return (
                  <Link
                     key={item.href}
                     href={item.href}
                     className={cn(
                        "flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 transition-colors",
                        active
                           ? "text-primary"
                           : "text-muted-foreground hover:text-foreground",
                     )}
                  >
                     {Icon && (
                        <Icon
                           className={cn(
                              "size-5",
                              active && "fill-primary/20 stroke-[2.4]",
                           )}
                        />
                     )}
                     {!Icon && (
                        <Image
                           className="rounded-full"
                           alt="Next.js logo"
                           src={session?.user?.image ?? ""}
                           width={20}
                           height={20}
                           priority
                        />
                     )}
                     <span className="text-xs font-medium">{item.label}</span>
                  </Link>
               );
            })}
         </div>
      </nav>
   );
}
