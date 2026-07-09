import { auth } from "@/utils/auth/auth";
import ItemCard from "@/utils/components/item-card";
import MobileTopNav from "@/utils/components/mobile-top-nav";
import SuggestionBar from "@/utils/components/suggestion-bar";
import React from "react";

const data = [
   {
      id: 1,
      title: "Modern Apartment in Makati",
      address: "Legazpi Village, Makati City, Metro Manila",
      description:
         "A modern apartment with a spacious living room, balcony, and easy access to malls and offices.",
      price: "$100",
      image: "https://images.pexels.com/photos/19069180/pexels-photo-19069180.jpeg",
      author: "John Doe",
      tags: ["2 Bedrooms", "1 Bathroom", "2 wheels parking", "Air Conditioned"],
      views: 100,
      timeCreated: "1 min ago",
   },
   {
      id: 2,
      title: "Cozy Studio Near University",
      address: "Katipunan Avenue, Quezon City, Metro Manila",
      description:
         "Perfect for students and young professionals. Walking distance to universities and transport.",
      price: "$75",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      author: "Jane Smith",
      tags: ["2 Bedrooms", "1 Bathroom", "2 wheels parking", "Air Conditioned"],
      views: 245,
      timeCreated: "1 min ago",
   },
   {
      id: 3,
      title: "Luxury Condo with City View",
      address: "Bonifacio Global City, Taguig",
      description:
         "Fully furnished condominium featuring panoramic city views, gym, swimming pool, and 24/7 security.",
      price: "$250",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      author: "Michael Cruz",
      tags: ["2 Bedrooms", "1 Bathroom", "2 wheels parking", "Air Conditioned"],
      views: 521,
      timeCreated: "1 min ago",
   },
   {
      id: 4,
      title: "Affordable Boarding House",
      address: "España Boulevard, Manila",
      description:
         "Clean and secure boarding house with Wi-Fi, shared kitchen, and laundry area.",
      price: "$45",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      author: "Sarah Lee",
      tags: ["2 Bedrooms", "1 Bathroom", "2 wheels parking", "Air Conditioned"],
      views: 189,
      timeCreated: "1 min ago",
   },
   {
      id: 5,
      title: "Family House with Garden",
      address: "BF Homes, Parañaque",
      description:
         "A spacious family home with a private garden, garage, and pet-friendly environment.",
      price: "$320",
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      author: "Chris Tan",
      tags: ["2 Bedrooms", "1 Bathroom", "2 wheels parking", "Air Conditioned"],
      views: 342,
      timeCreated: "1 min ago",
   },
   {
      id: 6,
      title: "Minimalist Loft Apartment",
      address: "Ortigas Center, Pasig",
      description:
         "Stylish loft apartment featuring modern interiors, high ceilings, and fast internet.",
      price: "$180",
      image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
      author: "Angela Reyes",
      tags: ["2 Bedrooms", "1 Bathroom", "2 wheels parking", "Air Conditioned"],
      views: 276,
      timeCreated: "1 min ago",
   },
   {
      id: 7,
      title: "Beachfront Vacation House",
      address: "El Nido, Palawan",
      description:
         "Wake up to breathtaking ocean views in this fully furnished beachfront property.",
      price: "$450",
      image: "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg",
      author: "David Santos",
      tags: ["2 Bedrooms", "1 Bathroom", "2 wheels parking", "Air Conditioned"],
      views: 814,
      timeCreated: "1 min ago",
   },
   {
      id: 8,
      title: "Townhouse Near Business District",
      address: "Mandaluyong City",
      description:
         "Three-bedroom townhouse close to major offices, schools, and shopping centers.",
      price: "$210",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
      author: "Maria Garcia",
      tags: ["2 Bedrooms", "1 Bathroom", "2 wheels parking", "Air Conditioned"],
      views: 198,
      timeCreated: "1 min ago",
   },
   {
      id: 9,
      title: "Modern Duplex Home",
      address: "Cebu City, Cebu",
      description:
         "Elegant duplex home with parking, landscaped garden, and contemporary finishes.",
      price: "$275",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      author: "Kevin Lim",
      tags: ["2 Bedrooms", "1 Bathroom", "2 wheels parking", "Air Conditioned"],
      views: 301,
      timeCreated: "1 min ago",
   },
   {
      id: 10,
      title: "Penthouse Suite",
      address: "Roxas Boulevard, Manila",
      description:
         "Premium penthouse with floor-to-ceiling windows, rooftop access, and luxury amenities.",
      price: "$600",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      author: "Sophia Wilson",
      tags: ["2 Bedrooms", "1 Bathroom", "2 wheels parking", "Air Conditioned"],
      views: 950,
      timeCreated: "1 min ago",
   },
];

const Home = async () => {
   const session = await auth();

   return (
      <>
         <MobileTopNav session={session} />
         <SuggestionBar />
         <main className="py-4 mb-12">
            <Section sectionTitle="Recomendations">
               {data.map((item) => (
                  <ItemCard
                     session={session}
                     key={item.id}
                     image={item.image}
                     address={item.address}
                     price={item.price}
                     tags={item.tags}
                     author={item.author}
                     views={item.views}
                     timeCreated={item.timeCreated}
                     title={item.title}
                  />
               ))}
            </Section>
         </main>
      </>
   );
};

function Section({
   sectionTitle,
   children,
}: {
   sectionTitle: string;
   children: React.ReactNode;
}) {
   return (
      <div>
         <h6 className="py-4 pl-4 font-semibold">{sectionTitle}</h6>
         <>{children}</>
      </div>
   );
}

export default Home;
