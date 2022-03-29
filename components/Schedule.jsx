import { useEffect, useState } from "react";

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
		<div className="relative p-5 bg-mint-cream flex justify-between h-[76vh] lg:h-[56vh] flex-col lg:flex-row">
			<style jsx>
			{`
				.box {
					background-color: transparent;
					border-radius: 3px;
					color: #fff;
					position: absolute;
					// top: 50%;
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
			<div className="wrapper relative w-full h-full flex items-center justify-center">
				<div className="box top-[64%] w-4/5 h-5/6 before:h-5/6 after:h-5/6 lg:before:h-4/5 lg:after:h-4/5">
					<div className="text h-3/5">
						<div className="px-8">
							<p className="text-4xl font-great-vibes">Akad</p>
							<p className="text-xl lg:text-2xl">Kamis, 5 / 5 / 22</p>
							<p className="text-xl lg:text-2xl">Masjid Roudhotul Muchlisin</p>
						</div>
					</div>
				</div>
			</div>
			<div className="wrapper relative w-full h-full flex items-center justify-center">
				<div className="box top-[46%] w-4/5 h-full lg:h-4/5 before:h-full after:h-full lg:before:h-[116%] lg:after:h-[116%]">
					<div className="text h-5/6 lg:h-[96%]">
						<div className="px-8 flex items-center flex-col">
							<p className="text-4xl font-great-vibes mb-2">Resepsi</p>
							<p className="text-xl lg:text-2xl mb-2">Sabtu, 7 / 5 / 22</p>
							<p className="text-xl lg:text-2xl mb-2">{days < 10 ? "0"+days+" Hari : " : +days+" Hari : "}{hours < 10 ? "0"+hours+" Jam : " : +hours+" Jam : "}{minutes < 10 ? "0"+minutes+" Menit : " : +minutes+" Menit : "}{seconds < 10 ? "0"+seconds+" Detik" : +seconds+" Detik"}</p>
							<p className="text-xl lg:text-2xl mb-2">Gedung Serbaguna Soetrisno Widjaja</p>
							<a href="https://maps.app.goo.gl/q7r7Z6UhHpeNNsPXA" target="_blank"><p className="lg:text-2xl rounded-full border-2 w-fit py-2 px-4">Buka Map</p></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Schedule