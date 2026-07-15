"use client";

import { useQueryState } from "nuqs";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const images = [
   {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
   },
   {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
   },
   {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
   },
   {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
   },
];

export default function LightBox() {
   const [open, setOpen] = useQueryState("viewImage");

   return (
      <Lightbox
         styles={{ root: { padding: 0 } }}
         className="p-0"
         open={open !== null}
         close={() => setOpen(null)}
         slides={images}
         render={{
            buttonPrev: () => null,
            buttonNext: () => null,
         }}
         index={Number(open)}
         on={{ view: ({ index }: { index: number }) => setOpen(String(index)) }}
         plugins={[Thumbnails, Zoom]}
         thumbnails={{
            showToggle: false,
            position: "bottom",
            width: 80,
            height: 60,
            border: 0,
            borderRadius: 8,
            gap: 8,
         }}
      />
   );
}
