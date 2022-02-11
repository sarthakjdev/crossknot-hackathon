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