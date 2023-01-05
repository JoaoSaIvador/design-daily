import MenuItem from './MenuItem';

const menuItems = [
	'Software Update',
	'General Settings',
	'Apps',
	'Storage',
	'Data Usage',
	'Security',
	'Other Settings',
];

function Menu() {
	return (
		<div className="flex flex-col">
			{menuItems.map(item => (
				<MenuItem name={item} key={item} />
			))}
		</div>
	);
}

export default Menu;
