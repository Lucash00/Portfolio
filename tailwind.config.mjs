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
				/** Pantallas altas y estrechas (430×932, 768×1024, 800×1280, 900×1440); excluye 390×844 */
				'tall-narrow': { 'raw': '(min-height: 900px) and (max-width: 1023px)' },
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
					'0%': { opacity: '0', transform: 'translateX(24px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				slideInPage: {
					'0%': { opacity: '0', transform: 'translate3d(24px, 0, 0)' },
					'100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
				},
				logoWobble: {
					'0%, 22%, 100%': { transform: 'rotate(0deg)' },
					'5%': { transform: 'rotate(-3deg)' },
					'10%': { transform: 'rotate(3deg)' },
					'14%': { transform: 'rotate(-2deg)' },
					'18%': { transform: 'rotate(2deg)' },
				},
				cardFlipOutUp: {
					'0%': { transform: 'rotateX(0deg)', opacity: '1' },
					'100%': { transform: 'rotateX(75deg)', opacity: '0' },
				},
				cardFlipInUp: {
					'0%': { transform: 'rotateX(-75deg)', opacity: '0' },
					'100%': { transform: 'rotateX(0deg)', opacity: '1' },
				},
				cardFlipOutDown: {
					'0%': { transform: 'rotateX(0deg)', opacity: '1' },
					'100%': { transform: 'rotateX(-75deg)', opacity: '0' },
				},
				cardFlipInDown: {
					'0%': { transform: 'rotateX(75deg)', opacity: '0' },
					'100%': { transform: 'rotateX(0deg)', opacity: '1' },
				},
				cardFlipOutRight: {
					'0%': { transform: 'rotateY(0deg)', opacity: '1' },
					'100%': { transform: 'rotateY(75deg)', opacity: '0' },
				},
				cardFlipInRight: {
					'0%': { transform: 'rotateY(-75deg)', opacity: '0' },
					'100%': { transform: 'rotateY(0deg)', opacity: '1' },
				},
				cardFlipOutLeft: {
					'0%': { transform: 'rotateY(0deg)', opacity: '1' },
					'100%': { transform: 'rotateY(-75deg)', opacity: '0' },
				},
				cardFlipInLeft: {
					'0%': { transform: 'rotateY(75deg)', opacity: '0' },
					'100%': { transform: 'rotateY(0deg)', opacity: '1' },
				},
				experienceLetterSquash: {
					'0%, 100%': {
						transform: 'scaleX(1) scaleY(1)',
					},
					'42%': {
						transform: 'scaleX(var(--bulge, 1.06)) scaleY(0.9)',
					},
					'58%': {
						transform: 'scaleX(calc(var(--bulge, 1.06) * 1.015)) scaleY(0.86)',
					},
				},
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-out forwards',
				slideIn: 'slideIn 0.8s ease-out forwards',
				slideInPage: 'slideInPage 1.05s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				logoWobble: 'logoWobble 2.75s ease-in-out infinite',
				cardFlipOutUp: 'cardFlipOutUp 150ms ease-in-out forwards',
				cardFlipInUp: 'cardFlipInUp 150ms ease-in-out forwards',
				cardFlipOutDown: 'cardFlipOutDown 150ms ease-in-out forwards',
				cardFlipInDown: 'cardFlipInDown 150ms ease-in-out forwards',
				cardFlipOutRight: 'cardFlipOutRight 150ms ease-in-out forwards',
				cardFlipInRight: 'cardFlipInRight 150ms ease-in-out forwards',
				cardFlipOutLeft: 'cardFlipOutLeft 150ms ease-in-out forwards',
				cardFlipInLeft: 'cardFlipInLeft 150ms ease-in-out forwards',
				experienceLetterSquash: 'experienceLetterSquash 300ms ease-in-out',
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
						'max-width': '100%',
					},
					'.card-logo-img': {
						'height': '4rem',
						'width': 'auto',
						'max-width': '9rem',
						'object-fit': 'contain',
					},
					'@media (min-width: 640px) and (max-width: 1023px)': {
						'.card-logo-col': {
							'min-width': '0',
							'overflow': 'hidden',
							'padding-left': '0.375rem',
							'padding-right': '0.5rem',
							'box-sizing': 'border-box',
						},
						'.card-logo-wrap': {
							'width': '100%',
							'max-width': '100%',
						},
						'.card-logo-img': {
							'height': 'auto',
							'width': 'auto',
							'max-height': '3.5rem',
							'max-width': '100%',
							'object-fit': 'contain',
						},
						'.group:hover .card-logo-wrap': {
							'transform': 'scale(1.04)',
						},
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
						'.card-logo-img-timeline': {
							'height': '2rem',
							'max-width': '5.5rem',
						},
					},
					'@media (min-width: 1024px)': {
						'.card-logo-img': {
							'height': '6rem',
							'max-width': '14rem',
						},
						'.group:hover .card-logo-wrap': {
							'transform': 'scale(1.12)',
						},
					},
					'.portfolio-tag': {
						'display': 'inline-block',
						'background-color': '#d1d5db',
						'border-radius': '9999px',
						'font-weight': '600',
						'color': '#374151',
						'font-size': '0.875rem',
						'line-height': '1.25',
						'padding': '0.25rem 0.5rem',
						'margin': '0.25rem 0.25rem',
					},
					'.portfolio-tag--list': {
						'font-size': '0.75rem',
					},
					'@media (min-width: 640px)': {
						'.portfolio-tag': {
							'font-size': '0.875rem',
							'padding': '0.25rem 0.75rem',
							'margin': '0.25rem 0.5rem',
						},
						'.portfolio-tag--list': {
							'font-size': '0.875rem',
						},
					},
					'@media (min-width: 640px) and (max-width: 1440px) and (max-height: 1024px)': {
						'.portfolio-tag': {
							'font-size': '0.8125rem',
							'padding': '0.125rem 0.5625rem',
							'margin': '0.125rem 0.375rem',
						},
						'.portfolio-tag--list': {
							'font-size': '0.8125rem',
						},
					},
					'.portfolio-tag-list': {
						'display': 'flex',
						'flex-wrap': 'wrap',
						'gap': '0.5rem',
						'list-style': 'none',
						'margin': '0',
						'padding': '0',
					},
					'@media (min-width: 640px) and (max-width: 1440px) and (max-height: 1024px)': {
						'.portfolio-tag-list': {
							'gap': '0.375rem',
						},
					},
					'.portfolio-tag-list > .portfolio-tag, .portfolio-tag-list > li.portfolio-tag': {
						'margin': '0',
					},
				},
				['responsive', 'hover']
			)
		},
	],
};
