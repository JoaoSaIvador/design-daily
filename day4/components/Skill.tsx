type SkillProps = {
	name: string;
	level: number;
};

function Skill({ name, level }: SkillProps) {
	return (
		<div className="flex flex-row items-center justify-end">
			<label id="volume" className="mr-2 font-light text-xs mb-2">
				{name}
			</label>
			<input
				type="range"
				id={name}
				min="0"
				max="10"
				value={level}
				className="accent-[#151515]"
				readOnly
			/>
		</div>
	);
}

export default Skill;
