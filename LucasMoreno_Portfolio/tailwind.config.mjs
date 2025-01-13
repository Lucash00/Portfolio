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
		screens: {
		  'sm': {'max': '639px'}, // Esto hace que sm sea para dispositivos con un ancho máximo de 639px
		  'md': '640px', // Puedes ajustar estos valores según sea necesario
		  'lg': '1024px',
		  'xl': '1280px',
		  '2xl': '1536px',
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
  