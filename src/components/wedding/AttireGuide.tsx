 import floralDivider from "@/assets/floral-divider.png";
 
 const AttireGuide = () => {
   const colors = [
     { name: "Sage Green", color: "bg-sage" },
     { name: "Beige", color: "bg-secondary" },
     { name: "Olive", color: "bg-olive" },
     { name: "Cream", color: "bg-cream" },
     { name: "Dusty Rose", color: "bg-[hsl(350,30%,70%)]" },
   ];
 
   return (
     <section className="py-20 px-4 bg-section-cream">
       <div className="max-w-4xl mx-auto text-center">
         <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
           Attire Guide
         </h2>
         <img 
           src={floralDivider} 
           alt="Decorative divider" 
           className="w-40 mx-auto mb-12 opacity-70"
         />
 
         <div className="card-garden rounded-2xl p-8 md:p-12">
           <h3 className="font-serif text-2xl text-foreground mb-4">
             Elegant Garden Formal
           </h3>
           <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
             We invite you to dress in elegant garden formal attire. Think sophisticated 
             yet comfortable—perfect for celebrating among nature. Ladies may opt for 
             flowing dresses, while gentlemen are encouraged to wear suits or dress shirts 
             with slacks.
           </p>
 
           <div className="mb-8">
             <h4 className="font-serif text-lg text-foreground mb-4">
               Suggested Color Palette
             </h4>
             <div className="flex flex-wrap justify-center gap-4">
               {colors.map((item) => (
                 <div key={item.name} className="flex flex-col items-center gap-2">
                   <div 
                     className={`w-12 h-12 rounded-full ${item.color} shadow-soft border border-border`}
                   />
                   <span className="text-sm text-muted-foreground">{item.name}</span>
                 </div>
               ))}
             </div>
           </div>
 
           <div className="bg-sage-light/30 rounded-xl p-6">
             <h4 className="font-serif text-lg text-foreground mb-3">
               Gentle Reminders
             </h4>
             <ul className="text-muted-foreground space-y-2 text-sm">
               <li>• Consider comfortable shoes suitable for a garden setting</li>
               <li>• The ceremony and reception will be held outdoors</li>
               <li>• Kindly avoid wearing white or black</li>
               <li>• Embrace nature-inspired tones for a cohesive celebration</li>
             </ul>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default AttireGuide;