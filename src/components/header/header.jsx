/**
 * 
 * header component of the crossknot hackathon website 
 * 
 */

import Link from "next/link"
import Image from "next/image"
import logo from '../../../public/images/logo.svg'

const pages = [
    { 
        name: 'Tracks', 
        link: '/tracks'
    },
    { 
        name: 'Speakers', 
        link: '/speakers'
    },
    { 
        name: 'Partners', 
        link: '/sponsors'
    },
    { 
        name: 'Prizes', 
        link: '/prizes'
    },
    { 
        name: 'Team', 
        link: '/team'
    },    
    {
        name: 'Brochure',
        link: '/brochure'
    }

]

function toggleNavbar() {
    const navul = document.querySelector('.navbar')
    const body = document.querySelector('body')
    if(navul.style.transform === 'translateX(0%)') {
        navul.style.transform = 'translateX(-100%)'
        body.style.overflowY = 'scroll'
    }else {
        navul.style.transform = 'translateX(0%)'
        body.style.overflowY = 'hidden'
        window.moveTo(0,0)
    }
    
    const nav_lis = Array.from(navul.children)
    nav_lis.map((li)=> {
        li.addEventListener('click', ()=>{
            console.log('event trigerred')
            if(navul.style.transform === 'translateX(0%)' ) {
                navul.style.transform = 'translateX(-100%)'
                body.style.overflowY = 'scroll'
            }else if (navul.style.transform === 'translateX(-100%)' && window.screen.width > 768) {
                navul.style.transform = 'translateX(0%)'
                body.style.overflowY = 'hidden'
            }
        })
    })
}

export default function Header(){

return (
       <header className="flex items-center justify-between px-8 py-5 lg:relative">

         {/* Logo */}
       <Link href="/"><a><Image src={logo} alt="logo"/></a></Link>

        {/* Navbar menu */}
       <nav className="flex items-center justify-evenly ">
       <div className=" navbar flex items-center justify-evenly transition-all duration-200 lg:-translate-x-full lg:flex-col lg:w-full lg:h-90vh lg:absolute lg:top-20 lg:left-0 lg:right-0 lg:bg-white lg:mt-8 lg:z-100">
           {
               pages.map((page)=>{
                return (
                    <Link href={page.link} key={page.name}><a className="text-primary_dark text-xl font-primary py-2 px-6 hover:rounded-full hover:text-white hover:bg-primary transition-all duration-200 mx-2 lg:my-8 uppercase active:bg-primary active:text-white active:rounded-full">{page.name}</a></Link>
                )
               })
           }
      </div>

      {/* ham toggle button for responsive view */}
          <div className="flex-col hidden lg:flex" onMouseDown={toggleNavbar}>
              <span className="bg-primary h-1 w-10 my-1"></span>
              <span className="bg-primary h-1 w-10 my-1"></span>
              <span className="bg-primary h-1 w-10 my-1"></span>
          </div>
       </nav>
   </header>
)
}
