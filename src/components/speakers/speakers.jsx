
/**
 * 
 * Speaker Section Component  of Crossknot hacks hackathon
 * 
 */

import SectionHead from '../sectionHeads'
import SpeakerCard from './speakerCard'


export default function Speakers({speakers}){
    return (
        <section className="mx-20">
            <section className='flex flex-col my-10'>
            <SectionHead sectionName={"Speakers"}/>
            <div className='flex flex-wrap items-center justify-center m-auto gap-12 gap-y-24 mt-8'> 
            {
                speakers.map((speaker)=>{
                    return (
                        <SpeakerCard key={speaker.name} speaker={speaker} />
                    )}
                    )
            }
            </div>
        </section>

        <section className="flex flex-col my-24">
        <SectionHead sectionName={"Judges"} />
            <div className='flex flex-wrap items-center justify-center m-auto gap-12 gap-y-20 mt-4'> 
            {
                speakers.map((judge)=>{
                    if(judge.judge) {
                        return (
                            <SpeakerCard key={judge.name} speaker={judge} />
                        )}
                    })
            }
            </div>
        </section>
        </section>
    )
}