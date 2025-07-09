# TailwindCSS-4: Start Simple

📅 July 9, 2025
👤 Andriy Ovcharov

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
4. `npm run build` – Build the project for production
