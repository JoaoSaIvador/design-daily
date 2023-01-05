type BorderSwitchProps = {
	checked: boolean;
};

function BorderSwitch({ checked }: BorderSwitchProps) {
	return (
		<label className="relative inline-flex items-center cursor-pointer mr-4">
			<input
				type="checkbox"
				value=""
				className="sr-only peer"
				checked={checked}
				disabled
			/>
			<div className="w-12 h-5 shadow-1 bg-dark ring-2 ring-light peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[26px] peer-checked:after:bg-fontColor after:content-[''] after:absolute after:top-[4px] after:left-[5px] after:bg-white after:rounded-full after:h-[16px] after:w-[16px] after:transition-all"></div>
		</label>
	);
}

export default BorderSwitch;
