/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradients: {
        'custom-gradient': ['hsl(158, 82%, 57%, 85%)', 'hsl(252, 82%, 57%)'],
      },
      animation: {
        'custom-spin': 'rotate 50s cubic-bezier(0.8, 0.2, 0.2, 0.8) infinite alternate',
      },
       fontFamily:{
        proteststrike:['Protest Strike', 'sans-serif'],
        lato:['Lato','sans-serif'],
        protestriot:[ 'Protest Riot', 'sans-serif'],
        robotomono:[ 'Roboto Mono', 'monospace'],
        kodemono:[ 'Kode Mono' ,'monospace'],
        spaceGrotesk:['Space Grotesk','monospace'],
        jersyTen:['Jersey 10', 'sans-serif'],
        honk:['Honk', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 1px 2px rgba(0,255,255,0.5), 0px 2px 4px rgba(0,255,255,0.5), 0px 4px 8px rgba(0,255,255,0.5), 0px 8px 16px rgba(0,255,255,0.5)',
        'purpleshade':'0px 1px 6px rgba(139, 0, 139, 0.5),0px 2px 6px rgba(139, 0, 139, 0.5),0px 4px 12px rgba(139, 0, 139, 0.5),0px 8px 26px rgba(139, 0, 139, 0.5);'
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const gradients = theme('gradients', {});
      const animation = theme('animation', {});

      const gradientUtilities = Object.keys(gradients).reduce((acc, key) => {
        const value = gradients[key];
        const gradientClass = `.${e(`bg-${key}`)}`;
        const gradientStyle = {
          'background-image': `linear-gradient(${value})`,
        };
        acc[gradientClass] = gradientStyle;
        return acc;
      }, {});

      const animationUtilities = Object.keys(animation).reduce((acc, key) => {
        const value = animation[key];
        const animationClass = `.${e(`animate-${key}`)}`;
        const animationStyle = {
          animation: `${key} ${value}`,
        };
        acc[animationClass] = animationStyle;
        return acc;
      }, {});

      addUtilities(gradientUtilities, ['responsive', 'hover']);
      addUtilities(animationUtilities, ['responsive']);
    },
  ],
}

