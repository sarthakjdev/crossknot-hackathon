
/**
 * 
 * Team Card Component  of Crossknot hacks hackathon
 * 
 */

 import Image from "next/image"
 import Link from 'next/link'
 import twitterIcon from "../../../public/images/socials/twitter.svg"
 import linkedinIcon from "../../../public/images/socials/linkedin.svg"
 import githubIcon from "../../../public/images/socials/github.svg"
 
 export default function TeamMemberCard({member}){
     return (
             <div className="flex flex-col relative items-center justify-center">
                 <div className="relative group">
                     {/* Team Member image */}
                     <Image src={member.picture[0].url} alt={member.name} height={200} width={200} className="border-primary_dark border-4 rounded-full z-10 group-hover:blur-sm transition-all duration-50 grayscale group-hover:grayscale-0"  />
 
                     {/* Team social handles to be dispalyed on hover */}
                     <div className="absolute top-0 bottom-0 left-0 right-0 hidden z-20 gap-2 place-content-center items-center group-hover:flex transition-all duration-200">
                         <Link href={member.twitter}><a><i><Image src={twitterIcon} alt="twitter" /></i></a></Link>
                         <Link href={member.github}><a><i><Image src={githubIcon} alt="github" /></i></a></Link>
                         <Link href={member.linkedin}><a><i><Image src={linkedinIcon} alt="linkedin" /></i></a></Link>
                     </div>
                 </div>
 
                 {/* Team's member name and designation */}
                 <div className="bg-white w-12rem text-primary_dark pb-4 pt-10 px-6 flex flex-col items-center justify-center border-grey border-2 rounded-lg absolute top-40 w-16rem">
                 <h4 className="text-center font-primary font-extrabold text-xl">{member.name}</h4>
                 <h5 className="text-center font-primary font-extralight">{member.role}</h5>
                 </div>
             </div>
     )
 }