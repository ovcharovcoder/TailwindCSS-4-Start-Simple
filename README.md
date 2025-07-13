# TailwindCSS-4: Start Simple
A minimal starter template using pure Tailwind CSS v4. No build tools, just clean and simple development.

- 📅 July 10, 2025
- 🧑‍💻 Andriy Ovcharov

---

## Technologies Used

This project is built with the following tools and technologies:

- **Tailwind CSS v4** – Utility-first CSS framework for rapid UI development
- **Live Server** – Local development server with live reloading
- **Node.js** – JavaScript runtime for dependency management and build scripts

---

## Project structure
```
src/
│
├── css/
│ ├── input.css # Main file for custom Tailwind and utility styles
│ └── style.css # Output file (generated, should not be edited manually)
│
├── fonts/ # Font files (.woff, .woff2 only)
│
├── images/
│ ├── icons/ # Icon images (.svg, .webp)
│ └── # All other images (.webp, .avif only – converted from .png, .jpg)
│
├── js/
│ └── main.js # JavaScript entry point
│
└── index.html # Main HTML page (additional pages also stored here)
```
---

## Best Practices

🖼️ Images: Convert .png and .jpg files to .webp or .avif before adding them to src/images/.

🎯 Icons: Store .svg and .webp icon assets separately in src/images/icons/.

🎨 CSS: Write all custom styles in src/css/input.css. Avoid editing style.css manually, as it's compiled.

🅰️ Fonts: Use only .woff and .woff2 font formats. Store them in src/fonts/.

💻 Scripts: Keep all JavaScript files in src/js/. Use main.js as the main entry point.

📄 HTML: Store all .html pages at the root of the src/ folder.

---

## Getting Started

1. `npm i` – Install all dependencies
2. `npm run watch` – Start development mode with file watcher
3. Launch **Live Server** in your code editor (e.g., VS Code)
4. `npm run build` – Build the project for production (style.css only)

---

## Exapmle tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/*.html', './src/js/*.{js,ts,jsx,tsx}'],
  safelist: [
    // Layout containers
    'container-custom',
    'container-custom-wide',

    // Services section
    /^card-services$/,
    /^card-services-/,

    // Team section
    /^team-card$/,
    /^team-card-/,
    /^team-meta$/,
    /^team-meta-text$/,

    // Achievements section
    /^counter-box$/,
    /^counter-number$/,
    /^counter-meta$/,
    /^counter-label$/,
    'achievements-item',

    // Projects section
    /^project-card$/,
    /^project-card-/,

    // Testimonials section
    /^testimonial-card$/,
    /^testimonial-quote$/,
    /^testimonial-meta$/,
    /^testimonial-divider$/,
    /^testimonial-meta-text$/,
    /^testimonial-author$/,
    /^testimonial-quote-icon$/,

    // Blog section
    /^article-card$/,
    /^article-card-/,

    // Utilities
    'font-roboto',
    'font-playfair',
    /^rotate-x-/,
    /^rotate-y-/,
    /^opacity-/,

    // Swiper plugin classes
    'swiper',
    'swiper-slide',
    'swiper-button-prev',
    'swiper-button-next',
  ],
  theme: {
    extend: {
      colors: {
        'everpine-100': '#e1f4f2',
        'everpine-300': '#a4d6cf',
        'everpine-500': '#23786d',
        'everpine-600': '#177165',
        'everpine-900': '#0a312c',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
```


🧑‍💻 Happy coding!
