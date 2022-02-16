
/**
 * 
 * Main layout to be used in every page whereever header and footer needed to be linked
 * 
 */

import Header from "../header/header"
import Footer from "../footer/footer"

export default function mainLayout({children}){
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}