import Head from 'next/head'
import SponsorsSection from "../src/components/sponsors/sponsors"
import airtableBase from '../src/utils/airtable'
import configs from '../src/config/config'
import airtableConstants from '../src/constants/airtableConstants'

export default function Sponsors({sponsors}){
    return(
            <>
            <Head>
            <title>Sponsors | CrossKnot Hacks</title>
            </Head>
            <SponsorsSection sponsors={sponsors} />
            </>
    )
}

export async function getStaticProps(){

    const data = await airtableBase(airtableConstants.SPONSORS_TABLE).select({maxRecords: 100,}).all()
    let sponsors = []
    data.forEach(sponsor => {
        sponsors.push(sponsor.fields)
    })

    return {
        props: {
            sponsors: sponsors
        },
        revalidate: configs.REVALIDATE_TIME,
    }
}