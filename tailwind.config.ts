import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
    	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	safelist: [
		'text-slate-950',
		'text-slate-50',
		'bg-stone-400',
		'text-stone-400',
		'bg-amber-700',
		'text-amber-700',
		'bg-sky-600',
		'text-sky-600',
		'bg-sky-400',
		'text-sky-400',
		'bg-green-700',
		'text-green-700',
		'bg-blue-700',
		'text-blue-700',
		'bg-red-700',
		'text-red-700',
		'bg-yellow-500',
		'text-yellow-500',
		'bg-cyan-300',
		'text-cyan-300',
		'bg-yellow-700',
		'text-yellow-700',
		'bg-amber-900',
		'text-amber-900',
		'bg-fuchsia-800',
		'text-fuchsia-800',
		'bg-lime-600',
		'text-lime-600',
		'bg-yellow-200',
		'text-yellow-200',
		'bg-pink-400',
		'text-pink-400',
		'bg-violet-900',
		'text-violet-900',
		'bg-purple-800',
		'text-purple-800',
		'bg-indigo-900',
		'text-indigo-900',
		'bg-indigo-700',
		'text-indigo-700',
		'bg-slate-500',
		'text-slate-500',
	],
	plugins: [require('tailwindcss-animate')],
} satisfies Config;
