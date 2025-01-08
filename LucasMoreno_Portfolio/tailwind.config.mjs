// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				'100': '25rem',
			},
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities(
				{
					'.scrollbar-hide::-webkit-scrollbar': {
						display: 'none',
					},
					'.scrollbar-hide': {
						'-ms-overflow-style': 'none', /* Para Internet Explorer 10+ */
						'scrollbar-width': 'none', /* Para Firefox */
					},
				},
				['responsive', 'hover']
			)
		},
	],
};
