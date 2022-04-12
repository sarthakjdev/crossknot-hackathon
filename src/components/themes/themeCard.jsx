
/**
 * 
 * Themes card component 
 * 
 */


import Image from "next/image"

export default function ThemeCard({ theme }){
    return (
        <div className="flex bg-none border-primary_extra_light border-8 rounded-xl text-card_text">
            <div className="flex flex-col items-center justify-center p-2 border-primary_extra_light border-4 rounded-xl m-2">
                <Image src={theme.themeIcon} alt={theme.themeName} />
                <h4 className="text-center font-primary uppercase text-lg ">{theme.themeName}</h4>
            </div>
        </div>
    )
}