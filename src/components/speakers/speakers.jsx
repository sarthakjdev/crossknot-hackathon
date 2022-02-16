
/**
 * 
 * Speaker Section Component  of Crossknot hacks hackathon
 * 
 */

import SectionHead from '../sectionHeads'
import SpeakerCard from './speakerCard'

import speakersData from '../../../public/data/speakers'
export default function Speakers(){
    return (
        <section className="mx-20">
            <section className='flex flex-col my-10'>
            <SectionHead sectionName="Speakers"/>
            <div className='flex flex-wrap items-center justify-center m-auto gap-8 mt-4'> 
            {
                speakersData.map((speaker)=>{
                    return (
                        <SpeakerCard key={speaker.id} speaker={speaker} />
                    )}
                    )
            }
            </div>
        </section>

        <section className="flex flex-col my-24">
        <SectionHead sectionName="Judges"/>
            <div className='flex flex-wrap items-center justify-center m-auto gap-8 mt-4'> 
            {
                speakersData.map((speaker)=>{
                    if(speaker.judge) {
                        return (
                            <SpeakerCard key={speaker.id} speaker={speaker} />
                        )}
                    })
            }
            </div>
        </section>
        </section>
    )
}