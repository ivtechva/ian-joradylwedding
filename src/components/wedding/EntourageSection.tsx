 import floralDivider from "@/assets/floral-divider.png";
 
 const EntourageSection = () => {
   const entourage = {
     "Principal Sponsors": [
       "Mr. & Mrs. Santos",
       "Mr. & Mrs. Reyes",
       "Mr. & Mrs. Garcia",
       "Mr. & Mrs. Cruz",
     ],
     "Candle Sponsors": ["Mr. & Mrs. Mendoza", "Mr. & Mrs. Torres"],
     "Cord Sponsors": ["Mr. & Mrs. Bautista", "Mr. & Mrs. Rivera"],
     "Veil Sponsors": ["Mr. & Mrs. Aquino", "Mr. & Mrs. Fernandez"],
     "Groomsmen": [
       "Miguel Santos",
       "Carlos Reyes",
       "Antonio Garcia",
       "Rafael Cruz",
     ],
     "Bridesmaids": [
       "Maria Santos",
       "Sofia Reyes",
       "Isabella Garcia",
       "Lucia Cruz",
     ],
     "Flower Girls": ["Little Princess Ana", "Little Princess Mia"],
     "Ring Bearer": ["Young Master Leo"],
     "Bible Bearer": ["Young Master Marco"],
     "Coin Bearer": ["Young Master Julian"],
   };
 
   return (
     <section className="py-20 px-4 bg-section-cream">
       <div className="max-w-6xl mx-auto">
         <div className="text-center mb-16">
           <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
             Our Entourage
           </h2>
           <img 
             src={floralDivider} 
             alt="Decorative divider" 
             className="w-40 mx-auto mb-4 opacity-70"
           />
           <p className="text-muted-foreground font-serif text-lg">
             The special people who will witness and bless our union
           </p>
         </div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {Object.entries(entourage).map(([role, members]) => (
             <div
               key={role}
               className="card-garden rounded-2xl p-6 text-center"
             >
               <h3 className="font-serif text-lg text-primary mb-4 pb-2 border-b border-sage-light">
                 {role}
               </h3>
               <ul className="space-y-2">
                 {members.map((member, index) => (
                   <li key={index} className="text-foreground font-sans">
                     {member}
                   </li>
                 ))}
               </ul>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default EntourageSection;