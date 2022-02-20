import Head from 'next/head'

import AboutSection from '../src/components/about/about'


export default function About(){
    return(
            <>
                <Head>
                <title>About | CrossKnot Hacks</title>
                </Head>
                <AboutSection />
            </>
    )
}