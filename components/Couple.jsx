import Image from "next/image";
import { motion } from "framer-motion";
const Couple = () => {

    return (
        <div className="p-5 bg-cultured">
            <style jsx>
                {`
                    .boxShadow {
                        box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
                            0px 8px 13px rgba(0, 0, 0, 0.1),
                            0px 18px 23px rgba(0, 0, 0, 0.1);
                    }
                `}
            </style>
            <div className="w-full coupleWrapper flex justify-around items-center flex-col lg:flex-row rounded-lg border border-spanish-gray p-5 boxShadow ">
                <div className="maleWrapper mb-10 lg:mb-0 flex flex-col items-center">
                    <motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.2,
						ease: "linear",
				}}  className="w-[35vw] h-[35vw] lg:w-[24vw] lg:h-[24vw] mb-4 flex items-start relative flex-col-reverse">
                        <Image src="/img/rakka.png"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-full"
                        alt=""/>
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
				}}  className="couple-info text-center z-10 text-spanish-gray lg:w-[24vw]">
                        <p className="text-4xl font-corinthia mb-5 text-maximum-yellow-red">Rakka</p>
                        <p className="text-base lg:text-xl font-montserrat font-bold">Rakka Toar Sadewa Wibisono, S.Kom.</p>
                        <p className="text-sm lg:text-lg font-montserrat">Putra pertama</p>
                        <p className="text-sm lg:text-lg font-montserrat">Ennol Wibisono dan Diana Runtunuwu</p>
                    </motion.div>
                </div>
                <div className="womanWrapper flex flex-col items-center">
                    <motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.2,
						ease: "linear",
				}}  className="w-[35vw] h-[35vw] lg:w-[24vw] lg:h-[24vw] mb-4 flex items-start relative flex-col-reverse">
                        <Image src="/img/mayo.png"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-full"
                        alt=""/>
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
				}}  className="couple-info text-center z-10 text-spanish-gray lg:w-[24vw]">
                        <p className="text-4xl font-corinthia mb-5 text-maximum-yellow-red">Mayo</p>
                        <p className="text-base lg:text-xl font-montserrat font-bold">Yashinta Mayowi, S.Sos.</p>
                        <p className="text-sm lg:text-lg font-montserrat">Putri pertama</p>
                        <p className="text-sm lg:text-lg font-montserrat">Imam Hadori, S.H dan Tri Meiwati Haryoto, S.H</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Couple;
