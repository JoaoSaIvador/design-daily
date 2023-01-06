import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
	return (
		<div className="h-screen bg-[#898A92] flex justify-center items-center py-8">
			<div className="flex flex-col p-2 bg-[#151d1f]">
				<div className="flex flex-row pb-8"></div>
				<div className="px-20 flex flex-col items-center">
					<Image
						src="/cover.webp"
						alt=""
						width={200}
						height={200}
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
		</div>
	);
}
