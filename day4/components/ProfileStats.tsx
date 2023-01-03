import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faImage,
	faHeart,
	faUserCircle,
} from '@fortawesome/free-regular-svg-icons';

function ProfileStats() {
	return (
		<div className="lex flex flex-row p-4 border-r">
			<div className="flex flex-col justify-center mx-4">
				<FontAwesomeIcon icon={faImage} />
				<span className="font-bold">127</span>
			</div>
			<div className="flex flex-col justify-center mx-4">
				<FontAwesomeIcon icon={faHeart} />
				<span className="font-bold">354</span>
			</div>
			<div className="flex flex-col justify-center mx-4">
				<FontAwesomeIcon icon={faUserCircle} />
				<span className="font-bold">470</span>
			</div>
		</div>
	);
}

export default ProfileStats;
