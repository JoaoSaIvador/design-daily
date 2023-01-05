import Image from 'next/image';

export default function Home() {
	return (
		<div className="h-screen bg-black p-6">
			<Image src="/logo.png" alt="" width={100} height={100} />
			<div className="h-full flex flex-col items-center mt-20">
				<h1 className="text-[8rem] text-white font-extrabold">404 Error</h1>
				<div className="bg-white px-2 mt-[-1.5rem]">
					<p className="text-[5rem] font-extrabold">Page not found</p>
				</div>
				<p className="text-white my-8 text-2xl font-thin">
					Whatever you are trying
					<br /> to look for is not here...
				</p>
				<button className="py-3 px-12 border border-yellow-500 text-yellow-500 text-3xl font-thin">
					Back to my programs
				</button>
			</div>
		</div>
	);
}
