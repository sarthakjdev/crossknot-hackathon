/**
 * 
 * Prize Section Component of Crossknot hacks hackathon
 * 
 */

import PrizeCard from './prizeCard'
import SectionHead from '../sectionHeads'

export default function Prize({prizes}){

    return (
        <section className='mx-14 my-8 sm:mx-6'>
            <SectionHead sectionName={'Prizes'} />
            <div className='mt-9 flex justify-center item-center'>
            </div>
            <div className='grid grid-cols-3  items-center justify-evenly gap-8 midLg:grid-cols-1 rounded-xl py-20 m-auto mt-9 px-10 md:flex md:flex-wrap sm:px-0 sm:mt-4 sm:py-8'>
                {
                    prizes.map((prize)=>{
                        return(
                            <PrizeCard prizeData={prize} key={prize.id} />
                        )
                    })
                }
            </div>
        </section>
    )
}