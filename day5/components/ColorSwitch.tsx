type ColorSwitchProps = {
	checked?: boolean;
};

function ColorSwitch({ checked = false }: ColorSwitchProps) {
	return (
		<label className="relative inline-flex items-center cursor-pointer mr-4">
			<input
				type="checkbox"
				value=""
				className="sr-only peer"
				disabled
				checked={checked}
			/>
			<div className="w-14 h-6 shadow-1 bg-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-8 peer-checked:after:bg-[#eab001] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
		</label>
	);
}

export default ColorSwitch;
