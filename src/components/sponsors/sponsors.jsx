/**
 * 
 * Sponsor's Section Component
 * 
 */


import SectionHead from '../sectionHeads'
import SponsorsCard from './sponsorsCard'

const sponsorsType = ['title', 'platinum', 'gold', 'community partner']

export default function Sponsors(){
    return (
        <section className='flex flex-col mx-14 sm:mx-6'>
            <SectionHead sectionName="Sponsors"/>
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