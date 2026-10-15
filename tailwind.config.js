/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  safelist: [
    // Dynamic color patterns for status badges, traffic lights, and KPI progress
    {
      pattern: /(bg|text|border)-(emerald|amber|rose|sky|wahdah|gold)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    // Explicit dynamic classes in JS template strings
    'bg-emerald-500', 'bg-amber-500', 'bg-rose-500', 'bg-sky-600',
    'bg-emerald-50', 'text-emerald-700', 'border-emerald-200',
    'bg-amber-50', 'text-amber-700', 'border-amber-200',
    'bg-rose-50', 'text-rose-700', 'border-rose-200',
    'bg-sky-50', 'text-sky-700', 'border-sky-200', 'text-sky-800',
    'bg-gold-50', 'text-gold-800', 'border-gold-200',
    'bg-wahdah-50', 'text-wahdah-700', 'border-wahdah-200',
    'bg-white/15', 'text-wahdah-100', 'd-none', 'view-fade'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        arabic: ['Amiri', 'serif']
      },
      colors: {
        wahdah: {
          50: '#eefaf4', 100: '#d6f1e2', 200: '#aee2c8', 300: '#7ccca9', 400: '#48ac83',
          500: '#25906a', 600: '#177355', 700: '#145c46', 800: '#124a3a', 900: '#0e3a2e', 950: '#07211a'
        },
        gold: {
          50: '#fbf8ee', 100: '#f5eed3', 200: '#ebdaa9', 300: '#dec077', 400: '#d1a74d',
          500: '#c9a24b', 600: '#a9843a', 700: '#87652e', 800: '#6c4f29', 900: '#583f25'
        }
      },
      boxShadow: {
        soft: '0 2px 10px -2px rgba(14,58,46,0.06), 0 8px 24px -8px rgba(14,58,46,0.08)',
        card: '0 4px 20px -4px rgba(14,58,46,0.06), 0 1px 3px rgba(14,58,46,0.04)',
        softer: '0 1px 4px rgba(14,58,46,0.05)'
      }
    }
  },
  plugins: []
};
