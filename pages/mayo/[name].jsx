import { useRouter } from 'next/router'
import { Modal } from "react-responsive-modal";
import Head from 'next/head'
import Slider from '../../components/Slider'
import Couple from '../../components/Couple'
import Schedule from '../../components/Schedule'
import Slideshow from '../../components/Slideshow'
import Music from '../../components/Music'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
const Guest = () => {
  const router = useRouter();
  const { name } = router.query;
  let parts = name?.split("&");
  let sesi = '';
  let guest = '';
  if(parts){
    sesi = parts[0];
    guest = parts[1];
  }
  const [open, setOpen] = useState(true);
  const onCloseModal = () => setOpen(false);
  const bg = {
    modal:{
      background:"#2C3A47",
      opacity:"1",
      borderRadius:"8px",
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
        <title>Mayo &#38; Rakka Wedding</title>
        <meta name="description" content="Mayo &#38; Rakka Weeding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal open={open} onClose={onCloseModal} center showCloseIcon={false} styles={bg}>
        <p className="font-montserrat text-xl mb-5 text-cultured">Kepada Yth.</p>
        <div>
          <h2 className="font-corinthia text-center text-4xl text-maximum-yellow-red capitalize">{parts && guest != '' ? guest : 'Tamu'}</h2>
          <p className="font-montserrat text-center text-lg mb-5 text-cultured">Di Tempat</p>
        </div>
        <button onClick={onCloseModal} className="border-2 rounded-md p-2 w-full text-cultured">Lihat Undangan</button>
      </Modal>
      <Slider/>
      <Couple/>
      <Schedule dataParentToChild = {sesi}/>
      <Slideshow/>
      <Music/>
    </div>
  );
}

export default Guest