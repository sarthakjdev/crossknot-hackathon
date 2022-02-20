import Head from 'next/head'

import PrizeSection from "../src/components/prizes/prizes"

export default function Prizes(){
    return(
        <>
        <Head>
        <title>Prizes | CrossKnot Hacks</title>
        </Head>
        <PrizeSection />
        </>
    )
}