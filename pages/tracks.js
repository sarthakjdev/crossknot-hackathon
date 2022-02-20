import Head from 'next/head'
import TrackSection from "../src/components/tracks/tracks"

export default function Tracks(){
    return(
            <>
            <Head>
            <title>Tracks | CrossKnot Hacks</title>
            </Head>
            <TrackSection/>
            </>
    )
}