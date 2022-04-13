import Image from "next/image";
import Link from "next/link";

import calendarIcon from '../../../public/images/events/calendar.svg'
import clockIcon from '../../../public/images/events/clock.svg'


export default function  scheduleRow({rowData}){
    return (
        <section className="flex gap-x-6 sm:flex-col sm:gap-y-4">
            <div className="flex flex-col mr-auto gap-y-2 sm:m-auto border-2 border-r-4 border-primary rounded-xl p-2 px-4 w-70 sm:w-full">
                <p className="flex items-center gap-1"><Image src={calendarIcon} alt="calendar icon" />{rowData.date}</p>
                <p className="flex items-center gap-1"><Image src={clockIcon} alt="clock icon" />{rowData.time}</p>
            </div>
            <div className="border-2 border-l-4 border-primary flex items-center justify-center rounded-xl w-full pl-4">
                <p className="mr-auto text-xl text-left">{rowData.task}</p>
            </div>
        </section>
    )
}