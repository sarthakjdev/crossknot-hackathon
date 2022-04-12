import Head from 'next/head'
import EventSection from "../src/components/events/events"
import configs from '../src/config/config'
import airtableConstants from '../src/constants/airtableConstants'
import airtableBase from '../src/utils/airtable'

export default function Events ({events}){
    return(
            <>
            <Head>
            <title>Events | CrossKnot Hacks</title>
            </Head>
            <EventSection events={events} />
            </>
    )
}

export async function getStaticProps(){

    const data = await airtableBase(airtableConstants.EVENT_TABLE).select({maxRecords: 100,}).all()
    let events = [];
    data.forEach(event => {
        events.push(event.fields)
    });
    return {
        props: {
            events: events
        },
        revalidate: configs.REVALIDATE_TIME,
    }
}