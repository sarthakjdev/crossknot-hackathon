/**
 * 
 * Sponsor's Section Component
 * 
 */


import SectionHead from '../sectionHeads'
import SponsorsCard from './sponsorsCard'
import Image from 'next/image'
import sponsorhead from "../../../public/images/sponsors&partners/sponsorhead.svg"
const sponsorsType = ['title sponsor', 'platinum sponsor', 'gold sponsor', 'community partner']

export default function Sponsors(){
    return (
        <section className='flex flex-col mx-14 sm:mx-6'>
            <div className='mt-9 flex justify-center item-center'>
             <Image src={sponsorhead} alt="sponsor heading" />
            </div>
             {
                 
                 sponsorsType.map((type)=>{
                     return (
                        <>
                        <SponsorsCard type={type} key={type} />
                        <hr />
                        </>
                     )
                 })
             }
        </section>
    )
}