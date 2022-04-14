/**
 * 
 * Prize Section Component of Crossknot hacks hackathon
 * 
 */

import PrizeCard from './prizeCard'
import SectionHead from '../sectionHeads'
import { useRouter } from 'next/router'
import SeeMoreButton from '../seeMoreButton'

export default function Prize({prizes}){
    const router = useRouter()
    return (
        <section className='flex flex-col mx-14 my-8 sm:mx-6' id='prizes'>

            <article className='flex flex-col'>
                <SectionHead sectionName={'Prizes'} />
                {/* <div className='mt-9 flex justify-center item-center'>
                </div> */}
                <div className='grid grid-cols-3  items-center justify-evenly gap-8 midLg:grid-cols-1 rounded-xl py-20 m-auto mt-9 px-10 md:flex md:flex-wrap sm:px-0 sm:mt-4 sm:py-8'>
                    {   
                    prizes.map((prize)=>{
                            if (prize.prizeType === 'normal') {
                                return (
                                    <PrizeCard prizeData={prize} key={prize.id} />
                                )
                            }
                    })
                    }
                </div>
                {router.route === '/' && <SeeMoreButton url={'/prizes'}  />}
            </article>


            {
                router.route === '/prizes' &&
                <article className='flex flex-col'>
                <SectionHead sectionName={'Sponsored Track Prizes'} />
                {/* <div className='mt-9 flex justify-center item-center'>
                </div> */}
                <div className='grid grid-cols-3  items-center justify-evenly gap-8 midLg:grid-cols-1 rounded-xl py-20 m-auto mt-9 px-10 md:flex md:flex-wrap sm:px-0 sm:mt-4 sm:py-8'>
                    {   
                    prizes.map((prize)=>{
                        if (prize.prizeType === 'track') {
                            return(
                                <PrizeCard prizeData={prize} key={prize.id} />
                            )
                        }
                    })
                    }
                </div>
            </article>
            }

        </section>
    )
}