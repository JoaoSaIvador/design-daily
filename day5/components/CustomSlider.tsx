type CustomSlideProps = {
	value: number;
};

function CustomSlider({ value }: CustomSlideProps) {
	return (
		<input
			type="range"
			min="0"
			max="10"
			value={value}
			className="accent-light text-black"
			readOnly
		/>
	);
}

export default CustomSlider;
