
/**
 * 
 * Speaker Section Component  of Crossknot hacks hackathon
 * 
 */

import SectionHead from '../sectionHeads'
import SpeakerCard from './speakerCard'
import speakersData from '../../data/speakers'

import speakersHead from '../../../public/images/pageHeads/speakers.svg'
import judgesHead from '../../../public/images/pageHeads/judges.svg'

export default function Speakers(){
    return (
        <section className="mx-20">
            <section className='flex flex-col my-10'>
            <SectionHead image={speakersHead}/>
            <div className='flex flex-wrap items-center justify-center m-auto gap-12 gap-y-20 mt-4'> 
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
        <SectionHead image={judgesHead} />
            <div className='flex flex-wrap items-center justify-center m-auto gap-12 gap-y-20 mt-4'> 
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