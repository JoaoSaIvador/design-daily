/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			boxShadow: {
				1: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
			},
			colors: {
				dark: '#181b22',
				light: '#4BA1A2',
				secondary: '#C3B9AD',
				fontColor: '#e2e1e1',
			},
		},
	},
	plugins: [],
};
