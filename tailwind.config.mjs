// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			zIndex: {
				'0': 0,
				'10': 10,
				'50': 50,
				'1000': 1000,
				'9999': 9999,
			},
			spacing: {
				'100': '25rem',
			},
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
			},
			fontSize: {
				xxs: ['0.625rem', { lineHeight: '1rem' }], // 10px con un line-height de 16px
			},
			screens: {
				'sm': { 'max': '639px' },
				'md': '640px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			},
			typography: {
				DEFAULT: {
					css: {
						hyphens: 'auto',
					},
				},
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				slideIn: {
					'0%': { opacity: '0', transform: 'translateX(100px)' }, // Desliza desde la derecha
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-out forwards',
				slideIn: 'slideIn 0.8s ease-out forwards',
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
		function ({ addBase }) {
			addBase({
				'*': {
					position: 'static',
					zIndex: 'auto',
				},
			});
		},
	],
};
