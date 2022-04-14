import Head from 'next/head'
import GuestsSection from "../src/components/guests/guests"
import airtableBase from '../src/utils/airtable'
import configs from '../src/config/config'
import airtableConstants from '../src/constants/airtableConstants'

export default function Speakers({guests}){
    return(
            <>
            <Head>
            <title>Guests | CrossKnot Hacks</title>
            </Head>
            <GuestsSection guests={guests}/>
            </>
    )
}

export async function getStaticProps(){

    const speakersData = await airtableBase(airtableConstants.SPEAKERSJUDGES_TABLE).select({maxRecords: 100,}).all()
    let speakers = []
    speakersData.forEach(speaker => {
        speakers.push(speaker.fields)
    })

    const judgesData = await airtableBase(airtableConstants.JUDGES_TABLE).select({maxRecords: 100,}).all()
    let judges = []
    judgesData.forEach(judge => {
        judges.push(judge.fields)
    })

    const mentorsData = await airtableBase(airtableConstants.MENTORS_TABLE).select({maxRecords: 100,}).all()
    let mentors = []
    mentorsData.forEach(mentor => {
        mentors.push(mentor.fields)
    })

    return {
        props: {
            guests: {
                mentors: mentors,
                judges: judges, 
                speakers: speakers
            }
        },
        revalidate: configs.REVALIDATE_TIME,
    }
}