
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
import { useRouter } from "next/router"

export default function SpeakerCard({guest}){
    const router = useRouter()
    return (
            <div className="flex flex-col relative items-center justify-center">
                <div className="relative group rounded-full border-8 sm:border-4 border-primary flex justify-center z-10">
                    {/* Speaker image */}
                    <Image src={guest.picture[0].url} alt={guest.name} height={150} width={150} className="border-primary_dark border-4 rounded-full z-10 " />
                </div>

                {/* Speaker's name and designation */}
                <div className={`bg-white px-6 flex flex-col items-center justify-center border-grey border-2 rounded-lg absolute top-20  h-14rem w-15rem  ${router.route === '/guests'? 'sm:w-12rem sm:h-11rem sm:top-12': null}`}>
                    <h4 className={`text-center font-primary font-extrabold mt-20  ${router.route === '/guests'? 'sm:mt-6': null}`}>{guest.name}</h4>
                    <h5 className="text-center font-primary ">{guest.desc}</h5>

                {/* Speakers social handles to be dispalyed on hover */}
                    <div className="flex items-center justify-around gap-4 mt-4 sm:mt-0">
                        {guest.github &&  <Link href={guest.github}><a target="_blank"><i><Image src={githubIcon} alt="github" /></i></a></Link>}
                        {guest.linkedin && <Link href={guest.linkedin}><a target="_blank"><i><Image src={linkedinIcon} alt="linkedin" /></i></a></Link>}
                        {guest.twitter && <Link href={guest.twitter}><a target="_blank"><i><Image src={twitterIcon} alt="twitter" /></i></a></Link>}
                    </div>
                </div>
            </div>

    )
}