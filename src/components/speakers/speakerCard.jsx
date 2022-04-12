
/**
 * 
 * Speaker Card Component  of Crossknot hacks hackathon
 * 
 */

import Image from "next/image"
import Link from 'next/link'

import twitterIcon from "../../../public/images/socials/twitter.svg"
import linkedinIcon from "../../../public/images/socials/linkedin.svg"
import githubIcon from "../../../public/images/socials/github.svg"




export default function SpeakerCard({speaker}){
    return (
            <div className="flex flex-col relative items-center justify-center">
                <div className="relative group rounded-full border-8 border-primary flex justify-center z-10">
                    {/* Speaker image */}
                    <Image src={speaker.picture[0].url} alt={speaker.name} height={150} width={150} className="border-primary_dark border-4 rounded-full z-10 " />
                </div>

                {/* Speaker's name and designation */}
                <div className="bg-white px-6 flex flex-col flex-wrap items-center justify-center border-grey border-2 rounded-lg absolute top-20 h-14rem w-15rem">
                    <h4 className="text-center font-primary font-extrabold mt-14">{speaker.name}</h4>
                    <h5 className="text-center font-primary ">{speaker.desc}</h5>

                {/* Speakers social handles to be dispalyed on hover */}
                    <div className="flex items-center justify-around gap-4">
                        {speaker.github &&  <Link href={speaker.github}><a target="_blank"><i><Image src={githubIcon} alt="github" /></i></a></Link>}
                        {speaker.linkedin && <Link href={speaker.linkedin}><a target="_blank"><i><Image src={linkedinIcon} alt="linkedin" /></i></a></Link>}
                        {speaker.twitter && <Link href={speaker.twitter}><a target="_blank"><i><Image src={twitterIcon} alt="twitter" /></i></a></Link>}
                    </div>
                </div>
            </div>

    )
}