import Head from 'next/head'
import SpeakerSection from "../src/components/speakers/speakers"
import airtableBase from '../src/utils/airtable'

export default function Speakers({speakers}){
    return(
            <>
            <Head>
            <title>Speakers and Judges | CrossKnot Hacks</title>
            </Head>
            <SpeakerSection speakers={speakers}/>
            </>
    )
}

export async function getStaticProps(){

    const data = await airtableBase('Speakers&Judges').select({maxRecords: 100,}).all()
    let speakers = []
    data.forEach(speaker => {
        speakers.push(speaker.fields)
    })

    return {
        props: {
            speakers: speakers
        },
        revalidate: 3600,
    }
}