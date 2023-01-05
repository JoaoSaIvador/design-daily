import CustomButton from '../components/CustomButton';
import DisplayAndBrightness from '../components/DisplayAndBrightness';
import Volume from '../components/Volume';

function generalSettings() {
	return (
		<div className="w-[60%] flex flex-col">
			<DisplayAndBrightness />
			<Volume />
			<div className="flex justify-around p-4">
				<CustomButton title="Save" />
				<CustomButton title="Cancel" />
			</div>
		</div>
	);
}

export default generalSettings;
