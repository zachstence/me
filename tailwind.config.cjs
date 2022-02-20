const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "github-primary": "#AFB5BB",
        "linkedin-primary": "#0A66C2",
        "gmail-primary": "#EA4335",
      }
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'dark': {
           'primary' : '#793ef9',
           'primary-focus' : '#570df8',
           'primary-content' : '#ffffff',

           'secondary' : '#f000b8',
           'secondary-focus' : '#bd0091',
           'secondary-content' : '#ffffff',

           'accent' : '#37cdbe',
           'accent-focus' : '#2ba69a',
           'accent-content' : '#ffffff',

           'neutral' : '#2d3034',
           'neutral-focus' : '#121416',
           'neutral-content' : '#ffffff',

           'base-100' : '#1b1e23',
           'base-200' : '#14161a',
           'base-300' : '#090a0c',
           'base-content' : '#ebecf0',

           'info' : '#66c7ff',
           'success' : '#87cf3a',
           'warning' : '#e1d460',
           'error' : '#ff6b6b',

          '--rounded-box': '0.5rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '0.5rem',
          '--border-btn': '1px',
        },
      },
    ],
  },};

module.exports = config;
