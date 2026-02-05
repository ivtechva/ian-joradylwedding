 import { useEffect, useState } from "react";
 import heroImage from "@/assets/hero-garden.jpg";
 import floralDivider from "@/assets/floral-divider.png";
 
 const HeroSection = () => {
  const weddingDate = new Date("2027-02-06T13:30:00");
   const [timeLeft, setTimeLeft] = useState({
     days: 0,
     hours: 0,
     minutes: 0,
     seconds: 0,
   });
 
   useEffect(() => {
     const timer = setInterval(() => {
       const now = new Date().getTime();
       const distance = weddingDate.getTime() - now;
 
       if (distance > 0) {
         setTimeLeft({
           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
           seconds: Math.floor((distance % (1000 * 60)) / 1000),
         });
       }
     }, 1000);
 
     return () => clearInterval(timer);
   }, []);
 
   return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0">
         <img
           src={heroImage}
           alt="Garden wedding setting"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/20 to-forest/50" />
       </div>
 
       {/* Content */}
       <div className="relative z-10 text-center px-4 py-20 animate-fade-in-up">
         <p className="text-warm-white/90 font-serif text-lg md:text-xl tracking-[0.3em] uppercase mb-4">
           Together with their families
         </p>
         
         <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-warm-white mb-4 drop-shadow-lg">
           Ian & Joradyl
         </h1>
         
         <p className="text-warm-white/90 font-serif text-xl md:text-2xl tracking-wide mb-2">
           are getting married
         </p>
 
         <div className="my-8">
           <img 
             src={floralDivider} 
             alt="Floral divider" 
             className="w-48 md:w-64 mx-auto opacity-80"
           />
         </div>
 
        <p className="text-warm-white font-serif text-2xl md:text-3xl tracking-wide mb-8">
          February 6, 2027 • Saturday • 1:30 PM
         </p>
 
         {/* Countdown */}
         <div className="flex justify-center gap-4 md:gap-8 mb-10">
           {[
             { value: timeLeft.days, label: "Days" },
             { value: timeLeft.hours, label: "Hours" },
             { value: timeLeft.minutes, label: "Minutes" },
             { value: timeLeft.seconds, label: "Seconds" },
           ].map((item) => (
             <div key={item.label} className="text-center">
               <div className="bg-warm-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px] border border-warm-white/30">
                 <span className="font-serif text-2xl md:text-4xl text-warm-white font-semibold">
                   {item.value.toString().padStart(2, "0")}
                 </span>
               </div>
               <p className="text-warm-white/80 text-xs md:text-sm mt-2 font-sans tracking-wider uppercase">
                 {item.label}
               </p>
             </div>
           ))}
         </div>
 
         <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-elevated tracking-wide uppercase text-sm">
           Save the Date
         </button>
       </div>
 
       {/* Scroll indicator */}
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-gentle-float">
         <div className="w-6 h-10 border-2 border-warm-white/50 rounded-full flex justify-center pt-2">
           <div className="w-1.5 h-3 bg-warm-white/70 rounded-full" />
         </div>
       </div>
     </section>
   );
 };
 
 export default HeroSection;