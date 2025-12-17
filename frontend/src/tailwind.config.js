export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "#ffffff",
                surface: "#f8fafc",
                primary: "#FACC15", // Yellow 400
                "primary-hover": "#EAB308", // Yellow 500
                "primary-light": "#FEFCE8", // Yellow 50
                secondary: "#0f172a", // Slate 900
                text: {
                    main: "#0f172a",
                    muted: "#64748b",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            boxShadow: {
                glow: "0 0 60px -15px rgba(250, 204, 21, 0.4)",
                card: "0 20px 40px -10px rgba(0,0,0,0.06)",
                yellow: "0 10px 25px -5px rgba(250, 204, 21, 0.4)",
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "float-delayed": "float 6s ease-in-out 3s infinite",
                levitate: "levitate 3s ease-in-out infinite",
                "levitate-slow": "levitate 4s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": {
                        transform: "translateY(0)",
                    },
                    "50%": {
                        transform: "translateY(-20px)",
                    },
                },
            },
            keyframes: {
                levitate: {
                    "0%, 100%": {
                        transform: "translateY(0px)",
                    },
                    "50%": {
                        transform: "translateY(-15px)",
                    },
                },
            },
        },
    },
    plugins: [],
};
