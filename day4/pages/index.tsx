import PictureGallery from '../components/PictureGallery';
import ProfileDetails from '../components/ProfileDetails';
import ProfileBar from '../components/ProfileBar';

export default function Home() {
	return (
		<div className="w-screen bg-[#1F2532] py-16 flex justify-center">
			<div className="max-w-[1000px] bg-white pb-12 px-12 flex flex-col">
				<div className="flex flex-row mb-4">
					<img
						src="/profile-picture.jpg"
						alt=""
						className="w-[300px] h-[300px] object-cover object-bottom mt-[-20px] shadow-2"
					/>
					<div className="flex flex-col w-full">
						<ProfileBar />
						<ProfileDetails />
					</div>
				</div>
				<PictureGallery />
			</div>
		</div>
	);
}
