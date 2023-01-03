/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			boxShadow: {
				1: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
				2: '0px 3px 8px rgba(0, 0, 0, 0.4)',
			},
			gridTemplateColumns: {
				12: 'repeat(12, 1fr)',
			},
			gridTemplateRows: {
				12: 'repeat(12, 1fr)',
			},
			gridRow: {
				'span-7': 'span 7 / span 7',
				'span-8': 'span 8 / span 8',
			},
		},
	},
	plugins: [],
};
