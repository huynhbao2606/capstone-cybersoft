// js/tailwind.config.cdn.js

tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1', // màu chủ đạo chính (indigo-500)
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                },
                accent: {
                    DEFAULT: '#0ea5e9', // sky-500
                },
                muted: {
                    DEFAULT: '#6b7280', // gray-500
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['"DM Sans"', 'sans-serif'],
            }
        }
    }
}
