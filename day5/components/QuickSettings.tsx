import ColorSwitch from './ColorSwitch';

function QuickSettings() {
	return (
		<div className="mt-8 p-8 mb-10">
			<h2 className="text-fontColor ml-4 mb-6 text-lg">Settings</h2>
			<div className="flex flex-row justify-between items-center my-6">
				<span className="font-light text-secondary">Airplane mode</span>
				<ColorSwitch />
			</div>
			<div className="flex flex-row justify-between items-center my-6">
				<span className="font-light text-secondary">WI-FI</span>
				<ColorSwitch checked />
			</div>
			<div className="flex flex-row justify-between items-center my-6">
				<span className="font-light text-secondary">Bluetooth</span>
				<ColorSwitch />
			</div>
			<div className="flex flex-row justify-between items-center my-6">
				<span className="font-light text-secondary">Notifications</span>
				<ColorSwitch checked />
			</div>
		</div>
	);
}

export default QuickSettings;
