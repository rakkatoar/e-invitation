import { useRouter } from 'next/router'
import { Modal } from "react-responsive-modal";
import Head from 'next/head'
import Slider from '../../components/Slider'
import Message from '../../components/Message'
import Couple from '../../components/Couple'
import Schedule from '../../components/Schedule'
import Prokes from '../../components/Prokes'
import Slideshow from '../../components/Slideshow'
import Closing from '../../components/Closing'
import Music from '../../components/Music'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
const Guest = () => {
  const router = useRouter()
  const { name } = router.query
  const [open, setOpen] = useState(true);
  const onCloseModal = () => setOpen(false);
  const bg = {
    modal:{
      background:"#2C3A47",
      opacity:"1",
      borderRadius:"8px",
      // width:"20vw",
      // height:"20vw",
      alignItems:"scretch",
      flexDirection:"column"
    },
    overlay: {
      opacity:"0.9"
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Mayo &#38; Rakka Weeding</title>
        <meta name="description" content="Mayo &#38; Rakka Weeding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal open={open} onClose={onCloseModal} center showCloseIcon={false} styles={bg}>
        <p className="font-noto-sans text-xl mb-5 text-cultured">Kepada Yth.</p>
        <div>
          <h2 className="font-great-vibes text-center text-4xl text-maximum-yellow-red capitalize">{name != '' ? name : 'Tamu'}</h2>
          <p className="font-noto-sans text-center text-lg mb-5 text-cultured">Di Tempat</p>
        </div>
        <button onClick={onCloseModal} className="border-2 rounded-md p-2 w-full text-cultured">Lihat Undangan</button>
      </Modal>
      <Slider/>
      <Message/>
      <Couple/>
      <Schedule/>
      <Prokes/>
      <Slideshow/>
      <Closing/>
      <Music/>
    </div>
  );
}

export default Guest