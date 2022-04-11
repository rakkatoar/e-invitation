import Image from "next/image";
import { motion } from "framer-motion";
const Closing = () => {

    return (
        <div className="px-10 py-20 bg-cultured">
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
					<p className="text-xl italic font-noto-sans mb-5">With Love,</p>
					<p className="font-charm text-5xl">Rakka &#38; Mayo</p>
					</motion.div>
        </div>
    );
};

export default Closing;
