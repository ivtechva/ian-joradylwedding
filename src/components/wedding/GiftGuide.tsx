 import { Gift, Heart } from "lucide-react";
 import floralDivider from "@/assets/floral-divider.png";
 
 const GiftGuide = () => {
   return (
     <section className="py-20 px-4 bg-section-sage">
       <div className="max-w-3xl mx-auto text-center">
         <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
           Gift Guide
         </h2>
         <img 
           src={floralDivider} 
           alt="Decorative divider" 
           className="w-40 mx-auto mb-12 opacity-70"
         />
 
         <div className="card-garden rounded-2xl p-8 md:p-12">
           <div className="w-20 h-20 mx-auto mb-6 bg-sage-light/50 rounded-full flex items-center justify-center">
             <Gift className="w-10 h-10 text-primary" />
           </div>
 
           <p className="text-foreground font-serif text-xl mb-6 leading-relaxed">
             Your presence at our wedding is the greatest gift of all.
           </p>
 
           <p className="text-muted-foreground leading-relaxed mb-8">
             However, if you wish to honor us with a gift, we would be grateful for 
             a monetary contribution to help us build our new life together. Your 
             generosity will go towards our future home and the adventures that await us.
           </p>
 
           <div className="bg-sage-light/30 rounded-xl p-6 mb-6">
             <p className="text-muted-foreground text-sm italic">
               "A loving heart is the truest wisdom, and your presence 
               fills our hearts with immeasurable joy."
             </p>
           </div>
 
           <div className="flex items-center justify-center gap-2 text-primary">
             <Heart className="w-5 h-5 fill-current" />
             <span className="font-serif">With heartfelt gratitude</span>
             <Heart className="w-5 h-5 fill-current" />
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default GiftGuide;