/**
 * 
 * Themes Section Component
 * 
 */


import SectionHead from '../sectionHeads'
import ThemeCard from './themeCard'

import themesData from '../../data/themeData'

export default function Tracks(){
    return (
        <section className='flex flex-col my-8 mx-14'>
            <SectionHead sectionName={'Themes'} />
            <div className='flex flex-wrap items-center justify-center m-auto my-6 gap-6'> 
            {
                themesData.map((theme)=>{
                    return (
                        <ThemeCard key={theme.themeId} theme={theme} />
                    )}
                    )
            }
            </div>
        </section>
    )
}