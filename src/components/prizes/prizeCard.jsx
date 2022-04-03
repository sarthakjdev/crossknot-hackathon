/**
 * 
 * Prize Card Component  of Crossknot hacks hackathon
 * 
 */

import Image from "next/image"


export default function PrizeCard({prizeData}){

if(prizeData.id < 4) {
    return (
        <div className="flex flex-col items-center justify-center border-card_dark border-4 rounded-xl p-2 bg-white sm:w-full sm:mx-6 sm:p-1 h-full">
            <div className="flex flex-col border-x-card_light border-card_dark border-4 py-20 px-4 sm:p-1 h-full rounded-xl w-full">
              <div className="flex place-content-center items-center w-half m-auto"><Image src={prizeData.prizeIcon[0].url} height={500} width={500}  alt={prizeData.name} /></div>
              <h3 className="text-center text-card_text text-2xl m-auto my-8 w-70">{prizeData.name}</h3>
                  {prizeData.prizeDesc.map((incentive)=> {
                      return(
                          <li key={incentive} className="w-full m-auto p-1 list-disc">{incentive}</li>
                      )
                  })}
            </div>
        </div>
    )
}

if(prizeData.id > 3){
    return (
        <div className="flex flex-col items-center justify-center border-card_dark border-4 rounded-xl p-2 bg-white sm:w-full sm:mx-6 sm:p-1 h-full">
            <div className="flex flex-col border-x-card_light border-card_dark border-4 py-10 px-4 sm:p-1 h-full rounded-xl">
                <div className="flex items-center justify-between">
                <div className="flex place-content-center items-center w-half m-auto"><Image src={prizeData.prizeIcon[0].url} height={500} width={500}  alt={prizeData.name} /></div>
                <h3 className="text-center text-card_text text-2xl m-auto my-8 w-70">{prizeData.name}</h3>
                </div>
                  {prizeData.prizeDesc.map((incentive)=> {
                      return(
                          <li key={incentive} className="w-full m-auto p-1 list-disc">{incentive}</li>
                      )
                  })}
            </div>
        </div>
    )
}

}