/**
 * 
 * Tracks Section Component
 * 
 */


import SectionHead from '../sectionHeads'
import TrackCard from './trackCard'

import tracksData from '../../data/trackData'
export default function Tracks(){
    return (
        <section className='flex flex-col my-8 mx-14 '>
            <SectionHead sectionName="tracks"/>
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