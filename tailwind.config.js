module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ["var(--font-montserrat)"],
                heading: ["var(--font-climate)"],
            },
        },
    },
    plugins: [],
}