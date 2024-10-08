import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
        sans1: ["Fira Code", ...fontFamily.sans],
        mono1: ["Fira Code", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
} satisfies Config;
