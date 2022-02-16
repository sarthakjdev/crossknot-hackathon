/**
 * 
 * Sponsor's Section Component
 * 
 */


import SectionHead from '../sectionHeads'
import SponsorCard from './speakerCard'

import tracksData from '../../../public/data/trackData'
export default function sponsors(){
    return (
        <section className='flex flex-col '>
            <SectionHead sectionName="tracks"/>
            <div className='flex flex-wrap items-center justify-center m-auto gap-6'> 
            {
                tracksData.map((sponsor)=>{
                    return (
                        <SponsorCard key={sponsor.id} sponsor={sponsor} />
                    )}
                    )
            }
            </div>
        </section>
    )
}