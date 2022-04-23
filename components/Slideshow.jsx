import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Prokes from '../components/Prokes'
const Slideshow = () => {
    const [showingImage1, setShowingImage1] = useState("/img/story-1-1.png");
    const [showingImage2, setShowingImage2] = useState("/img/story-2-1.png");
    const [showingImage3, setShowingImage3] = useState("/img/story-3-1.png");

    useEffect(() => {
        const story1 = [
            "/img/story-1-1.png",
            "/img/story-1-2.png",
            "/img/story-1-3.png",
        ];
        const story2 = [
            "/img/story-2-1.png",
            "/img/story-2-2.png",
            "/img/story-2-3.png",
        ];
        const story3 = [
            "/img/story-3-1.png",
            "/img/story-3-2.png",
            "/img/story-3-3.png",
        ];
        let nomor = 0;
        const interval = setInterval(() => {
            if (nomor <= 1) {
                nomor++;
                setShowingImage1(story1[nomor]);
                setShowingImage2(story2[nomor]);
                setShowingImage3(story3[nomor]);
            } else {
                nomor = 0;
                setShowingImage1(story1[nomor]);
                setShowingImage2(story2[nomor]);
                setShowingImage3(story3[nomor]);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="w-full py-5 lg:px-10 bg-cultured">
            <div className="flex flex-col lg:flex-row">
                <motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.2,
						ease: "linear",
				}} className="w-full lg:w-1/2 lg:h-[50vh] overflow-hidden py-5 lg:pr-5 lg:pb-5 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ scale: [0.95, 1.005, 1] }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: .2,
                            ease: "linear",
                        }}
                        className="w-full h-full px-5 relative flex justify-center items-center"
                    >
                        <div>
                            <p className="text-xl italic">&quot;Dan di antara tanda-tanda kekuasaan-Nya adalah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan hati dan dijadikan-Nya kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kekuasaan-Nya bagi orang-orang yang berfikir.&quot;</p>
                            <p className="text-2xl text-maximum-yellow-red">(QS. Ar-Rum: 21)</p>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.2,
						ease: "linear",
				}} className="w-full h-[25vh] lg:w-1/2 lg:h-[50vh] overflow-hidden order-1 lg:order-2">
                    <motion.div
                        animate={{
                            scale: [1, 1.03],
                        }}
                        transition={{
                            duration: 5,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="w-full h-full relative brightness-80"
                    >
                        <Image
                            src={showingImage1}
                            layout="fill"
                            objectFit="cover"
                            alt=""
                        />
                    </motion.div>
                </motion.div>
            </div>
            <div className="flex flex-col lg:flex-row">
                <motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.2,
						ease: "linear",
				}} className="w-full h-[25vh] lg:w-1/2 lg:h-[50vh] overflow-hidden order-1 lg:order-1">
                    <motion.div
                        animate={{
                            scale: [1, 1.03],
                        }}
                        transition={{
                            duration: 5,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="w-full h-full relative brightness-80"
                    >
                        <Image
                            src={showingImage2}
                            layout="fill"
                            objectFit="cover"
                            alt=""
                        />
                    </motion.div>
                </motion.div>
                <motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.2,
						ease: "linear",
				}} className="w-full lg:w-1/2 lg:h-[50vh] overflow-hidden py-5 lg:pl-5 lg:pb-5 order-2 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ scale: [0.95, 1.005, 1] }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: "linear",
                        }}
                        className="w-full h-full px-5 relative flex justify-center items-center"
                    >
                        <Prokes/>
                    </motion.div>
                </motion.div>
            </div>
            <div className="flex flex-col lg:flex-row">
                <motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.2,
						ease: "linear",
				}} className="w-full lg:w-1/2 lg:h-[50vh] overflow-hidden py-5 lg:pr-5 lg:pb-5 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ scale: [0.95, 1.005, 1] }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: "linear",
                        }}
                        className="w-full h-full px-5 relative flex justify-center items-center"
                    >
                        <div className="text-center text-maximum-yellow-red">
                            <p className="text-xl italic font-noto-sans mb-5">With Love,</p>
                            <p className="font-charm text-5xl">Rakka &#38; Mayo</p>
                        </div>
                        {/* <p className="font-noto-sans">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugit nostrum, soluta saepe aliquam voluptatum
                            repellat cupiditate dolore iusto similique inventore
                            distinctio deserunt autem modi quod fuga officia
                            harum sint pariatur.
                        </p> */}
                    </motion.div>
                </motion.div>
                <motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.2,
						ease: "linear",
				}} className="w-full h-[25vh] lg:w-1/2 lg:h-[50vh] overflow-hidden order-1 lg:order-2">
                    <motion.div
                        animate={{
                            scale: [1, 1.03],
                        }}
                        transition={{
                            duration: 5,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="w-full h-full relative brightness-80"
                    >
                        <Image
                            src={showingImage3}
                            layout="fill"
                            objectFit="cover"
                            alt=""
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Slideshow;
