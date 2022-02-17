import Link from "next/link"
import Image from "next/image"

import footerImage from '../../../public/images/footer/footerImage.svg'
import twitterIcon from '../../../public/images/footer/twitter.svg'
import instaIcon from '../../../public/images/footer/instagram.svg'
import ytIcon from '../../../public/images/footer/yt.svg'
import mailIcon from '../../../public/images/footer/mail.svg'
import discordIcon from '../../../public/images/footer/discord.svg'
import linkedinIcon from '../../../public/images/footer/linkedin.svg'


const footerMenu = [
    {
        name: 'About', 
        url: '/about'
    },
    {
        name: 'Crossknot Blog', 
        url: '/about'
    },
    {
        name: 'Press Kit', 
        url: '/about'
    },
    {
        name: 'Code of Conduct', 
        url: '/about'
    },
]

const socials = [
    {
        name: 'discord', 
        url: '',
        icon: discordIcon
    },
    {
        name: 'twitter', 
        url: '',
        icon: twitterIcon
    },
    {
        name: 'instagram', 
        url: '',
        icon: instaIcon
    },
    {
        name: 'youtube', 
        url: '',
        icon: ytIcon
    },
    {
        name: 'mail', 
        url: '',
        icon: mailIcon
    },
    {
        name: 'linkedin', 
        url: '',
        icon: linkedinIcon
    },
]

export default function Footer(){
    return (
        <footer className="flex items-center justify-center bg-primary_light rounded-xl m-8 text-primary_dark px-14 py-6 md:flex-col">
                <div>
                    <Image src={footerImage} alt="footer illustration" />
                </div>
                <div className="flex flex-col">
                <div className="flex lg:flex-col">
                    <div className="flex flex-col my-6">
                        {
                            footerMenu.map((item)=>{
                                return (
                                    <Link href={item.url} key={item.name}><a className="text-center py-1 text-xl">{item.name}</a></Link>                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3  className="text-center font-bold font-primary text-2xl mb-4">Find us Online</h3>
                        <div className="flex flex-wrap gap-6 w-half sm:w-quarter_past">
                            {
                                socials.map((social)=>{
                                    return (
                                        <Link href={social.url} key={social.name}><a><Image src={social.icon} alt={social.name}/></a></Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <hr className="my-4"/>
                <h3 className="text-center text-primary_dark">Copyright Ⓒ 2022 CrossKnot Community. All rights reserved.</h3>
                </div>
        </footer>
    )
}