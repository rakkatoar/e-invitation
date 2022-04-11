import Image from "next/image";
import { motion } from "framer-motion";
const Prokes = () => {

    return (
        <div className="lg:px-[10vw] lg:py-[5vw] p-5 bg-cultured">
					<div className="w-full relative flex justify-center h-[30vh] lg:h-[50vh] lg:px-16 lg:pt-16">
						<motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.2,
						ease: "linear",
				}} className="w-1/2 lg:w-1/3 relative flex flex-col-reverse items-center m-4">
							<Image src="/img/prokes-1.png"
												layout="fill"
                        objectFit="contain"
												alt=""/>
												<p className="bg-cultured font-noto-sans z-10 px-6 py-2 rounded-tl-full rounded-br-full text-center border-[#044655] border-[3.5px]">Pakai Masker</p>
						</motion.div>
						<motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.4,
						ease: "linear",
				}} className="w-1/2 lg:w-1/3 relative flex flex-col-reverse items-center m-4">
							<Image src="/img/prokes-2.png"
												layout="fill"
                        objectFit="contain"
												alt=""/>
												<p className="bg-cultured font-noto-sans z-10 px-6 py-2 rounded-tl-full rounded-br-full text-center border-[#044655] border-[3.5px]">Cuci Tangan</p>
						</motion.div>
						<motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.6,
						ease: "linear",
				}} className="w-1/2 lg:w-1/3 relative lg:flex flex-col-reverse items-center m-4 hidden">
							<Image src="/img/prokes-3.png"
												layout="fill"
                        objectFit="contain"
												alt=""/>
												<p className="bg-cultured font-noto-sans z-10 px-6 py-2 rounded-tl-full rounded-br-full text-center border-[#044655] border-[3.5px]">Jaga Jarak</p>
						</motion.div>
					</div>
					<div className="w-full flex justify-center lg:hidden h-[20vh]">
						<motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.6,
						ease: "linear",
				}} className="w-full flex relative flex-col-reverse items-center m-4">
							<Image src="/img/prokes-3.png"
												layout="fill"
                        objectFit="contain"
												alt=""/>
												<p className="bg-cultured font-noto-sans z-10 px-6 py-2 rounded-tl-full rounded-br-full text-center border-[#044655] border-[3.5px]">Jaga Jarak</p>
						</motion.div>
					</div>
					<motion.p
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.2,
						ease: "linear",
				}} className="text-center font-noto-sans">Mari saling menjaga kesehatan dengan mengikuti protokol kesehatan sesuai anjuran pemerintah untuk mengurangi penyebaran Covid-19</motion.p>
        </div>
    );
};

export default Prokes;
