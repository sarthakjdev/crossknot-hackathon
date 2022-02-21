/**
 * 
 * Sponsor's Card Component
 * 
 */


import Link from "next/link"
import Image from "next/image"

import sponsorsData from '../../data/sponsors&partners'

export default function SponsorCard({ type }){
    return (
        <div className="flex flex-col mb-4">
            <h2 className="rounded-br-3xl rounded-tl-3xl px-8 py-2 ml-auto mr-5 text-2xl uppercase font-primary bg-primary w-fit my-8 md:mx-auto">{type}</h2>
            <div className="flex flex-wrap items-center justify-evenly gap-12 px-4 bg-white rounded-2xl border-card_text border-1 mx-8 ">
                {
                    sponsorsData.map((sponsor)=>{
                        if(sponsor.type === type){
                            return (
                                <Link href={sponsor.url} key={sponsor.id}><a><Image src={sponsor.icon} alt={sponsor.id} width={200} key={sponsor.id}/></a></Link>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}