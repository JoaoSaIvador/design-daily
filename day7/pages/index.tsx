import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faEllipsisVertical,
	faPause,
	faShuffle,
	faAnglesLeft,
	faAnglesRight,
	faInfinity,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
	return (
		<div className="h-screen bg-gradient-to-br from-[#7296b7] to-[#0c1017] flex justify-center items-center py-8">
			<div className="flex flex-col justify-center items-center shadow-1 rounded-3xl">
				<div className="flex flex-col p-4 bg-[#181d26] rounded-t-3xl">
					<div className="flex flex-row justify-between pb-10">
						<button className="rounded-full p-2 border-[0.5px] border-[#39659a] w-[30px] h-[30px] flex justify-center items-center">
							<FontAwesomeIcon
								icon={faChevronLeft}
								className="text-[#e2e2e2] text-sm"
							/>
						</button>
						<button className="rounded-full p-2 border-[0.5px] border-[#39659a] w-[30px] h-[30px] flex justify-center items-center">
							<FontAwesomeIcon
								icon={faEllipsisVertical}
								className="text-[#e2e2e2] text-sm"
							/>
						</button>
					</div>
					<div className="px-20 py-2 flex flex-col items-center">
						<Image
							src="/cover.webp"
							alt=""
							width={250}
							height={250}
							className="shadow-[0px_0px_25px_25px_rgba(0,0,0,0.5)]"
						/>
						<h2 className="text-[#e2e2e2] font-medium text-xl pt-4">
							Oblivion Soundtrack
						</h2>
						<span className="font-thin text-sm text-[#e2e2e2]">
							- M83 - Oblivion (ft - Susanne Sundfor)
						</span>
					</div>
				</div>
				<input
					type="range"
					min="0"
					max="100"
					value="70"
					className="w-full m-[-10px] z-10"
					readOnly
				/>
				<div className="bg-gradient-to-br from-[#1a2733] to-[#2e4153] w-full px-4 pb-4 rounded-b-3xl">
					<div className="flex flex-row justify-center items-center mt-4">
						<button className="rounded-full p-2 border-[0.5px] border-[#39659a] w-[40px] h-[40px] m-2 flex justify-center items-center shadow-[0px_5px_25px_1px_rgba(0,0,0,0.3)]">
							<FontAwesomeIcon
								icon={faShuffle}
								className="text-[#e2e2e2] text-sm"
							/>
						</button>
						<button className="rounded-full p-2 border-[0.5px] border-[#39659a] w-[40px] h-[40px] m-2 flex justify-center items-center shadow-[0px_5px_25px_1px_rgba(0,0,0,0.3)]">
							<FontAwesomeIcon
								icon={faAnglesLeft}
								className="text-[#e2e2e2] text-sm"
							/>
						</button>
						<button className="rounded-full p-2 border-[0.5px] border-[#39659a] w-[40px] h-[40px] m-2 flex justify-center items-center shadow-[0px_5px_25px_1px_rgba(0,0,0,0.3)]">
							<FontAwesomeIcon
								icon={faPause}
								className="text-[#e2e2e2] text-sm"
							/>
						</button>
						<button className="rounded-full p-2 border-[0.5px] border-[#39659a] w-[40px] h-[40px] m-2 flex justify-center items-center shadow-[0px_5px_25px_1px_rgba(0,0,0,0.3)]">
							<FontAwesomeIcon
								icon={faAnglesRight}
								className="text-[#e2e2e2] text-sm"
							/>
						</button>
						<button className="rounded-full p-2 border-[0.5px] border-[#39659a] w-[40px] h-[40px] m-2 flex justify-center items-center shadow-[0px_5px_25px_1px_rgba(0,0,0,0.3)]">
							<FontAwesomeIcon
								icon={faInfinity}
								className="text-[#e2e2e2] text-sm"
							/>
						</button>
					</div>
					<div className="max-h-[215px] overflow-y-scroll p-2">
						<div className="flex flex-row justify-between items-center p-2 m-2 text-[#cccccc] font-thin text-lg border-b-[2.5px] border-[#181d26] border-opacity-40">
							<span>Supercell</span>
							<span>05:13</span>
						</div>
						<div className="flex flex-row justify-between items-center p-2 m-2 text-[#cccccc] font-thin text-lg border-b-[2.5px] border-[#181d26] border-opacity-40">
							<span>Tech 49</span>
							<span>03:11</span>
						</div>
						<div className="flex flex-row justify-between items-center p-2 m-2 text-[#cccccc] font-thin text-lg border-b-[2.5px] border-[#181d26] border-opacity-40">
							<span>The Library</span>
							<span>04:24</span>
						</div>
						<div className="flex flex-row justify-between items-center p-2 m-2 text-[#cccccc] font-thin text-lg border-b-[2.5px] border-[#181d26] border-opacity-40">
							<span>Horatius</span>
							<span>03:55</span>
						</div>
						<div className="flex flex-row justify-between items-center p-2 m-2 text-[#cccccc] font-thin text-lg border-b-[2.5px] border-[#181d26] border-opacity-40">
							<span>Oblivion Soundtrack</span>
							<span>04:32</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
