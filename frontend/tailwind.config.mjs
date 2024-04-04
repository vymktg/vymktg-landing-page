/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: "#775AFC",
        secondary: "#4260FF",
        "text-gray": "#939393",
        "sub-gray": "#666666",
      },
      backgroundImage: {
        gradient: "linear-gradient(310deg, #7928ca, #ff0080)",
        'hero-text-content': "linear-gradient(90deg, #501E9C 0%, #A44CEE 43.75%, #FF847F 100%)",
      },
      boxShadow: {
        'services-box': '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
      },
      screens: {
        midmd: "880px",
      },
      textHeading: {
        1: {
          color: "rgb(23, 37, 84)",
        },
      },
      flex: {
        '4': '4 1 0%'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "0%": {
            borderColor: "transparent",
          },
          "66%": {
            borderColor: "#4943a5",
          },
        },
        light: {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
            color: '#fff',
          },
        },
      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
      },
      animation: {
        typing: "typing 1.5s steps(20) alternate, blink 1.2s infinite",
        light: "light 2.5s linear forwards infinite alternate"
      },
      bottom: {
        24: "6rem",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["responsive", "hover", "focus"],
      opacity: ["hover"],
      borderColor: ["hover", "focus"],
      margin: ["first", "last"],
      backgroundColor: ["odd", "even"],
      scale: ["hover", "active", "group-hover"],
    },
  },
  plugins: [],
};
