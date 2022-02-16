/**
 * 
 * Sponsor's Card Component
 * 
 */


import Image from "next/image"

export default function sponsotCard({ trackIcon, trackName, trackDesc }){
    return (
        <div className="flex bg-none border-card_dark border-8 rounded-md">
            <div className="flex flex-col items-center justify-center p-2 bg-card_light rounded-md m-2">
                <Image src={trackIcon} alt={trackName} />
                <h4 className="text-center font-primary">{trackName}</h4>
            </div>
        </div>
    )
}