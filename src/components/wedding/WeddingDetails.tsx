 import { Calendar, Clock } from "lucide-react";
 import floralDivider from "@/assets/floral-divider.png";
 
 const WeddingDetails = () => {
   const details = [
     {
       icon: Calendar,
       title: "Wedding Date",
        content: "February 6, 2027",
       subtitle: "Saturday",
     },
     {
       icon: Clock,
       title: "Wedding Time",
       content: "1:30 PM",
        subtitle: "Please arrive by 1:00 PM",
     },
   ];
 
   const timeline = [
      { time: "1:00 PM", event: "Guest Arrival" },
     { time: "1:30 PM", event: "Ceremony Begins" },
     { time: "3:00 PM", event: "Reception Starts" },
   ];
 
   return (
     <section className="py-20 px-4 bg-section-cream">
       <div className="max-w-4xl mx-auto text-center">
         <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
           Wedding Details
         </h2>
         <img 
           src={floralDivider} 
           alt="Decorative divider" 
           className="w-40 mx-auto mb-12 opacity-70"
         />
 
         <div className="grid md:grid-cols-2 gap-8 mb-16">
           {details.map((detail) => (
             <div
               key={detail.title}
               className="card-garden rounded-2xl p-8 transition-transform hover:-translate-y-1 duration-300"
             >
               <div className="w-16 h-16 mx-auto mb-4 bg-sage-light/50 rounded-full flex items-center justify-center">
                 <detail.icon className="w-8 h-8 text-primary" />
               </div>
               <h3 className="font-serif text-xl text-muted-foreground mb-2">
                 {detail.title}
               </h3>
               <p className="font-serif text-3xl text-foreground font-semibold mb-1">
                 {detail.content}
               </p>
               <p className="text-muted-foreground">{detail.subtitle}</p>
             </div>
           ))}
         </div>
 
         {/* Program Timeline */}
         <div className="card-garden rounded-2xl p-8 md:p-10">
           <h3 className="font-serif text-2xl text-foreground mb-8">
             Program Timeline
           </h3>
           <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
             {timeline.map((item, index) => (
               <div key={index} className="relative flex flex-col items-center">
                 <div className="w-4 h-4 bg-gold rounded-full mb-3 shadow-soft" />
                 <p className="font-serif text-xl text-foreground font-semibold">
                   {item.time}
                 </p>
                 <p className="text-muted-foreground">{item.event}</p>
                 {index < timeline.length - 1 && (
                   <div className="hidden md:block absolute top-2 left-full w-16 h-0.5 bg-sage-light" />
                 )}
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default WeddingDetails;