 import { Heart } from "lucide-react";
 import floralDivider from "@/assets/floral-divider.png";
 
 const Footer = () => {
   return (
     <footer className="py-16 px-4 bg-primary text-primary-foreground relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-5">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:30px_30px]" />
       </div>
 
       <div className="max-w-4xl mx-auto text-center relative z-10">
         <h2 className="font-script text-5xl md:text-6xl mb-4">
           Ian & Joradyl
         </h2>
         
         <img 
           src={floralDivider} 
           alt="Decorative divider" 
           className="w-32 mx-auto mb-6 opacity-50 invert"
         />
 
          <p className="font-serif text-xl mb-2">February 6, 2027</p>
         <p className="text-primary-foreground/80 mb-8">Saturday • 1:30 PM</p>
 
         <p className="text-primary-foreground/90 max-w-md mx-auto leading-relaxed mb-8">
           Thank you for being part of our special day. Your love, support, and 
           presence mean the world to us.
         </p>
 
         <div className="flex items-center justify-center gap-2 text-primary-foreground/70" aria-label="Made with love">
           <span className="text-sm">Made with</span>
          <Heart className="w-4 h-4 fill-current text-gold" />
           <span className="text-sm">for our wedding guests</span>
         </div>
 
         <p className="mt-6 text-primary-foreground/50 text-sm">
           #IanAndJoradyl2025
         </p>
       </div>
     </footer>
   );
 };
 
 export default Footer;