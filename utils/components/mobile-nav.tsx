"use client";

import { cn } from "@/shadcn/lib/utils";
import { Folder, Heart, Home, LucideProps , Search} from "lucide-react";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export default function MobileNav({ session }: { session: Session | null }) {
   const hidefromPage = [
      "/login",
      "/register",
      "/forgot-password",
      "/reset-password",
      "/post",
   ];

   const navItems = [
      {
         href: "/saved",
         type: "link",
         label: "Saved",
         icon: Heart,
         className: "",
         hidden: false,
      },
      {
         href: "/",
         type: "link",
         label: "Explore",
         icon: Search,
         className: "",
         hidden: false,
      },
      {
         href: "/home",
         type: "link",
         label: "Home",
         icon: Home,
         className: "",
         hidden: false,
      },
      // {
      //    href: "",
      //    type: "button",
      //    label: "",
      //    icon: CirclePlus,
      //    className: "size-11 text-muted-foreground stroke-1",
      // },
      {
         href: "/rentals",
         type: "link",
         label: "Rentals",
         icon: Folder,
         className: "",
         hidden: false,
      },
      {
         href: "/profile",
         type: "link",
         label: "Profile",
         icon: null,
         image: session?.user?.image ?? "",
         className: "",
         hidden: !session?.user?.image,
      },
   ];

   const path = usePathname();
   const shouldHide =
      hidefromPage.includes(path) ||
      hidefromPage.some((route) => path.startsWith(route));
   if (shouldHide || !session) return null;

   return (
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden">
         <div className="mx-auto flex h-16 max-w-md items-center justify-around px-4 pb-safe">
            {navItems.map((item, idx) => {
               // LINK
               if (item.type === "link") {
                  return <NavLinks key={idx} item={item} session={session} />;
               }
               // BUTTON
               if (item.type === "button" && item.icon) {
                  return (
                     <item.icon
                        key={idx}
                        className={cn("flex-1", item.className)}
                     />
                  );
               }

               return null;
            })}
         </div>
      </nav>
   );
}

function NavLinks({
   item,
   session,
}: {
   session: Session | null;
   item: {
      href: string;
      type: string;
      label: string;
      icon: ForwardRefExoticComponent<
         Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      > | null;
      image?: string;
      hidden: boolean;
   };
}) {
   const pathname = usePathname();

   const Icon = item.icon;
   const active =
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

   if (item.hidden) {
      return null;
   }
   return (
      <Link
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
                  item.type === "button" && "size-10 ",
                  active && "fill-primary/20 stroke-[2.4]",
               )}
            />
         )}
         {!Icon && (
            <Image
               className="rounded-full"
               alt="Next.js logo"
               src={session?.user?.image ?? ""}
               width={22}
               height={22}
               priority
            />
         )}
         {item.label && (
            <span className="text-xs font-medium leading-3">{item.label}</span>
         )}
      </Link>
   );
}
