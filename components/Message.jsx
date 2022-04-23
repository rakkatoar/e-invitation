import Image from "next/image";
import { motion } from "framer-motion";
const Message = () => {

    return (
        <div className="px-10 py-5 bg-cultured">
					{/* <motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.2,
						ease: "linear",
				}} className="w-full relative flex justify-center mb-8">
					<Image src="/img/flower.png"
                    width="230"
										height="180"
                    alt=""/>
					</motion.div> */}
					<motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.2,
						ease: "linear",
				}} className="font-noto-sans text-maximum-yellow-red w-full text-center px-5 lg:px-20">
					<p className="text-xl italic">&quot;Dan di antara tanda-tanda kekuasaan-Nya adalah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan hati dan dijadikan-Nya kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kekuasaan-Nya bagi orang-orang yang berfikir.&quot;</p>
					<p className="text-2xl">(QS. Ar-Rum: 21)</p>
					</motion.div>
        </div>
    );
};

export default Message;
