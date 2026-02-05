 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion";
 import floralDivider from "@/assets/floral-divider.png";
 
 const FAQSection = () => {
   const faqs = [
     {
       question: "Is there parking available at the venue?",
       answer:
         "Yes, ample parking is available near the ceremony area. Our coordinators will guide you to designated parking spaces upon arrival.",
     },
     {
       question: "What time should we arrive at the venue?",
       answer:
          "We recommend arriving at 1:00 PM to give you enough time to find your seat and settle in. The ceremony will start promptly at 1:30 PM, so please don't be late.",
     },
     {
       question: "Are kids allowed at the event?",
       answer:
         "We love your little ones, but due to space limitations, the event is for adults only.",
     },
     {
       question: "Can I bring a +1 guest?",
       answer:
         "Due to space limitations, the reception area can only accommodate a limited number of guests. Please refer to your invitation for the number of seats reserved for you.",
     },
     {
       question: "What should I wear?",
       answer:
         "We encourage elegant garden formal attire in earth tones, pastels, or nature-inspired colors. Please avoid wearing white or black.",
     },
     {
       question: "Will there be transportation provided?",
       answer:
         "Transportation between venues is not provided. We recommend arranging your own transportation or coordinating with fellow guests.",
     },
   ];
 
   return (
     <section className="py-20 px-4 bg-section-sage">
       <div className="max-w-3xl mx-auto">
         <div className="text-center mb-16">
           <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
             Frequently Asked Questions
           </h2>
           <img 
             src={floralDivider} 
             alt="Decorative divider" 
             className="w-40 mx-auto opacity-70"
           />
         </div>
 
         <div className="card-garden rounded-2xl p-6 md:p-8">
           <Accordion type="single" collapsible className="w-full">
             {faqs.map((faq, index) => (
               <AccordionItem 
                 key={index} 
                 value={`item-${index}`}
                 className="border-sage-light"
               >
                 <AccordionTrigger className="font-serif text-left text-foreground hover:text-primary hover:no-underline py-4">
                   {faq.question}
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground pb-4">
                   {faq.answer}
                 </AccordionContent>
               </AccordionItem>
             ))}
           </Accordion>
         </div>
       </div>
     </section>
   );
 };
 
 export default FAQSection;