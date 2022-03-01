/**
 * 
 * Prize Card Component  of Crossknot hacks hackathon
 * 
 */

import Image from "next/image"

export default function PrizeCard({ rank, rankIcon, rankIncentives}){

    if(rank === 'first') {
        return (
            <div className="flex flex-col items-center justify-center border-card_dark border-4 rounded-md p-4 bg-white sm:w-full sm:mx-6 sm:p-1">
                <div className="flex flex-col border-x-card_light border-card_dark border-4 py-20 px-6 sm:p-1">
                  <div className="flex place-content-center items-center w-half m-auto"><Image src={rankIcon} alt={rank} /></div>
                  <h3 className="text-center text-card_text text-2xl m-auto my-8 w-70">1st Prize</h3>
                      {rankIncentives.map((incentive)=> {
                          return(
                              <li key={incentive} className="w-full m-auto p-2 list-disc">{incentive}</li>
                          )
                      })}
                </div>
            </div>
        )
    }

    if(rank === 'second'){
        return (
            <div className="flex flex-col items-center justify-center border-card_dark border-4 rounded-md p-4 bg-white sm:w-full sm:mx-6 sm:p-1">
                <div className="flex flex-col border-x-card_light border-card_dark border-4 py-20 px-6 sm:p-1 ">
                  <div className="flex place-content-center items-center w-half m-auto"><Image src={rankIcon} alt={rank} /></div>
                  <h3 className="text-center text-card_text text-2xl m-auto my-8 w-70">2nd Prize</h3>
                      {rankIncentives.map((incentive)=> {
                          return(
                              <li key={incentive} className="w-full p-2 m-auto list-disc">{incentive}</li>
                          )
                      })}
                </div>
            </div>
        )
    }

    if(rank === 'third'){
        return (
            <div className="flex flex-col items-center justify-center border-card_dark border-4 rounded-md p-4 bg-white sm:w-full sm:mx-6 sm:p-1">
                <div className="flex flex-col border-x-card_light border-card_dark border-4 py-20 px-6 sm:p-1">
                  <div className="flex place-content-center items-center w-half m-auto"><Image src={rankIcon} alt={rank} /></div>
                  <h3 className="text-center text-card_text text-2xl m-auto my-8 w-70">3rd Prize</h3>
                      {rankIncentives.map((incentive)=> {
                          return(
                              <li key={incentive} className="w-full p-2 m-auto list-disc">{incentive}</li>
                          )
                      })}
                </div>
            </div>
        )
    }
}