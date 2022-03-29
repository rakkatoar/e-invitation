import Head from 'next/head'
import Slider from '../components/Slider'
import Message from '../components/Message'
import Couple from '../components/Couple'
import Schedule from '../components/Schedule'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mayo &#38; Rakka Weeding</title>
        <meta name="description" content="Mayo & Rakka Weeding" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Noto+Sans&display=swap" rel="stylesheet"/>
      </Head>
      <Slider/>
      <Message/>
      <Couple/>
      <Schedule/>
    </div>
  )
}
