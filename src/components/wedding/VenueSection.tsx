 import { MapPin, ExternalLink } from "lucide-react";
 import churchImage from "@/assets/church.jpg";
 import venueImage from "@/assets/venue.jpg";
 
 const VenueSection = () => {
   const venues = [
     {
       type: "Ceremony",
      name: "Transfiguration of Christ Parish Church",
      location: "Parish Church",
       description: "A beautiful sacred space where we will exchange our vows before God and our loved ones.",
       image: churchImage,
       mapUrl: "https://maps.app.goo.gl/kyMq5DGrzzPbVAEW8",
     },
     {
       type: "Reception",
      name: "Flor's Garden",
       location: "Garden Venue",
       description: "An enchanting garden setting where we'll celebrate our union with family and friends.",
       image: venueImage,
       mapUrl: "https://maps.app.goo.gl/nHmDU5dmRnqG8RYZ9",
     },
   ];
 
   return (
     <section className="py-20 px-4 bg-section-sage">
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
                 <img
                   src={venue.image}
                   alt={venue.name}
                   className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                 />
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
                 <a
                   href={venue.mapUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-6 py-2.5 rounded-full transition-all duration-300 text-sm tracking-wide"
                 >
                   View Map
                   <ExternalLink className="w-4 h-4" />
                 </a>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default VenueSection;