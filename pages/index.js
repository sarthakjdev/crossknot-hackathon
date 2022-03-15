import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AboutSection from '../src/components/about/about'
import HeroSection from '../src/components/hero/hero';

export default function Home() {

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

       </main>
       </div>
  )
}
