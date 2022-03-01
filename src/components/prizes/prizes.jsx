/**
 * 
 * Prize Section Component of Crossknot hacks hackathon
 * 
 */

import PrizeCard from './prizeCard'
import Image from 'next/image'
import prizesimg from "../../../public/images/prizes/prizesimg.svg"

import prizesData from '../../data/prizeData'     // prizes data imported from the static file in the same project


export default function Prize(){
    return (
        <section className='mx-14 my-8 sm:mx-6'>
            <div className='mt-9 flex justify-center item-center'>
             <Image src={prizesimg} alt="crossknot heading" />
            </div>
            <div className='grid grid-cols-3  items-center justify-evenly gap-40 rounded-xl py-20 m-auto mt-9 px-10 md:flex md:flex-wrap sm:px-0 '>
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