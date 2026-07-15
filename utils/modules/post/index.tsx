import { auth } from "@/utils/auth/auth";
import CarouselWithPagination from "@/utils/components/image-slider-thumbnail";
import TopNavPost from "./components/top-nav-post";
import PostDetails from "./components/post-details";
import BottomNavPost from "./components/bottom-nav-post";
import LightBox from "@/utils/components/lightbox";

export default async function Page({
   params,
}: {
   params: Promise<{ slug: string }>;
}) {
   const session = await auth();
   const { slug } = await params;

   //   return <div>My Post: {slug}</div>

   return (
      <div className="pb-40">
         {/* TOP BAR */}
         <TopNavPost />
         <CarouselWithPagination />
         <PostDetails session={session} />
         <BottomNavPost />
         <LightBox />
      </div>
   );
}
