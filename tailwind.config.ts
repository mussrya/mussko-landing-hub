
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				mussko: {
					50: '#e8e8ff',
					100: '#c5c5ff',
					200: '#9d9dff',
					300: '#7a7aff',
					400: '#4d4dff',
					500: '#1b1aff', // Main brand color
					600: '#0000e6',
					700: '#0000cc',
					800: '#0000a3',
					900: '#000066',
					950: '#000033',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
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
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'image-shine': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' }
				},
				// Enhanced animations for floating shapes
				'float-slow': {
					'0%': { transform: 'translateY(0) rotate(12deg)' },
					'25%': { transform: 'translateY(-15px) rotate(15deg)' },
					'50%': { transform: 'translateY(-30px) rotate(12deg)' },
					'75%': { transform: 'translateY(-15px) rotate(9deg)' },
					'100%': { transform: 'translateY(0) rotate(12deg)' }
				},
				'float-medium': {
					'0%': { transform: 'translateY(0) rotate(6deg)' },
					'33%': { transform: 'translateY(-25px) rotate(10deg)' },
					'66%': { transform: 'translateY(-15px) rotate(2deg)' },
					'100%': { transform: 'translateY(0) rotate(6deg)' }
				},
				'float-fast': {
					'0%': { transform: 'translateY(0) translateX(0)' },
					'25%': { transform: 'translateY(-30px) translateX(10px)' },
					'50%': { transform: 'translateY(-20px) translateX(20px)' },
					'75%': { transform: 'translateY(-10px) translateX(10px)' },
					'100%': { transform: 'translateY(0) translateX(0)' }
				},
				'float-rotate': {
					'0%': { transform: 'translateY(0) rotate(-12deg)' },
					'20%': { transform: 'translateY(-20px) rotate(-5deg)' },
					'40%': { transform: 'translateY(-25px) rotate(2deg)' },
					'60%': { transform: 'translateY(-15px) rotate(8deg)' },
					'80%': { transform: 'translateY(-5px) rotate(-5deg)' },
					'100%': { transform: 'translateY(0) rotate(-12deg)' }
				},
				'pulse-slow': {
					'0%': { transform: 'scale(1)', opacity: '0.2' },
					'50%': { transform: 'scale(1.15)', opacity: '0.5' },
					'100%': { transform: 'scale(1)', opacity: '0.2' }
				},
				'move-diagonal': {
					'0%': { transform: 'translate(0, 0) rotate(0deg)' },
					'25%': { transform: 'translate(15px, -15px) rotate(5deg)' },
					'50%': { transform: 'translate(30px, -30px) rotate(0deg)' },
					'75%': { transform: 'translate(15px, -15px) rotate(-5deg)' },
					'100%': { transform: 'translate(0, 0) rotate(0deg)' }
				},
				'move-circular': {
					'0%': { transform: 'translate(0, 0)' },
					'25%': { transform: 'translate(20px, 20px)' },
					'50%': { transform: 'translate(0, 40px)' },
					'75%': { transform: 'translate(-20px, 20px)' },
					'100%': { transform: 'translate(0, 0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'image-shine': 'image-shine 2.5s linear infinite',
				// Enhanced animations for the floating shapes
				'floating-slow': 'float-slow 12s ease-in-out infinite',
				'floating-medium': 'float-medium 9s ease-in-out infinite',
				'floating-fast': 'float-fast 7s ease-in-out infinite',
				'floating-rotate': 'float-rotate 14s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
				'move-diagonal': 'move-diagonal 10s ease-in-out infinite',
				'move-circular': 'move-circular 15s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
