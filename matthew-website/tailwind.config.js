/** @type {import('tailwindcss').Config} */
module.exports = {
    // Tell Tailwind which files to look at. Tailwind will scan these files
    content: [
      "./index.html",         // Look in the main index.html file (in the current folder).
      "./src/**/*.{html,js}", // Also, look in any .html or .js files inside the 'src' folder and its subfolders.
    ],
    theme: {
      extend: {
        fontFamily: {
          // Make 'Inter' the main font for a clean, modern look.
          // If 'Inter' isn't available, the browser will use a standard system sans-serif font as a backup.
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
        },
      },
    },
    plugins: [
    ],
  }