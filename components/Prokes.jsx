import Image from "next/image";
import { motion } from "framer-motion";
const Prokes = () => {

    return (
        <div className="lg:px-10 lg:py-5 p-5 bg-cultured">
					<div className="w-full relative flex justify-center h-[30vh] lg:h-[50vh] lg:px-[10vw] lg:py-[5vw]">
						<div className="w-1/2 lg:w-1/3 relative flex flex-col-reverse items-center m-4 ">
							<Image src="/img/prokes-1.png"
												layout="fill"
                        objectFit="contain"
												alt=""/>
												<p className="bg-cultured z-10 px-6 py-2 rounded-tl-full rounded-br-full text-center border-[#044655] border-[3.5px]">Pakai Masker</p>
						</div>
						<div className="w-1/2 lg:w-1/3 relative flex flex-col-reverse items-center m-4">
							<Image src="/img/prokes-2.png"
												layout="fill"
                        objectFit="contain"
												alt=""/>
												<p className="bg-cultured z-10 px-6 py-2 rounded-tl-full rounded-br-full text-center border-[#044655] border-[3.5px]">Cuci Tangan</p>
						</div>
						<div className="w-1/2 lg:w-1/3 relative lg:flex flex-col-reverse items-center m-4 hidden">
							<Image src="/img/prokes-3.png"
												layout="fill"
                        objectFit="contain"
												alt=""/>
												<p className="bg-cultured z-10 px-6 py-2 rounded-tl-full rounded-br-full text-center border-[#044655] border-[3.5px]">Jaga Jarak</p>
						</div>
					</div>
					<div className="w-full flex justify-center lg:hidden h-[20vh]">
						<div className="w-full flex relative flex-col-reverse items-center m-4">
							<Image src="/img/prokes-3.png"
												layout="fill"
                        objectFit="contain"
												alt=""/>
												<p className="bg-cultured z-10 px-6 py-2 rounded-tl-full rounded-br-full text-center border-[#044655] border-[3.5px]">Jaga Jarak</p>
						</div>
					</div>
        </div>
    );
};

export default Prokes;
