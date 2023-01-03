import AboutMeSection from './AboutMeSection';
import SkillsSection from './SkillsSection';

function ProfileDetails() {
	return (
		<div className="flex flex-row m-10 my-6 justify-between">
			<AboutMeSection />
			<SkillsSection />
		</div>
	);
}

export default ProfileDetails;
