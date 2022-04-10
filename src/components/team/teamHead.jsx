/**
 * 
 * team heading component to be used in every section to show the section's heading
 * 
 */

 import Image from "next/image"

 export default function TeamNameHead({ sectionName}){
     return (
 
         <div className="relative flex items-center flex-col text-6xl section-head my-4 md:m-auto sm:text-4xl justify-center h-24 w-full sm:mb-24 font-nunito font-extrabold">
             <h2 className="absolute top-0 left-0 section-head-outlined  text-transparent text-center sm:m-auto sm:right-0 sm:bottom-0">{sectionName}</h2>
             <h2 className="absolute top-0.5 left-0.5  text-primary text-center sm:m-auto sm:right-0 sm:bottom-0">{sectionName}</h2>
         </div>
     )
 }