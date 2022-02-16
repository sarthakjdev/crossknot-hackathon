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
        name: 'Home', 
        link: '/'
    },
    { 
        name: 'About', 
        link: '/about'
    },
    { 
        name: 'Tracks', 
        link: '/tracks'
    },
    { 
        name: 'Speakers', 
        link: '/speakers'
    },
    { 
        name: 'Sponsors', 
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

]

function toggleNavbar() {
    const navul = document.querySelector('.navbar')
    if(navul.style.transform === 'translateX(0%)') {
        navul.style.transform = 'translateX(-100%)'
    }else {
        navul.style.transform = 'translateX(0%)'
    }
    
    const nav_lis = Array.from(navul.children)

    nav_lis.map((li)=> {
        li.addEventListener('click', ()=>{
            if(navul.style.transform === 'translateX(0%)') {
                navul.style.transform = 'translateX(-100%)'
            }else {
                navul.style.transform = 'translateX(0%)'
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
       <div className=" navbar flex items-center justify-evenly transition-all duration-200 lg:-translate-x-full lg:flex-col lg:w-full lg:absolute lg:top-20 lg:left-0 lg:right-0 lg:bg-mainbg lg:mt-5 lg:z-100">
           {
               pages.map((page)=>{
                return (
                    <Link href={page.link} key={page.name}><a className="text-primary_dark text-xl font-primary py-2 px-6 hover:rounded-full hover:text-white hover:bg-primary transition-all duration-100 mx-2 lg:my-8 uppercase active:bg-primary active:text-white active:rounded-full">{page.name}</a></Link>
                )
               })
           }
      </div>

      {/* ham toggle button for responsive view */}
          <div className="flex-col hidden lg:flex" onClick={toggleNavbar}>
              <span className="bg-primary h-1 w-10 my-1"></span>
              <span className="bg-primary h-1 w-10 my-1"></span>
              <span className="bg-primary h-1 w-10 my-1"></span>
          </div>
       </nav>
   </header>
)
}
