/**
 * 
 * Sponsor's Section Component
 * 
 */


import SectionHead from '../sectionHeads'
import SponsorsCard from './sponsorsCard'

const sponsorsType = ['title', 'platinum', 'gold', 'community partners', 'coding partners']

export default function Sponsors({sponsors}){
    return (
        <section className='flex flex-col mx-14 sm:mx-4'>
            <SectionHead sectionName={"Sponsors & Partners"} />
            <div className='mt-9 flex justify-center item-center'>
            </div>
             {
                 sponsorsType.map((type)=>{
                     return (
                        <div key={type}>
                        <SponsorsCard type={type} key={type} sponsors={sponsors} />
                        <hr />
                        </div>
                     )
                 })
             }
        </section>
    )
}
