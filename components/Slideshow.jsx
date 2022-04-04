import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Slideshow = () => {
    const [showingImage, setShowingImage] = useState("/img/slider-1.jpg");

    useEffect(() => {
        const images = [
            "/img/slider-1.jpg",
            "/img/slider-2.jpg",
            "/img/slider-3.jpg",
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
        <div className="w-full h-screen px-10 bg-cultured">
					<div className="flex">
            <div className="w-1/2 h-[50vh] overflow-hidden p-5">
                <motion.div
                    initial={{ opacity: 0 }}
										animate={{ scale:[.95,1.005,1] }}
										whileInView={{ opacity: 1 }}
										viewport={{ once: true }}
										transition={{
											duration: 1,
											delay:.2,
											ease: "linear",
									}}
                    className="w-full h-full relative flex justify-center items-center"
                >
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nostrum, soluta saepe aliquam voluptatum repellat cupiditate dolore iusto similique inventore distinctio deserunt autem modi quod fuga officia harum sint pariatur.</p>
                </motion.div>
            </div>
            <div className="w-1/2 h-[50vh] overflow-hidden">
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
                        src={showingImage}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                    />
                </motion.div>
            </div>
					</div>
					<div className="flex">
            <div className="w-1/2 h-[50vh] overflow-hidden">
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
                        src={showingImage}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                    />
                </motion.div>
            </div>
            <div className="w-1/2 h-[50vh] overflow-hidden p-5">
                <motion.div
                    initial={{ opacity: 0 }}
										animate={{ scale:[.95,1.005,1] }}
										whileInView={{ opacity: 1 }}
										viewport={{ once: true }}
										transition={{
											duration: 1,
											delay:.2,
											ease: "linear",
									}}
                    className="w-full h-full relative flex justify-center items-center"
                >
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nostrum, soluta saepe aliquam voluptatum repellat cupiditate dolore iusto similique inventore distinctio deserunt autem modi quod fuga officia harum sint pariatur.</p>
                </motion.div>
            </div>
					</div>
					<div className="flex">
            <div className="w-1/2 h-[50vh] overflow-hidden p-5">
                <motion.div
                    initial={{ opacity: 0 }}
										animate={{ scale:[.95,1.005,1] }}
										whileInView={{ opacity: 1 }}
										viewport={{ once: true }}
										transition={{
											duration: 1,
											delay:.2,
											ease: "linear",
									}}
                    className="w-full h-full relative flex justify-center items-center"
                >
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nostrum, soluta saepe aliquam voluptatum repellat cupiditate dolore iusto similique inventore distinctio deserunt autem modi quod fuga officia harum sint pariatur.</p>
                </motion.div>
            </div>
            <div className="w-1/2 h-[50vh] overflow-hidden">
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
                        src={showingImage}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                    />
                </motion.div>
            </div>
					</div>
        </div>
    );
};

export default Slideshow;
