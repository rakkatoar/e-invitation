import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Slider = () => {
    const [showingImage, setShowingImage] = useState("/img/slider-01.jpg");
    
    useEffect(() => {
        const images = [
            "/img/slider-01.jpg",
            "/img/slider-02.jpg",
            "/img/slider-03.jpg",
        ];
        let nomor = 0;
        const interval = setInterval(() => {
            if (nomor <= 1) {
                nomor++;
                setShowingImage(images[nomor]);
            } else {
                nomor = 0;
                setShowingImage(images[nomor]);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-screen flex items-center justify-center bg-cultured overflow-hidden">
            <style jsx>
                {`
                    .titleShadow {
                        text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
                            0px 8px 13px rgba(0, 0, 0, 0.1),
                            0px 18px 23px rgba(0, 0, 0, 0.1);
                    }
                `}
            </style>
            <motion.div
                animate={{
                    // y: [0, -10],
                    scale: [1, 1, 1.01, 1.02, 1.03]
                }}
                transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="w-full h-full relative brightness-80"
            >
                <Image
                    src={showingImage}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                />
            </motion.div>
            <motion.div className="w-full h-full absolute flex justify-center items-center py-[30vh] flex-col"
						initial={{ opacity: 0 }}
						animate={{ scale:[.95,1.005,1] }}
						whileInView={{ opacity: 1 }}
  					viewport={{ once: true }}
						transition={{
							duration: 1,
							delay:.2,
							ease: "linear",
					}}>
                <p className="titleShadow z-10 text-xl lg:text-4xl font-montserrat text-linen mb-4 lg:mb-10">
                    We are getting married
                </p>
                <p className="titleShadow z-10 text-3xl lg:text-8xl font-corinthia text-linen">
                    Mayo &#38; Rakka
                </p>
                <p className="titleShadow z-10 text-xl lg:text-4xl font-montserrat text-linen mt-4 lg:mt-10">
                    5 &#47; 5 &#47; 22
                </p>
            </motion.div>
        </div>
    );
};

export default Slider;
