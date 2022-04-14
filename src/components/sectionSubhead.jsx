/**
 * 
 * section subheading  component to be used in every section to show the section's subheading
 * 
 */


 export default function sectionSubhead({ sectionName }){
     return (
        <h1 className="text-card_text font-extrabold text-4xl md:text-3xl font-primary my-8 md:m-auto">{sectionName}</h1>
     )
 }