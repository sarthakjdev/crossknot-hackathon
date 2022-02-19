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
        name: 'CrossKnot Blog', 
        url: 'https://blog.crossknotcommunity.tech/'
    },
    {
        name: 'Brochure',
        url: 'https://drive.google.com/file/d/1CZRMklQp32SfJH9d2RBub-TEqTFzrCLb/view?usp=sharing'
    },
    {
        name: 'Code of Conduct', 
        url: 'https://github.com/crossknot-community/crossknot/blob/main/CODE_OF_CONDUCT.md'
    },
]

const socials = [
    {
        name: 'discord', 
        url: 'https://discord.gg/ScREataGaY',
        icon: discordIcon
    },
    {
        name: 'twitter', 
        url: 'https://twitter.com/crossknotcomm',
        icon: twitterIcon
    },
    {
        name: 'instagram', 
        url: 'https://www.instagram.com/crossknothacks/',
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
        url: 'https://www.linkedin.com/company/crossknot-hacks/about/',
        icon: linkedinIcon
    },
]

export default function Footer(){
    return (
        <footer className="flex items-center justify-center bg-primary_light rounded-xl m-8 text-primary_dark px-14 py-6 md:flex-col md:px-8">
                <div>
                    <Image src={footerImage} alt="footer illustration" className="animate-whirl transition-all duration-200" />
                </div>
                <div className="flex flex-col">
                <div className="flex lg:flex-col">
                    <div className="flex flex-col my-6">
                        {
                            footerMenu.map((item)=>{
                                return (
                                    <Link href={item.url} key={item.name}><a className="text-left py-1 text-xl font-extralight midLg:text-center">{item.name}</a></Link>                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3  className="text-center font-bold font-primary text-2xl mb-4">Find us Online</h3>
                        <div className="flex flex-wrap gap-6 w-half items-center justify-center midLg:w-quarter_past sm:w-full">
                            {
                                socials.map((social)=>{
                                    return (
                                        <Link href={social.url} key={social.name} ><a className="hover:scale-110 transition-all duration-1000 ease-linear"><Image src={social.icon} alt={social.name}/></a></Link>
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