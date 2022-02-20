import Head from 'next/head'
import SpeakerSection from "../src/components/speakers/speakers"

export default function Speakers(){
    return(
            <>
            <Head>
            <title>Speakers and Judges | CrossKnot Hacks</title>
            </Head>
            <SpeakerSection/>
            </>
    )
}