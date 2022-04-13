import Head from 'next/head'
import MentorSection from "../src/components/speakers/speakers"
import airtableBase from '../src/utils/airtable'
import configs from '../src/config/config'
import airtableConstants from '../src/constants/airtableConstants'

export default function Speakers({mentors}){
    return(
            <>
            <Head>
            <title>Mentors and Judges | CrossKnot Hacks</title>
            </Head>
            <MentorSection speakers={mentors}/>
            </>
    )
}

export async function getStaticProps(){

    const data = await airtableBase(airtableConstants.SPEAKERSJUDGES_TABLE).select({maxRecords: 100,}).all()
    console.log("data ", data);
    let mentors = []
    data.forEach(mentor => {
        mentors.push(mentor.fields)
    })

    return {
        props: {
            mentors: mentors
        },
        revalidate: configs.REVALIDATE_TIME,
    }
}