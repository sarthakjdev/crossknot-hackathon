/**
 * 
 * section heading component to be used in every section to show the section's heading
 * 
 */


export default function PageHeads({ sectionName }){
    return (
        <h2 className="font-secondary text-white bg-primary uppercase py-4 px-6 rounded-md w-fit font-extrabold hover:bg-primary_light hover:text-primary_dark transition-all duration-150 lg:m-auto my-4 mb-8">{sectionName}</h2>
    )
}