import FollowButton from './FollowButton';
import ProfileBio from './ProfileBio';
import ProfileStats from './ProfileStats';

function ProfileBar() {
	return (
		<div className="flex flex-row ml-8 border-b">
			<ProfileBio />
			<ProfileStats />
			<FollowButton />
		</div>
	);
}

export default ProfileBar;
