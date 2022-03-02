/**
 * 
 * Sponsor's Section Component
 * 
 */


import SectionHead from '../sectionHeads'
import SponsorsCard from './sponsorsCard'
import sponsorhead from "../../../public/images/pageHeads/sponsors.svg"

const sponsorsType = ['title sponsor', 'platinum sponsor', 'gold sponsor', 'community partner']

export default function Sponsors(){
    return (
        <section className='flex flex-col mx-14 sm:mx-6'>
            <SectionHead image={sponsorhead} />
            <div className='mt-9 flex justify-center item-center'>
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