
/**
 * 
 * Themes card component 
 * 
 */


import Image from "next/image"

export default function ThemeCard({ theme }){
    return (
        <div className="flex bg-none border-card_dark border-8 rounded-md text-card_text">
            <div className="flex flex-col items-center justify-center p-2 bg-card_light rounded-md m-2">
                <Image src={theme.themeIcon} alt={theme.themeName} />
                <h4 className="text-center font-primary uppercase text-lg ">{theme.themeName}</h4>
            </div>
        </div>
    )
}