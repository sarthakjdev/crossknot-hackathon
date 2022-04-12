
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
 import calendarIcon from '../../../public/images/events/calendar.svg'
 import clockIcon from '../../../public/images/events/clock.svg'
 
 
 export default function EventCard({event}){
     return (
             <article className="flex items-center justify-around font-primary border-2 rounded-lg p-4 gap-x-10 text-card_text max-w-lg sm:flex-col ">


                <section className="flex flex-col items-center justify-center gap-2">
                    <div className="rounded-full border-4 border-primary flex justify-center z-10 w-fit">
                        {/* Speaker image */}
                        <Image src={event.speakerPicture[0].url} alt={event.speakerName} height={120} width={120} className="border-primary_dark border-4 rounded-full z-10 " />
                    </div>
                    {/* Speaker's name and designation */}
                    <h4 className="text-center font-extrabold">{event.speakerName}</h4>

                    {/* Speakers social handles to be dispalyed on hover */}
                    <div className="flex items-center justify-center gap-4">
                        {event.speakerGithub &&  <Link href={event.speakerGithub}><a target="_blank"><i><Image src={githubIcon} alt="github" /></i></a></Link>}
                        {event.speakerLinkedin && <Link href={event.speakerLinkedin}><a target="_blank"><i><Image src={linkedinIcon} alt="linkedin" /></i></a></Link>}
                        {event.speakerTwitter && <Link href={event.speakerTwitter}><a target="_blank"><i><Image src={twitterIcon} alt="twitter" /></i></a></Link>}
                    </div>
                </section>


                <section className="flex flex-col items-center justify-center gap-4">
                    <div className="sm:m-auto">
                        <h4 className="text-2xl sm:text-center">{event.name}</h4>
                        <p className="font-extralight sm:text-center">{event.description}</p>
                    </div>
                    <div className="flex flex-col mr-auto gap-y-2 sm:m-auto">
                        <p className="flex items-center gap-1"><Image src={calendarIcon} alt="calendar icon" />{event.eventDate}</p>
                        <p className="flex items-center gap-1"><Image src={clockIcon} alt="clock icon" />{event.eventTime}</p>
                    </div>
                    <Link href={event.eventLink}><a target="_blank" className="uppercase font-primary mr-auto bg-primary_extra_light rounded-xl p-2 px-4 sm:m-auto">Join event</a></Link>
                </section>


             </article>
 
     )
 }