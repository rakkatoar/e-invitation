import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Prokes from '../components/Prokes'
const Slideshow = () => {
    const [showingImage1, setShowingImage1] = useState("/img/story-1-1.jpg");
    const [showingImage2, setShowingImage2] = useState("/img/story-2-1.jpg");
    const [showingImage3, setShowingImage3] = useState("/img/story-3-1.jpg");

    useEffect(() => {
        const story1 = [
            "/img/story-1-1.jpg",
            "/img/story-1-2.jpg",
            "/img/story-1-3.jpg",
        ];
        const story2 = [
            "/img/story-2-1.jpg",
            "/img/story-2-2.jpg",
            "/img/story-2-3.jpg",
        ];
        const story3 = [
            "/img/story-3-1.jpg",
            "/img/story-3-2.jpg",
            "/img/story-3-3.jpg",
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
                            <p className="text-base lg:text-xl italic">&quot;Dan di antara tanda-tanda kekuasaan-Nya adalah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan hati dan dijadikan-Nya kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kekuasaan-Nya bagi orang-orang yang berfikir.&quot;</p>
                            <p className="text-lg lg:text-2xl text-maximum-yellow-red">(QS. Ar-Rum: 21)</p>
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
				}} className="w-full h-[25vh] min-h-[360px] lg:w-1/2 lg:h-[50vh] overflow-hidden order-1 lg:order-2">
                    <motion.div
                        animate={{
                            scale: [1, 1, 1.01, 1.02, 1.03],
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
				}} className="w-full h-[25vh] min-h-[360px] lg:w-1/2 lg:h-[50vh] overflow-hidden order-1 lg:order-1">
                    <motion.div
                        animate={{
                            scale: [1, 1, 1.01, 1.02, 1.03],
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
                            <p className="text-base lg:text-xl italic font-montserrat mb-3">With Love,</p>
                            <p className="font-corinthia text-4xl">Rakka &#38; Mayo</p>
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
				}} className="w-full h-[25vh] min-h-[360px] lg:w-1/2 lg:h-[50vh] overflow-hidden order-1 lg:order-2">
                    <motion.div
                        animate={{
                            scale: [1, 1, 1.01, 1.02, 1.03],
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
