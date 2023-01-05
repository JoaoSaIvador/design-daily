import PopupTitle from './PopupTitle';

const sections = [
	'Ringtone',
	'Volume',
	'Vibrate On Silence',
	'Vibrate When Calling',
	'Screen Lock Sound',
	'Dial Pad Tone',
];

function Volume() {
	return (
		<div className="flex flex-col p-6 mb-6">
			<h1 className="text-fontColor text-xl font-medium mb-6">Volume</h1>
			{sections.map(section => (
				<PopupTitle title={section} />
			))}
		</div>
	);
}

export default Volume;
