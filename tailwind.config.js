/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
            
                'nav': '#2C2C2E',       
                'geral': '#181818',     
                'botao': '#137FEC',     
                'subtitulo': '#989FAB', 
                'navButton' : '#43474F',

        
                'nav-hover': '#2C2C2E',  
                'botao-hover': '#0F6FD4', 
            }
        },
    },
    plugins: [],
}