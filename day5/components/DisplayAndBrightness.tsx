import BorderSwitch from './BorderSwitch';
import CustomSlider from './CustomSlider';
import PopupTitle from './PopupTitle';

function DisplayAndBrightness() {
	return (
		<div className="flex flex-col p-6">
			<h1 className="text-fontColor text-xl font-medium mb-6">
				Display & Brightness
			</h1>
			<div className="flex justify-between p-4">
				<span className="font-light text-secondary">Brightness</span>
				<CustomSlider value={5} />
			</div>
			<div className="flex px-4 py-3">
				<span className="font-light text-secondary mr-4">Auto Brightness</span>
				<BorderSwitch checked />
			</div>
			<PopupTitle title="Text Style" />
			<div className="flex px-4 py-3">
				<span className="font-light text-secondary mr-16">Bold Text</span>
				<BorderSwitch checked />
			</div>
		</div>
	);
}

export default DisplayAndBrightness;
