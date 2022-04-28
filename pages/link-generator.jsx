import { useState } from "react";
const LinkGenerator = () => {
	const [sesi, setSesi] = useState('');
	const [selectedSesi, setSelectedSesi] = useState('');
	const [name, setName] = useState('');
	const [result, setResult] = useState('');

	function generate() {
		let string = 'rakkatoar.com/mayo/';
		string += sesi;
		string += "&";
		const spacesReplaced = name.replaceAll(' ', '%20');
		string += spacesReplaced;

		if(sesi == 1){
			setSelectedSesi('Sesi  I, pukul : 18.00 - 19.30  WIB');
		} else if(sesi == 2) {
			setSelectedSesi('Sesi II, pukul : 19.30 - 21.00  WIB');
		} else {
			setSelectedSesi('Sesi II, pukul : 19.30 - 21.00  WIB');
		}
		setResult(string);
	}
    return (
        <div className="px-10 py-20 bg-cultured flex justify-center">
					<div className="w-[50vw]">
						Sesi
						<input className="w-full" type="text" placeholder="sesi" onChange={e => { setSesi(e.currentTarget.value); }} onKeyUp={() => {generate()}}/>
						Nama Tamu
						<input className="w-full" type="text" placeholder="nama" onChange={e => { setName(e.currentTarget.value); }} onKeyUp={() => {generate()}}/>
						<button onClick={() => {navigator.clipboard.writeText(name)}} className="border p-2 bg-[green] text-[white]">Copy</button>
						<br/>
						Hasil
						<input className="w-full" type="text" placeholder="sesi" value={selectedSesi}/>
						<button onClick={() => {navigator.clipboard.writeText(selectedSesi)}} className="border p-2 bg-[green] text-[white]">Copy</button>
						<br/>
						<br/>
						<input className="w-full" type="text" placeholder="result" value={result}/>
						<button onClick={() => {navigator.clipboard.writeText(result)}} className="border p-2 bg-[green] text-[white] mr-5">Copy</button>
						<a href={`https://${result}`} target={"_blank"} rel={"noreferrer"}><button className="border p-2 bg-charcoal text-[white]">Test</button></a>
					</div>
        </div>
    );
};

export default LinkGenerator;
