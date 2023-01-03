import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

function FollowButton() {
	return (
		<div className="flex justify-center items-center">
			<button className="ml-10 py-[6px] px-6 bg-[#ffbf00] text-white text-sm font-light">
				<FontAwesomeIcon icon={faUserPlus} className="mr-2" />
				Follow
			</button>
		</div>
	);
}

export default FollowButton;
