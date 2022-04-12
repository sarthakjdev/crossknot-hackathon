
/**
 * 
 * Speaker Section Component  of Crossknot hacks hackathon
 * 
 */

import SectionHead from '../sectionHeads'
import SpeakerCard from './speakerCard'
import { useRouter } from 'next/router'
import SeeMoreButton from '../seeMoreButton'

export default function Speakers({speakers}){
    const router = useRouter()
    return (
        <section className={`mx-40 ${router.route === '/'? 'bg-primary_extra_light rounded-xl mx-28 w-90': null}`}>
            <section className='flex flex-col my-10'>
            <SectionHead sectionName={"Mentors"}/>
            <div className={`flex flex-wrap items-center justify-center gap-y-40 mt-8 ${router.route ==='/'? 'gap-24 mt-2': 'gap-32'}`}> 
            {
                speakers.map((speaker, index)=>{
                    if (router.route === '/'){
                        return (
                            index<4 && <SpeakerCard key={speaker.name} speaker={speaker} />
                        )}else{
                        return (
                            <SpeakerCard key={speaker.name} speaker={speaker} />
                        )}
                    }
                    )
            }
            </div>
            {router.route ==='/' && <SeeMoreButton url={'/mentors'} align={'extraBottom'} />}
        </section>

        <section className="flex flex-col my-40 sm:mt-40">
        <SectionHead sectionName={"Judges"} />
            <div className={`flex flex-wrap items-center justify-center m-auto gap-y-40 mt-8 ${router.route ==='/'? 'gap-24': 'gap-32'}`}> 
            {
                speakers.map((judge)=>{
                    if(judge.judge) {
                        return (
                            <SpeakerCard key={judge.name} speaker={judge} />
                        )}
                    })
            }
            </div>
            {router.route ==='/' && <SeeMoreButton url={'/mentors'} className="mt-40" align={'extraBottom'} />}
        </section>
        </section>
    )
}