import { Button } from "@/shadcn/components/button";
import { MessageCircleMore } from "lucide-react";

const BottomNavPost = () => {
   return (
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden">
         <div className="mx-auto flex h-20 max-w-md items-center justify-around px-4 pb-safe gap-4">
            <Button variant={"link"}>
               <MessageCircleMore className="size-5"/>
            Chat now
            </Button>
            <Button className="flex-1" size={"lg"}>Apply Now</Button>
         </div>
      </nav>
   );
};

export default BottomNavPost;
