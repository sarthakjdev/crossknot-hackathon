
/**
 * 
 * Teams Section Component  of Crossknot hacks hackathon
 * 
 */

 import SectionHead from '../sectionHeads'
 import TeamNameHead from './teamHead'
 import TeamMemberCard from './teamCard'
 
 const depts = ['Open Source & Engineering', 'Media & Outreach', 'UI/UX Designing', 'Market & Sponsorship', 'Volunteers']

 export default function Teams({team}){
     return (
            <section className='flex flex-col my-24 mt-14 mx-14 sm:mx-6'>
             <SectionHead sectionName={'Our Team'}/>
             <div className='flex flex-col gap-10'> 
              <div className='flex flex-row-reverse flex-wrap items-center justify-center m-auto gap-20 gap-y-40 mt-12 sm:gap-y-30 sm:mb-24'>
                    {
                     team.map((teamMember)=>{
                     if(teamMember.role == 'Advisor' || teamMember.role == 'CO-Lead Organiser' || teamMember.role == 'Lead Organiser'){
                         return (
                             <TeamMemberCard key={teamMember.name} member={teamMember} />
                         )}
                    })
                    }
                </div>
             {
                 depts.map((dept)=>{
                     return (
                         <div key={dept} className="flex flex-col my-10 sm:my-16 sm:mb-20 sm:gap-2">
                            <TeamNameHead sectionName={dept}  />
                            <div className='flex flex-wrap items-center justify-center m-auto gap-20 gap-y-40 mt-4 sm:gap-y-24'>
                            {
                                team.map((teamMember)=>{
                                    if(teamMember.role === dept){
                                        return(
                                            <TeamMemberCard key={teamMember.name} member={teamMember} />
                                        )
                                    }
                                })
                            }
                            </div>
                         </div>
                     )
                 })
             }
             </div>
            </section>
     )
 }
