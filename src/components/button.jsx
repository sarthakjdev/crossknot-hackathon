/**
 * 
 * button component 
 * 
 */

import Link from "next/link"
import Image from "next/image"

export default function button({icon, url, title, bgColor}){
    if(icon){
        return (
            <Link href={url}><a className="bg-primary text-white flex items-center justify-evenly uppercase font-bold px-10 py-1 rounded-full"><Image src={icon} alt="button icon" width={30}/>{title}</a></Link>
        )
    }

    if(bgColor === "white") {
        return(
            <Link href={url}><a className="bg-white text-primary flex items-center justify-evenly uppercase font-bold px-10 py-1 rounded-full">{title}</a></Link>
        )
    }

    return (
            <Link href={url}><a className="bg-primary text-white flex items-center justify-evenly uppercase font-bold px-10 py-1 rounded-full">{title}</a></Link>
    )
}