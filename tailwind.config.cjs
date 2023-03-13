/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                male: "url('./src/assets/male-clothing-model.jpg')",
                female: "url('./src/assets/female-clothing-model.jpg')",
                kid: "url('./src/assets/kid-clothing-model.jpg')",
            },
        },
    },
    plugins: [],
};
