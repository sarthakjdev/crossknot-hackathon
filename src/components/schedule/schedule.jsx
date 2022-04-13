import SectionHead from '../sectionHeads'
import {useState, useEffect, useRef} from 'react'
import ScheduleRow from "./scheduleRow"

export default function Schedule({schedule}){

    const days = [
        {
            id: 1,
            name: 'Day 1'
        },
        {
            id: 2,
            name: 'Day 2'
        },
        {
            id: 3,
            name: 'Day 3'
        },
    ]
    
    const [day, setday] = useState(1)
    const [dayData, setdayData] = useState(schedule.filter((event)=>{ if (event.day === '1' ){return event} else { return }}))

    useEffect(()=>{
         setdayData(schedule.filter((event)=>{ if (event.day === day.toString() ){return event} else { return }}))
    }, [day, schedule])

    return (
        <section className="font-primary" id='schedule'>
            <SectionHead sectionName={'Schedule'} />
            <article>
                <div className="flex gap-4 m-auto items-center justify-center">
                    {
                        days.map((dayBtn)=>{
                            return(
                                <button key={dayBtn.id} className={`p-2 px-4 text-primary bg-white border-2 border-primary active:text-white active:bg-primary ${dayBtn.id === day? 'bg-primary text-white':null}`} onClick={()=> {        
                                    setday(dayBtn.id)
                                }}>{dayBtn.name}</button>
                            )
                        })
                    }
                </div>
                <div className='flex flex-col gap-4 mt-8 sm:gap-y-10 transition-all duration-200'>
                    {
                       dayData.map((event)=>{
                           return (
                            <ScheduleRow rowData={event} key={event.eventId} />
                           )
                       }) 
                    }
                </div>
            </article>
        </section>
    )
}