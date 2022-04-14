
/**
 * 
 * Teams Section Component  of Crossknot hacks hackathon
 * 
 */

 import SectionHead from '../sectionHeads'
 import TeamNameHead from './teamHead'
 import TeamMemberCard from './teamCard'
 import SeeMoreButton from '../seeMoreButton'
 import { useRouter } from 'next/router'
 const depts = ['Open Source & Engineering', 'Media & Outreach', 'UI/UX Designing', 'Market & Sponsorship', 'Volunteers']

 export default function Teams({team}){
     const router = useRouter()
     return (
            <section className={`flex flex-col my-24 mt-14 mx-20 sm:mx-6 ${router.route === '/'? 'bg-primary_extra_light p-10 w-90 rounded-xl': null}`}>
             <SectionHead sectionName={'Our Team'}/>
             <div className='flex flex-col gap-10'> 
              <div className={`flex flex-row-reverse relative sm:flex-col-reverse flex-wrap items-center justify-center m-auto mb-32 gap-32 gap-y-40 mt-12 sm:gap-y-30 sm:mb-24 ${router.route === '/'? 'gap-24 mb-36 ': 'gap-32'}`}>
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
                 router.route === '/team' &&
                 depts.map((dept)=>{
                     return (
                         <div key={dept} className="flex flex-col my-24 mt-30 sm:my-16 sm:mb-20 sm:gap-2 mx-20">
                            <TeamNameHead sectionName={dept}  />
                            <div className={`flex flex-wrap items-center justify-center m-auto gap-32 gap-y-40 mt-4 sm:gap-y-30 ${router.route === '/'? 'gap-24': 'gap-32 gap-y-40'}`}>
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
             {router.route ==='/' && <SeeMoreButton url={'/team'} className="mt-40" align={'bottom'}/>}
            </section>
     )
 }
