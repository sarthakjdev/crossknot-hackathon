import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AboutSection from '../src/components/about/about'
import HeroSection from '../src/components/hero/hero';
import PrizeSection from "../src/components/prizes/prizes"
import airtableConstants from '../src/constants/airtableConstants'
import airtableBase from '../src/utils/airtable'
import configs from '../src/config/config'

export default function Home({prizes}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>CrossKnot Hacks</title>
        <meta name="description" content="a 36 hours long hackathon organised by crossknot community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

            {/* Hero section */}

            <HeroSection />
            <AboutSection />
            <PrizeSection prizes={prizes}/>
       </main>
       </div>
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
