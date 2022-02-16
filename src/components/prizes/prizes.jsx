/**
 * 
 * Prize Section Component of Crossknot hacks hackathon
 * 
 */

import SectionHead from '../sectionHeads'
import PrizeCard from './prizeCard'


import prizesData from '../../data/prizeData'     // prizes data imported from the static file in the same project


export default function Prize(){
    return (
        <section className=' mx-14 my-8'>
            <SectionHead sectionName="prizes" />


            <div className='flex flex-wrap items-center justify-evenly gap-4 bg-primary_light rounded-xl py-8 mt-4'>
                {
                    prizesData.map((prize)=>{
                        return(
                            <PrizeCard rank={prize.rank} key={prize.prizeId} rankIcon={prize.prizeIcon} rankIncentives={prize.prizeDesc} />
                        )
                    })
                }
            </div>
        </section>
    )
}