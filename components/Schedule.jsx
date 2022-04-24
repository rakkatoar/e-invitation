import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Schedule = () => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	useEffect(()=>{
		initializeClock();
	},[])
	const endtime = "2022-05-07"
	const getTimeRemaining = (endtime) => {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const days = Math.floor(total / (1000 * 60 * 60 * 24));
		
		return {
			total,
			days,
			hours,
			minutes,
			seconds
		};
	}
	const initializeClock = () => {
		updateClock();
		setInterval(updateClock, 1000);
	}

	const updateClock = () => {
		const t = getTimeRemaining(endtime);
		setDays(t.days);
		setHours(t.hours);
		setMinutes(t.minutes);
		setSeconds(t.seconds);
		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}
	return (
		<div className="relative p-5 bg-cultured flex justify-between flex-col">
			<style jsx>
			{`
				.boxShadow {
					box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
							0px 8px 13px rgba(0, 0, 0, 0.1),
							0px 18px 23px rgba(0, 0, 0, 0.1);
			}
			`}
			</style>
			<motion.div
					initial={{ opacity: 0 }}
					animate={{ scale:[.95,1.005,1] }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay:.2,
						ease: "linear",
				}}  className="wrapper relative w-full h-full flex items-center justify-center mb-5">
				<div className="bg-charcoal rounded-xl w-full lg:w-2/5 boxShadow">
					<div className="text-center">
						<div className="p-8">
							<p className="text-4xl font-corinthia text-maximum-yellow-red">Akad</p>
							<p className="text-base lg:text-xl text-cultured">Kamis, 5 / 5 / 22</p>
							<p className="text-base lg:text-xl text-cultured">Masjid Roudhotul Muchlisin</p>
						</div>
					</div>
				</div>
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
				}}  className="wrapper relative w-full h-full flex items-center justify-center">
				<div className="bg-charcoal rounded-xl w-full lg:w-2/5 boxShadow">
						<div className="p-8 flex items-center flex-col text-center">
							<p className="text-4xl font-corinthia mb-2 text-maximum-yellow-red">Resepsi</p>
							<p className="text-base lg:text-xl text-cultured">Sabtu, 7 / 5 / 22</p>
							<p className="text-base lg:text-xl text-cultured">19.30 - 21.00</p>
							<p className="text-base lg:text-xl text-cultured">{days < 10 ? "0"+days+" Hari : " : +days+" Hari : "}{hours < 10 ? "0"+hours+" Jam : " : +hours+" Jam : "}{minutes < 10 ? "0"+minutes+" Menit : " : +minutes+" Menit : "}{seconds < 10 ? "0"+seconds+" Detik" : +seconds+" Detik"}</p>
							<p className="text-base lg:text-xl mb-4 text-cultured">Gedung Serbaguna Soetrisno Widjaja</p>
							<a href="https://maps.app.goo.gl/q7r7Z6UhHpeNNsPXA" target="_blank" rel="noreferrer"><button className="text-cultured text-base lg:text-xl rounded-full border-2 py-2 px-4"><Image
                    src="/img/map-icon.png"
                    width="16"
										height="16"
                    alt=""
                /> Buka Map</button></a>
						</div>
				</div>
			</motion.div>
		</div>
	)
}

export default Schedule