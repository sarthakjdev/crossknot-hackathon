import Head from 'next/head'

import PrizeSection from "../src/components/prizes/prizes"
import airtableConstants from '../src/constants/airtableConstants'
import airtableBase from '../src/utils/airtable'
import configs from '../src/config/config'
export default function Prizes({prizes}){
    return(
        <>
        <Head>
        <title>Prizes | CrossKnot Hacks</title>
        </Head>
        <PrizeSection prizes={prizes}/>
        </>
    )
}

export async function getStaticProps(){

    const data = await airtableBase(airtableConstants.PRIZE_TABLE).select({maxRecords: 100,}).all()
    let prizes = []
    data.forEach(prize => {
        prize.fields.prizeDesc = prize.fields.prizeDesc.split('|')
        prizes.push(prize.fields)
    })
    
    // sorting the prize data
    prizes.sort((a ,b)=>{
        return a.id - b.id 
    })
    

    return {
        props: {
            prizes: prizes
        },
        revalidate: configs.REVALIDATE_TIME,
    }
}