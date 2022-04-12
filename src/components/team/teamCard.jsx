
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
        <div className=" group rounded-full border-8 border-primary flex justify-center z-10">
            {/* Member image */}
            <Image src={member.picture[0].url} alt={member.name} height={150} width={150} className="border-primary_dark border-4 rounded-full z-10 " />
        </div>

        {/* Member's name and designation */}
        <div className="bg-white px-2 flex flex-col flex-wrap items-center justify-center border-grey border-2 rounded-lg absolute top-20 h-14rem w-15rem">
            <h4 className="text-center font-primary font-extrabold mt-16">{member.name}</h4>
            <h5 className="text-center font-primary my-2">{member.role}</h5>

        {/* Member social handles to be dispalyed on hover */}
            <div className="flex items-center justify-around gap-4">
                {member.github &&  <Link href={member.github}><a target="_blank"><i><Image src={githubIcon} alt="github" /></i></a></Link>}
                {member.linkedin && <Link href={member.linkedin}><a target="_blank"><i><Image src={linkedinIcon} alt="linkedin" /></i></a></Link>}
                {member.twitter && <Link href={member.twitter}><a target="_blank"><i><Image src={twitterIcon} alt="twitter" /></i></a></Link>}
            </div>
        </div>
    </div>
     )
 }