import { useState } from "react";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import floralDivider from "@/assets/floral-divider.png";
import img1 from "@/assets/flors-gallery/flors-481160.jpg.asset.json";
import img2 from "@/assets/flors-gallery/flors-481235.jpg.asset.json";
import img3 from "@/assets/flors-gallery/flors-481249.jpg.asset.json";
import img4 from "@/assets/flors-gallery/flors-481504.jpg.asset.json";
import img5 from "@/assets/flors-gallery/flors-487892.jpg.asset.json";
import img6 from "@/assets/flors-gallery/flors-492399.jpg.asset.json";

const photos = [
  { src: img5.url, alt: "Garden ceremony aisle with white florals" },
  { src: img3.url, alt: "Ceremony backdrop with floral arch" },
  { src: img2.url, alt: "Infinity pool overlooking the mountains" },
  { src: img4.url, alt: "Flor's Garden villa exterior" },
  { src: img6.url, alt: "Main house at Flor's Garden" },
  { src: img1.url, alt: "Spacious lounge area with high ceilings" },
];

const FlorsGallery = () => {
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="py-20 px-4 bg-section-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Flor's Garden
          </h2>
          <img
            src={floralDivider}
            alt="Decorative divider"
            className="w-40 mx-auto mb-4 opacity-70"
          />
          <p className="text-muted-foreground font-serif text-lg">
            A glimpse of our reception venue
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {photos.map((photo, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                <button
                  type="button"
                  onClick={() => setSelected(photo)}
                  className="group block w-full overflow-hidden rounded-2xl card-garden"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-transparent border-none shadow-none">
          <DialogClose className="absolute right-2 top-2 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
            <X className="h-6 w-6" />
          </DialogClose>
          {selected && (
            <img
              src={selected.src}
              alt={selected.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FlorsGallery;