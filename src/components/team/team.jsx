
/**
 * 
 * Teams Section Component  of Crossknot hacks hackathon
 * 
 */

 import SectionHead from '../sectionHeads'
 import TeamMemberCard from './teamCard'
 
 import teamsData from '../../data/team'

import founderHead from '../../../public/images/pageHeads/founders.svg'
import teamHead from '../../../public/images/pageHeads/team.svg'
//  shuffling the team members
//  teamsData.sort(() => Math.random() - 0.5)

 export default function Teams(){
     return (
         <section className="mx-20 mb-40">
             <section className='flex flex-col my-10'>
             <SectionHead image={founderHead}/>
             <div className='flex flex-wrap items-center justify-center m-auto gap-20 gap-y-20 mt-4'> 
             {
                 teamsData.map((teamMember)=>{
                     if(teamMember.memberDesignation === 'Founder' || teamMember.memberDesignation === 'Founder & Lead Organiser') {
                        return (
                            <TeamMemberCard key={teamMember.memberId} member={teamMember} />
                        )}
                    })
             }
             </div>
            </section>
            <section className='flex flex-col my-24'>
             <SectionHead image={teamHead}/>
             <div className='flex flex-wrap items-center justify-center m-auto gap-20 gap-y-40 mt-4'> 
             {
                 teamsData.map((teamMember)=>{
                     if(teamMember.memberDesignation !== 'Founder' && teamMember.memberDesignation !== 'Founder & Lead Organiser'){
                         return (
                             <TeamMemberCard key={teamMember.memberId} member={teamMember} />
                         )}
                    })
             }
             </div>
            </section>
         </section>
     )
 }