import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: "#fdf6f0",
                    100: "#faeadb",
                    200: "#f4d2b5",
                    300: "#ecb385",
                    400: "#e28b53",
                    500: "#da6d31",
                    600: "#cb5526",
                    700: "#a94121",
                    800: "#873521",
                    900: "#6d2e1d",
                    950: "#3b150d",
                },
                sage: {
                    50: "#f4f7f4",
                    100: "#e3eae2",
                    200: "#c7d5c6",
                    300: "#a1b8a0",
                    400: "#789777",
                    500: "#587a57",
                    600: "#446143",
                    700: "#374e37",
                    800: "#2e3f2e",
                    900: "#263427",
                    950: "#131c13",
                },
            },
            fontFamily: {
                heading: ["Georgia", "serif"],
                body: ["system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
