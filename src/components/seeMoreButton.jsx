/**
 * 
 * button component 
 * 
 */

 import Link from "next/link"
 
 export default function SeeMoreButton({ url, align }){

 
     return (
             <Link href={url}><a className={`ml-auto mr-10 text-xl text-black underline font-extrabold md:m-auto font-primary ${align === 'bottom'? 'relative top-10 mr-24 my-6 md:my-6': null} ${align === 'extraBottom'? 'relative top-40 mb-6 md:mx-auto md:mb-14 mr-32': null}`}>See More</a></Link>
     )
 }