import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
				.box {
					background-color: transparent;
					border-radius: 3px;
					color: #fff;
					position: absolute;
					left: 50%;
					transform: translate(-50%, -50%);
					transform-style: preserve-3d;
					perspective: 2000px;
					transition: 0.4s;
					text-align: center;
				}
				.box:before {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					background: transparent;
					border-top: 10px solid #EEC373;
					border-left: 10px solid #EEC373;
					box-sizing: border-box;
				}
				.box:after {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					border-bottom: 10px solid #EEC373;
					border-right: 10px solid #EEC373;
					box-sizing: border-box;
				}
				.box .text {
					position: absolute;
					top: 30px;
					left: -30px;
					width: calc(100% + 60px);
					background-color: #2C3A47;
					border-radius: 3px;
					transition: 0.4s;
				}
				.box .text div {
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%);
					text-align: center;
					width: 100%;
					line-height: 1.5;
					box-sizing: border-box;
				}
				.box:hover {
					transform: translate(-50%, -50%) rotateY(-20deg) skewY(3deg);
				}
				.box:hover .text {
					transform: rotateY(20deg) skewY(-3deg);
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
				<div className="bg-charcoal rounded-xl w-full lg:w-2/5">
					<div className="text-center">
						<div className="p-8">
							<p className="text-4xl font-charm text-maximum-yellow-red">Akad</p>
							<p className="text-xl lg:text-2xl text-cultured">Kamis, 5 / 5 / 22</p>
							<p className="text-xl lg:text-2xl text-cultured">Masjid Roudhotul Muchlisin</p>
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
				<div className="bg-charcoal rounded-xl w-full lg:w-2/5">
						<div className="p-8 flex items-center flex-col text-center">
							<p className="text-4xl font-charm mb-2 text-maximum-yellow-red">Resepsi</p>
							<p className="text-xl lg:text-2xl mb-2 text-cultured">Sabtu, 7 / 5 / 22</p>
							<p className="text-xl lg:text-2xl mb-2 text-cultured">19.30 - 21.00</p>
							<p className="text-xl lg:text-2xl mb-2 text-cultured">{days < 10 ? "0"+days+" Hari : " : +days+" Hari : "}{hours < 10 ? "0"+hours+" Jam : " : +hours+" Jam : "}{minutes < 10 ? "0"+minutes+" Menit : " : +minutes+" Menit : "}{seconds < 10 ? "0"+seconds+" Detik" : +seconds+" Detik"}</p>
							<p className="text-xl lg:text-2xl mb-4 text-cultured">Gedung Serbaguna Soetrisno Widjaja</p>
							<a href="https://maps.app.goo.gl/q7r7Z6UhHpeNNsPXA" target="_blank" rel="noreferrer"><button className="text-cultured lg:text-2xl rounded-full border-2 py-2 px-4">Buka Map</button></a>
						</div>
				</div>
			</motion.div>
		</div>
	)
}

export default Schedule