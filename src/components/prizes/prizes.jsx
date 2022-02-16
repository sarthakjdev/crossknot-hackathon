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
        <section className='mx-14 my-8 sm:mx-6'>
            <SectionHead sectionName="prizes" />

            <div className='grid grid-cols-3  items-center justify-evenly gap-8 bg-primary_light rounded-xl py-8 m-auto mt-4 px-10 md:flex md:flex-wrap sm:px-0 '>
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