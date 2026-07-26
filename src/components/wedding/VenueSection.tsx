import { useState } from "react";
import { MapPin, X, ZoomIn } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import churchImage from "@/assets/church.jpg";
import venueImage from "@/assets/venue.jpg";
import img1 from "@/assets/flors-gallery/flors-481160.jpg.asset.json";
import img2 from "@/assets/flors-gallery/flors-481235.jpg.asset.json";
import img3 from "@/assets/flors-gallery/flors-481249.jpg.asset.json";
import img4 from "@/assets/flors-gallery/flors-481504.jpg.asset.json";
import img5 from "@/assets/flors-gallery/flors-487892.jpg.asset.json";
import img6 from "@/assets/flors-gallery/flors-492399.jpg.asset.json";

const venues = [
  {
    type: "Ceremony",
    name: "Transfiguration of Christ Parish Church",
    location: "M.L. Quezon Street Extension, Brgy. San Roque, Antipolo City",
    description: "A beautiful sacred space where we will exchange our vows before God and our loved ones.",
    image: churchImage,
    mapUrl: "https://maps.app.goo.gl/ZFjaGYNU8EGMYcfQ6",
  },
  {
    type: "Reception",
    name: "Flor's Garden",
    location: "Sitio Tanza 2, Brgy. San Jose, Antipolo City",
    description: "An enchanting garden setting where we'll celebrate our union with family and friends.",
    image: venueImage,
    mapUrl: "https://maps.app.goo.gl/WC53NqumGTBmFxEU7",
  },
];

const photos = [
  { src: img5.url, alt: "Garden ceremony aisle with white florals" },
  { src: img3.url, alt: "Ceremony backdrop with floral arch" },
  { src: img2.url, alt: "Infinity pool overlooking the mountains" },
  { src: img4.url, alt: "Flor's Garden villa exterior" },
  { src: img6.url, alt: "Main house at Flor's Garden" },
  { src: img1.url, alt: "Spacious lounge area with high ceilings" },
];

const VenueSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="py-20 px-4 bg-section-sage" id="venues">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Ceremony & Reception
          </h2>
          <p className="text-muted-foreground font-serif text-lg max-w-2xl mx-auto">
            Join us as we celebrate our love in these beautiful venues
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {venues.map((venue) => (
            <div
              key={venue.type}
              className="card-garden rounded-2xl overflow-hidden transition-all hover:shadow-elevated duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 cursor-pointer group"
                  onClick={() => setSelectedImage({ src: venue.image, alt: venue.name })}
                >
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-sans tracking-wide">
                  {venue.type}
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  {venue.name}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{venue.location}</span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {venue.description}
                </p>
                {venue.type === "Reception" && (
                  <div className="mt-2">
                    <p className="text-muted-foreground font-serif text-sm mb-4">
                      A glimpse of our reception venue
                    </p>
                    <Carousel opts={{ align: "start", loop: true }} className="w-full">
                      <CarouselContent>
                        {photos.map((photo, i) => (
                          <CarouselItem key={i}>
                            <button
                              type="button"
                              onClick={() => setSelectedImage(photo)}
                              className="group block w-full overflow-hidden rounded-xl"
                            >
                              <div className="aspect-[4/3] overflow-hidden rounded-xl">
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
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-transparent border-none shadow-none">
          <DialogClose className="absolute right-2 top-2 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
            <X className="h-6 w-6" />
          </DialogClose>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VenueSection;