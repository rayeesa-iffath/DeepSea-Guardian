/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // DeepSea Guardian brand system: "NASA Mission Control meets AI SaaS".
        // Near-black ocean depth as the canvas, one tech-signal cyan doing
        // all the "this is live data" signalling, amber reserved ONLY for
        // risk/alert states, violet reserved ONLY for "AI-generated" content.
        abyss: {
          950: "#02060B",
          900: "#041826",
          800: "#06263B",
          700: "#0B3B52",
        },
        kelp: {
          500: "#0B6E76",
          400: "#12979A",
        },
        signal: {
          cyan: "#00E5FF",
          dim: "#4FD8E0",
        },
        risk: {
          amber: "#FFB238",
          red: "#FF5470",
        },
        ai: {
          violet: "#8C7BFF",
        },
        foam: "#EAFBFF",
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        wider2: "0.28em",
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
