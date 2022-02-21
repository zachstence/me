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
           'primary' : '#3974fe',
           'primary-focus' : '#185cfb',
           'primary-content' : '#fcfcfc',

           'secondary' : '#e265cd',
           'secondary-focus' : '#d548bc',
           'secondary-content' : '#fcfcfc',

           'accent' : '#3cb2b4',
           'accent-focus' : '#389d9f',
           'accent-content' : '#fcfcfc',

           'neutral' : '#272d35',
           'neutral-focus' : '#24272d',
           'neutral-content' : '#fcfcfc',

           'base-100' : '#1f2223',
           'base-200' : '#121516',
           'base-300' : '#0c0d0e',
           'base-content' : '#e7e9e9',

           'info' : '#38b6ff',
           'success' : '#37d78d',
           'warning' : '#eaa443',
           'error' : '#ff5c74',

          '--rounded-box': '1rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '1rem',

          '--animation-btn': '0.15s',
          '--animation-input': '0.05s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '0.5rem',
          '--border-btn': '2px',
        },
      },
    ],
  },
};

module.exports = config;
