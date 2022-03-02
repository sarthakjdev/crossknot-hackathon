/**
 * 
 * Tracks Section Component
 * 
 */


import SectionHead from '../sectionHeads'
import TrackCard from './trackCard'

import tracksData from '../../data/trackData'
import trackHead from '../../../public/images/pageHeads/tracks.svg'

export default function Tracks(){
    return (
        <section className='flex flex-col my-8 mx-14 '>
            <SectionHead image={trackHead} />
            <div className='flex flex-wrap items-center justify-center m-auto my-6 gap-6'> 
            {
                tracksData.map((track)=>{
                    return (
                        <TrackCard key={track.trackId} track={track} />
                    )}
                    )
            }
            </div>
        </section>
    )
}