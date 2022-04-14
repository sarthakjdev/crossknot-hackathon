
/**
 * 
 * Speaker Section Component  of Crossknot hacks hackathon
 * 
 */

import SectionHead from '../sectionHeads'
import GuestCard from './guestCard'
import { useRouter } from 'next/router'
import SeeMoreButton from '../seeMoreButton'
import SectionSubhead from '../sectionSubhead'
export default function Speakers({guests}){
    const router = useRouter()
    return (
        <section className={`mx-40 ${router.route === '/'? 'bg-primary_extra_light rounded-xl mx-28 pb-40 w-90': null}`}>


            <SectionHead sectionName={'Guests'} />

            <section className='flex flex-col my-10'>
            {router.route === '/guests' && <SectionSubhead sectionName={"Judges"}/>}
            <div className={`flex flex-wrap items-center justify-center gap-y-44 mt-8 ${router.route ==='/'? 'gap-24 mt-2': 'gap-32'}`}> 
            {
                guests.judges.map((guest, index)=>{
                    {
                        if(guest.judge){
                            if (router.route === '/'){
                                console.log(guest)
                                return (
                                    index<4 && <GuestCard key={guest.name} guest={guest} />
                                )}else{
                                return (
                                    <GuestCard key={guest.name} guest={guest} />
                                )}
                            }
                        }
                        }
                    )
            }
            </div>
            {router.route ==='/' && <SeeMoreButton url={'/guests'} align={'extraBottom'} />}
        </section>

        {
            router.route === '/guests' && 
            <section className="flex flex-col my-40 sm:mt-60">
            <SectionSubhead sectionName={"Mentors"} />
                <div className={`flex flex-wrap items-center justify-center m-auto gap-y-44 mt-8 ${router.route ==='/'? 'gap-24': 'gap-32'}`}> 
                {
                    guests.mentors.map((guest)=>{
                        if(guest.mentor) {
                            return (
                                <GuestCard key={guest.name} guest={guest} />
                            )}
                        })
                }
                </div>
            </section>
        }

        {
            router.route === '/guests' &&
            <section className="flex flex-col my-40 sm:mt-60">
            <SectionSubhead sectionName={"Speakers"} />
                <div className={`flex flex-wrap items-center justify-center m-auto gap-y-44 mt-8 ${router.route ==='/'? 'gap-24': 'gap-32'}`}> 
                {
                    guests.speakers.map((guest)=>{
                        if(guest.speaker) {
                            return (
                                <GuestCard key={guest.name} guest={guest} />
                            )}
                        })
                }
                </div>
            </section>
        }


        </section>
    )
}