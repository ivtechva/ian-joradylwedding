 import floralDivider from "@/assets/floral-divider.png";
 
 const TimelineSection = () => {
   const events = [
     {
      time: "1:00 PM",
       title: "Guest Arrival",
       description: "Please arrive at the church to find your seats",
     },
     {
       time: "1:30 PM",
       title: "Ceremony Begins",
       description: "The wedding ceremony will start promptly",
     },
      {
        time: "3:00 PM",
        title: "Reception Begins",
        description: "Join us at Flor's Garden",
      },
      {
        time: "5:00 PM",
        title: "Dinner & Celebration",
        description: "Feast, dance, and celebrate with us",
      },
   ];
 
   return (
     <section className="py-20 px-4 bg-section-sage">
       <div className="max-w-3xl mx-auto">
         <div className="text-center mb-16">
           <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
             Wedding Timeline
           </h2>
           <img 
             src={floralDivider} 
             alt="Decorative divider" 
             className="w-40 mx-auto opacity-70"
           />
         </div>
 
         <div className="relative">
           {/* Vertical line */}
           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-sage-light md:-translate-x-1/2" />
 
           <div className="space-y-8">
             {events.map((event, index) => (
               <div
                 key={index}
                 className={`relative flex items-center gap-6 ${
                   index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                 }`}
               >
                 {/* Timeline dot */}
                 <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-warm-white shadow-soft md:-translate-x-1/2 z-10" />
 
                 {/* Content card */}
                 <div 
                   className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] card-garden rounded-2xl p-6 ${
                     index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                   }`}
                 >
                   <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-sans font-medium mb-2">
                     {event.time}
                   </span>
                   <h3 className="font-serif text-xl text-foreground mb-1">
                     {event.title}
                   </h3>
                   <p className="text-muted-foreground text-sm">
                     {event.description}
                   </p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default TimelineSection;