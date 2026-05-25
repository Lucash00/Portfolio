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
				logoWobble: {
					'0%, 22%, 100%': { transform: 'rotate(0deg)' },
					'5%': { transform: 'rotate(-3deg)' },
					'10%': { transform: 'rotate(3deg)' },
					'14%': { transform: 'rotate(-2deg)' },
					'18%': { transform: 'rotate(2deg)' },
				},
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-out forwards',
				slideIn: 'slideIn 0.8s ease-out forwards',
				logoWobble: 'logoWobble 2.75s ease-in-out infinite',
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
					'.card-title': {
						'color': '#111827',
						'transition': 'color 0.3s ease',
					},
					'.card-accent-bar': {
						'height': '0.25rem',
						'width': '100%',
						'flex-shrink': '0',
						'border-radius': '0.5rem 0.5rem 0 0',
						'background-image': 'linear-gradient(to right, #1d4ed8, #06b6d4, #3b82f6)',
						'opacity': '0.45',
						'transition': 'opacity 0.3s ease, filter 0.3s ease',
					},
					'.card-logo': {
						'transform-origin': 'center bottom',
					},
					'.card-logo-wrap': {
						'display': 'inline-flex',
						'align-items': 'center',
						'justify-content': 'center',
						'flex-shrink': '0',
						'transform-origin': 'center bottom',
						'transition': 'transform 0.3s ease-out',
					},
					'.card-logo-img': {
						'height': '4rem',
						'width': 'auto',
						'max-width': '9rem',
						'object-fit': 'contain',
					},
					'.card-logo-img-timeline': {
						'height': '2rem',
						'max-width': '4.5rem',
					},
					'@media (min-width: 640px)': {
						'.group:hover .card-accent-bar': {
							'opacity': '1',
							'filter': 'brightness(1.2) saturate(1.15)',
						},
						'.group:hover .card-title': {
							'color': '#1d4ed8',
						},
						'.card-logo-img': {
							'height': '6rem',
							'max-width': '14rem',
						},
						'.card-logo-img-timeline': {
							'height': '2rem',
							'max-width': '5.5rem',
						},
						'.group:hover .card-logo-wrap': {
							'transform': 'scale(1.12)',
						},
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
