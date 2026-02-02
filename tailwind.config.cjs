/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily : {
				'base' : ['Lato', 'Helvetica', 'sans-serif'],
				'theme' : ['Lato', 'Helvetica', 'sans-serif'],
			},
			colors : {
				"primary" : {
					25  : "hsl( var(--primary-color) 98% / <alpha-value> )",
					50  : "hsl( var(--primary-color) 95% / <alpha-value> )",
					100 : "hsl( var(--primary-color) 90% / <alpha-value> )",
					200 : "hsl( var(--primary-color) 80% / <alpha-value> )",
					300 : "hsl( var(--primary-color) 70% / <alpha-value> )",
					400 : "hsl( var(--primary-color) 60% / <alpha-value> )",
					500 : "hsl( var(--primary-color) 50% / <alpha-value> )",
					600 : "hsl( var(--primary-color) 40% / <alpha-value> )",
					700 : "hsl( var(--primary-color) 30% / <alpha-value> )",
					800 : "hsl( var(--primary-color) 20% / <alpha-value> )",
					900 : "hsl( var(--primary-color) 10% / <alpha-value> )",
				},
				"secondary" : {
					50  : "hsl( var(--secondary-color) 95% / <alpha-value> )",
					100 : "hsl( var(--secondary-color) 90% / <alpha-value> )",
					200 : "hsl( var(--secondary-color) 80% / <alpha-value> )",
					300 : "hsl( var(--secondary-color) 70% / <alpha-value> )",
					400 : "hsl( var(--secondary-color) 60% / <alpha-value> )",
					500 : "hsl( var(--secondary-color) 50% / <alpha-value> )",
					600 : "hsl( var(--secondary-color) 40% / <alpha-value> )",
					700 : "hsl( var(--secondary-color) 30% / <alpha-value> )",
					800 : "hsl( var(--secondary-color) 20% / <alpha-value> )",
					900 : "hsl( var(--secondary-color) 10% / <alpha-value> )",
				},
			},
			backgroundImage : {
				'radial-gradient' : 'radial-gradient(var(--tw-gradient-stops))'
			},
			animation : {
				'reveal-up' : 'reveal-up 500ms ease 500ms both',
				'fade-in' : 'fade-in 750ms both'
			},
			keyframes : {
				'reveal-up' : {
					'from' : { 
						clipPath : 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
						transform : 'translateY(1rem)'
					},
					'to' : { 
						clipPath : 'polygon(0 0, 200% 0, 200% 200%, 0 200%)',
						transform : 'translate(0)'
					},
				},
				'fade-in' : {
					'from' : { opacity : '0' },
					'to' : { opacity : '1' },
				}
			}
		},
	},
	plugins: [],
}
