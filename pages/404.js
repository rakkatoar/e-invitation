import Link from 'next/link'
import Image from "next/image";
export default function Custom404() {
  return <div className='bg-cultured w-full h-[calc(100vh-44px)] flex justify-center items-center flex-col'>
		<Image src="/img/404.png"
					width="300"
					height="300"
					alt=""/>
	<Link href="/guest/tamu">
		<a className='text-xl rounded-full border-2 py-2 px-4 mt-5'>
			Beranda
		</a>
	</Link>
	</div>
}