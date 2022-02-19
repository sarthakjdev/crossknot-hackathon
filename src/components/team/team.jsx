
/**
 * 
 * Teams Section Component  of Crossknot hacks hackathon
 * 
 */

 import SectionHead from '../sectionHeads'
 import TeamMemberCard from './teamCard'
 
 import teamsData from '../../data/team'

//  shuffling the team members
//  teamsData.sort(() => Math.random() - 0.5)

 export default function Teams(){
     return (
         <section className="mx-20 mb-40">
             <section className='flex flex-col my-10'>
             <SectionHead sectionName="Founders"/>
             <div className='flex flex-wrap items-center justify-center m-auto gap-20 gap-y-20 mt-4'> 
             {
                 teamsData.map((teamMember)=>{
                     if(teamMember.memberDesignation === 'Founder') {
                        return (
                            <TeamMemberCard key={teamMember.memberId} member={teamMember} />
                        )}
                    })
             }
             </div>
            </section>
            <section className='flex flex-col my-24'>
             <SectionHead sectionName="Core Team"/>
             <div className='flex flex-wrap items-center justify-center m-auto gap-20 gap-y-40 mt-4'> 
             {
                 teamsData.map((teamMember)=>{
                     if(teamMember.memberDesignation !== 'Founder'){
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