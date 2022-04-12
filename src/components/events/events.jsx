/**
 * 
 * Prize Section Component of Crossknot hacks hackathon
 * 
 */

 import EventCard from './eventCard'
 import SectionHead from '../sectionHeads'
 import { useRouter } from 'next/router'
import SeeMoreButton from '../seeMoreButton'
 
 export default function Event({events}){
     const router = useRouter()
     return (
         <section className=' flex flex-col mx-14 my-8 sm:mx-6 w-90'>
             <SectionHead sectionName={'Events'} />
             <div className='mt-9 flex justify-center item-center'>
             </div>
             <div className='flex flex-wrap items-center gap-14 justify-center mb-8'>
                 {   
                     events.map((event, index)=>{
                         if (router.route === '/'){
                             return(
                                index < 4 && <EventCard event={event} key={event.id} />
                             )
                         }else {
                             return (
                                <EventCard event={event} key={event.id} />
                             )
                         }
                     })
                 }
             </div>
             {router.route === '/' && <SeeMoreButton url={'/events'} />}
         </section>
     )
 }