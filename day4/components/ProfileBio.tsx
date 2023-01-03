import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function ProfileBio() {
	return (
		<div className="flex flex-col p-2 pr-32 border-r">
			<h1 className="font-bold text-xl italic">Joan Doe</h1>
			<span className="text-sm font-light text-gray-400 mt-[-5px] mb-1">
				- Photography
			</span>
			<span className="text-sm font-light font text-gray-400">
				<FontAwesomeIcon icon={faLocationDot} className="mr-2" />
				Timisoara, RO
			</span>
		</div>
	);
}

export default ProfileBio;
