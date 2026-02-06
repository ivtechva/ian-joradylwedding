import { MapPin, Car, ExternalLink } from "lucide-react";
 import floralDivider from "@/assets/floral-divider.png";
 
 const LocationGuide = () => {
   const locations = [
     {
      name: "Transfiguration of Christ Parish Church",
       type: "Church",
       directions: [
        "Located at the parish grounds",
         "Follow the main road towards the town center",
         "The church is visible from the main plaza",
       ],
       parking: "Parking available along the church grounds and nearby streets",
      mapUrl: "https://www.google.com/maps/place/Transfiguration+of+Christ+Parish+Church/@13.9731667,121.0763889,17z",
     },
     {
      name: "Flor's Garden",
       type: "Reception Venue",
       directions: [
         "Located in a scenic garden setting",
         "Follow signs from the main highway",
        "Look for the Flor's Garden signage at the entrance",
       ],
       parking: "Ample parking available within the venue premises",
      mapUrl: "https://www.google.com/maps/search/Flor's+Garden+Batangas",
     },
   ];
 
   return (
     <section className="py-20 px-4 bg-section-cream">
       <div className="max-w-4xl mx-auto">
         <div className="text-center mb-16">
           <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
             How to Get There
           </h2>
           <img 
             src={floralDivider} 
             alt="Decorative divider" 
             className="w-40 mx-auto opacity-70"
           />
         </div>
 
         <div className="space-y-8">
           {locations.map((location) => (
             <div
               key={location.name}
               className="card-garden rounded-2xl p-6 md:p-8"
             >
               <div className="flex items-start gap-4 mb-4">
                 <div className="w-12 h-12 bg-sage-light/50 rounded-full flex items-center justify-center flex-shrink-0">
                   <MapPin className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <span className="text-sm text-primary font-sans font-medium uppercase tracking-wide">
                     {location.type}
                   </span>
                   <h3 className="font-serif text-xl text-foreground">
                     {location.name}
                   </h3>
                 </div>
               </div>
 
               <div className="ml-16 space-y-4">
                 <div>
                   <h4 className="font-serif text-foreground mb-2">Directions</h4>
                   <ul className="space-y-1">
                     {location.directions.map((step, index) => (
                       <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                         <span className="text-gold">•</span>
                         {step}
                       </li>
                     ))}
                   </ul>
                 </div>
 
                 <div className="flex items-start gap-2 bg-sage-light/30 rounded-lg p-3">
                   <Car className="w-4 h-4 text-primary mt-0.5" />
                   <p className="text-muted-foreground text-sm">{location.parking}</p>
                 </div>
 
                <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-5 py-2 rounded-full transition-all duration-300 text-sm tracking-wide"
                  >
                    View on Google Maps
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
 
 export default LocationGuide;