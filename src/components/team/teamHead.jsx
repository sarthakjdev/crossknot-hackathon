/**
 * 
 * team heading component to be used in every section to show the section's heading
 * 
 */

 import Image from "next/image"

 export default function TeamNameHead({ sectionName}){
     return (
         // <h2 className="font-secondary uppercase py-4 px-6 rounded-md w-fit transition-all duration-150 lg:m-auto my-4 mb-8"><Image src={image.images || image.image} alt='page heading' /></h2>
 
         <div className="relative items-center text-6xl section-head my-10 md:m-auto sm:text-4xl justify-center h-20 w-full sm:mb-14">
             <h2 className="absolute top-0 left-0 section-head-outlined  text-transparent text-center sm:m-auto sm:right-0 sm:bottom-0">{sectionName}</h2>
             <h2 className="absolute top-1 left-1  text-primary text-center sm:m-auto sm:right-0 sm:bottom-0">{sectionName}</h2>
         </div>
     )
 }