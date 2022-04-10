import Image from "next/image";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
const Music = () => {
	const [playing, setPlaying] = useState(false);
	const opts = {
	height: '390',
	width: '640',
	playerVars: {
		autoPlay: 1,
		mute: 0,
		// loop:1
	},
};
	let player;
	const _onReady = (event) =>  {
		event.target.seekTo(1, 'seconds');
		event.target.playVideo();
		setPlaying(true);
  }

	const setPlay = (event) =>  {
		player = event.target;
		setPlaying(true);
		// player.playVideo();
  }

	const setPause = (event) =>  {
		player = event.target;
		setPlaying(false);
		// player.pauseVideo();
  }

	
	// const setPlayer = (event) =>  {
	// 	player = event.target;
  // }
	const toogleVideo = () =>  {
		if(player){
			if(playing){
				// setPlaying(false);
				player.pauseVideo();
			} else {
				// setPlaying(true);
				player.playVideo();
			}
		}
  }

  return (
        <div className="">
					<div className="bg-cultured fixed bottom-5 left-5 rounded-full border-2 p-3 z-20">
						<div className="relative">
							{playing &&  <button onClick={toogleVideo} className="delay-1000"><Image
													src="/img/pause-icon.png"
													width="20"
													height="20"
													alt=""
											/></button>}
							{!playing &&  <button onClick={toogleVideo} className="delay-1000"><Image
													src="/img/play-icon.png"
													width="20"
													height="20"
													alt=""
											/></button>}
						</div>
					</div>
					<div className="hidden">
						{/* <YouTube videoId="1ieSEOX5OEE" opts={opts} onReady={_onReady} onPlay={setPlayer} onPause={setPlayer}  /> */}
						<YouTube videoId="1ieSEOX5OEE" opts={opts} onReady={_onReady} onEnded={setPlay} onPlay={setPlay} onPause={setPause}  />
					</div>
        </div>
    );
};

export default Music;
