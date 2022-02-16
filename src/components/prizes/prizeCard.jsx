/**
 * 
 * Prize Card Component  of Crossknot hacks hackathon
 * 
 */

import Image from "next/image"

export default function PrizeCard({ rank, rankIcon, rankIncentives}){

    if(rank === 'first') {
        return (
            <div className="flex border-card_dark border-4 rounded-md py-4 bg-white w-fit m-auto">
                <div className="flex flex-col border-x-card_light border-card_dark border-4 py-6 px-2 w-quarter_past mx-0">
                  <div className="flex place-content-center items-center w-half m-auto"><Image src={rankIcon} alt={rank} /></div>
                  <h3 className="text-center text-card_text text-2xl my-2 w-70">1st Prize</h3>
                      {rankIncentives.map((incentive)=> {
                          return(
                              <p key={incentive} className="w-full m-auto">{incentive}</p>
                          )
                      })}
                </div>
            </div>
        )
    }

    if(rank === 'second'){
        return (
            <div className="flex border-card_dark border-4 rounded-md p-2 bg-white w-fit m-auto">
                <div className="flex flex-col border-x-card_light border-card_dark border-4 py-6 px-2 w-quarter_past m-auto">
                  <div className="flex place-content-center items-center w-half m-auto"><Image src={rankIcon} alt={rank} /></div>
                  <h3 className="text-center text-card_text text-2xl my-2 w-70">1st Prize</h3>
                      {rankIncentives.map((incentive)=> {
                          return(
                              <p key={incentive} className="w-full m-auto">{incentive}</p>
                          )
                      })}
                </div>
            </div>
        )
    }

    if(rank === 'third'){
        return (
            <div className="flex border-card_dark border-4 rounded-md p-2 bg-white w-fit m-auto">
            <div className="flex flex-col border-x-card_light border-card_dark border-4 py-6 px-2 w-quarter_past m-auto">
              <div className="flex place-content-center items-center w-half m-auto"><Image src={rankIcon} alt={rank} /></div>
              <h3 className="text-center text-card_text text-2xl my-2 w-70">1st Prize</h3>
                  {rankIncentives.map((incentive)=> {
                      return(
                          <p key={incentive} className="w-full m-auto">{incentive}</p>
                      )
                  })}
            </div>
        </div>
        )
    }
}