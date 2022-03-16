/**
 * 
 * Sponsor's Card Component
 * 
 */


import Link from "next/link"
import Image from "next/image"

export default function SponsorCard({ type, sponsors }){
    return (
        <div className="flex flex-col mb-4 sm:mt-12" key={type}>
            <h2 className="rounded-br-3xl rounded-tl-3xl px-8 py-2 ml-auto mr-5 text-2xl uppercase font-primary bg-sponsor_clr w-fit my-8 md:mx-auto">{type}</h2>
            <div className="flex flex-wrap items-center justify-evenly gap-12 px-4 bg-white rounded-2xl border-card_text border-1 mx-8 ">
                {
                    sponsors.map((sponsor)=>{
                        if(sponsor.type === type){
                            return (
                                <Link href={sponsor.url} key={sponsor.name}><a><Image src={sponsor.logo[0].url} height={200} alt={sponsor.id} width={200} key={sponsor.id}/></a></Link>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}