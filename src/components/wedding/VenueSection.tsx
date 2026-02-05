import { useState } from "react";
import { MapPin, ExternalLink, X, ZoomIn } from "lucide-react";
 import churchImage from "@/assets/church.jpg";
 import venueImage from "@/assets/venue.jpg";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
 
 const VenueSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

   const venues = [
     {
       type: "Ceremony",
      name: "Transfiguration of Christ Parish Church",
      location: "Parish Church",
       description: "A beautiful sacred space where we will exchange our vows before God and our loved ones.",
       image: churchImage,
      mapUrl: "https://www.google.com/maps/place/Transfiguration+of+Christ+Parish+Church/@13.9731667,121.0763889,17z",
     },
     {
       type: "Reception",
      name: "Flor's Garden",
       location: "Garden Venue",
       description: "An enchanting garden setting where we'll celebrate our union with family and friends.",
       image: venueImage,
      mapUrl: "https://www.google.com/maps/search/Flor's+Garden+Batangas",
     },
   ];
 
  const handleOpenMap = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
 
         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
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
                <button
                  onClick={() => handleOpenMap(venue.mapUrl)}
                   className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-6 py-2.5 rounded-full transition-all duration-300 text-sm tracking-wide"
                 >
                   View Map
                   <ExternalLink className="w-4 h-4" />
                </button>
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