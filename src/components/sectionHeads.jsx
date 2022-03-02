/**
 * 
 * section heading component to be used in every section to show the section's heading
 * 
 */

import Image from "next/image"

export default function PageHeads(image){
    return (
        <h2 className="font-secondary uppercase py-4 px-6 rounded-md w-fit transition-all duration-150 lg:m-auto my-4 mb-8"><Image src={image.images || image.image} alt='page heading' /></h2>
    )
}