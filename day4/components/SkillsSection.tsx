import Skill from './Skill';

const dummyData = [
	{ name: 'Equipment', level: 9 },
	{ name: 'Editing', level: 7 },
	{ name: 'Marketing', level: 4 },
	{ name: 'Retouching', level: 9 },
];

function SkillsSection() {
	return (
		<div className="flex flex-col">
			<h2 className="font-bold text-lg ml-4 mb-2">Skills</h2>
			{dummyData.map(skill => (
				<Skill name={skill.name} level={skill.level} />
			))}
		</div>
	);
}

export default SkillsSection;
