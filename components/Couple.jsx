import Image from "next/image";
const Couple = () => {

    return (
        <div className="p-5 bg-cultured">
            <div className="w-full coupleWrapper flex justify-around items-start flex-col lg:flex-row">
                <div className="maleWrapper mb-10 lg:mb-0">
                    <div className="w-[88vw] h-[88vw] lg:w-[24vw] lg:h-[24vw] mb-4 flex items-start relative flex-col-reverse">
                        <Image src="/img/square-male.png"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-full"
                        alt=""/>
                    </div>
                    <div className="couple-info text-center z-10 text-spanish-gray lg:w-[24vw]">
                        <p className="text-8xl lg:text-8xl font-great-vibes mb-5 text-maximum-yellow-red">Rakka</p>
                        <p className="text-xl font-noto-sans">Rakka Toar Sadewa Wibisono, S.Kom.</p>
                        <p className="text-xl font-noto-sans">Putra pertama</p>
                        <p className="text-xl font-noto-sans">Ennol Wibisono dan Diana Runtunuwu</p>
                    </div>
                </div>
                <div className="womanWrapper">
                    <div className="w-[88vw] h-[88vw] lg:w-[24vw] lg:h-[24vw] mb-4 flex items-start relative flex-col-reverse">
                        <Image src="/img/square-male.png"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-tl-[50%] rounded-br-[50%]"
                        alt=""/>
                    </div>
                    <div className="couple-info text-center z-10 text-spanish-gray lg:w-[24vw]">
                    <p className="text-8xl lg:text-8xl font-great-vibes mb-5 text-maximum-yellow-red">Mayo</p>
                        <p className="text-xl font-noto-sans">Yashinta Mayowi, S.Sos.</p>
                        <p className="text-xl font-noto-sans">Putri pertama</p>
                        <p className="text-xl font-noto-sans">Imam Hadori, S.H dan Tri Meiwati Haryoto, S.H</p>
                    </div>
                </div>
                {/* <div className="womanWrapper">
                    <div className="w-full h-[124vw] lg:h-[24vw] mb-4 flex items-start relative flex-col-reverse">
                        <Image src="/img/bordered-male.png"
                        layout="fill"
                        objectFit="contain"
                        alt=""/>
                    </div>
                    <div className="couple-info text-center z-10 text-spanish-gray">
                        <p className="text-8xl lg:text-8xl font-great-vibes mb-5 text-maximum-yellow-red">Mayo</p>
                        <p className="text-xl font-noto-sans">Yashinta Mayowi, S.Sos.</p>
                        <p className="text-xl font-noto-sans">Putri pertama</p>
                        <p className="text-xl font-noto-sans">Imam Hadori, S.H dan Tri Meiwati Haryoto, S.H</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Couple;
