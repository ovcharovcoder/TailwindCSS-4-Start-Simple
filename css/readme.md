// Example input.css

```
@config "../tailwind.config.js";
@import 'tailwindcss';

/* ======================= */
/* Root & Theme Tokens  */
/* ======================= */
@layer base {
  :root {
    --color-everpine-100: #e1f4f2;
    --color-everpine-300: #a4d6cf;
    --color-everpine-500: #23786d;
    --color-everpine-600: #177165;
    --color-everpine-900: #0a312c;
  }

  /* Optional base typography or resets */
}

/* ======================= */
/* Component Layouts    */
/* ======================= */
/* Layout containers */
@layer components {
  .container-custom {
    max-width: 1190px;
    padding: 0 15px;
    margin: 0 auto;
  }

  .container-custom-wide {
    max-width: 1470px;
    padding: 0 15px;
    margin: 0 auto;
  }

  /* Cards for 'Our Services' */
  .card-services {
    @apply block p-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.02];
  }

  .card-services-image {
    @apply max-w-full h-auto opacity-0 rotate-x-90 transition-all duration-700 [transform-style:preserve-3d];
  }

  .card-services-meta {
    @apply flex items-center gap-2 mt-4 justify-center md:justify-start;
  }

  .card-services-divider {
    @apply inline-block w-[40px] h-px bg-everpine-300;
  }

  .card-services-meta-text {
    @apply text-everpine-500;
  }

  .card-services-title {
    @apply font-playfair text-everpine-600 text-xl text-center md:text-start;
  }

  /* Block for Team Members */

  .team-card {
    @apply block w-full md:max-w-[346px] p-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300;
  }

  .team-image {
    will-change: transform, opacity;
    backface-visibility: hidden;
  }

  .team-card-image {
    @apply m-auto md:m-0 max-w-full h-auto opacity-0 [transform:rotateY(90deg)] translate-x-20 transition-all duration-1000 [transform-style:preserve-3d];
  }

  .team-meta {
    @apply flex items-center gap-2 mt-4 justify-center md:justify-start;
  }

  .team-divider {
    @apply inline-block w-[40px] h-px bg-gray-500;
  }

  .team-meta-text {
    @apply text-gray-500;
  }

  .team-title {
    @apply font-playfair text-everpine-600 text-xl pt-2.5 text-center md:text-start;
  }

  .team-description {
    @apply text-gray-500 pt-5 text-center md:text-start;
  }

  /* Block for 'Our achievements' */
  .counter-box {
    @apply py-8 md:py-16 text-center w-[152px] flex-grow;
  }

  .counter-number {
    @apply text-5xl text-everpine-600;
  }

  .counter-meta {
    @apply flex items-center gap-2 mt-4 justify-center;
  }

  .counter-divider {
    @apply inline-block w-[40px] h-px bg-gray-500;
  }

  .counter-label {
    @apply text-gray-500;
  }

  .achievements-item {
    position: relative;
  }

  .achievements-item::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: #177165;
    height: 8px;
    width: 4px;
  }

  /* Our projects slider */
  .project-card {
    @apply relative flex flex-col md:block;
  }

  .project-card-image {
    @apply w-full object-cover h-auto;
  }

  .project-card-info {
    @apply bg-everpine-600 md:absolute md:w-[266px] md:h-[333px] z-10 md:left-0 md:bottom-0 flex flex-col justify-center items-center p-4 md:p-0 mt-4 md:mt-0;
  }

  .project-card-label {
    @apply text-everpine-300 text-[15px];
  }

  .project-card-text {
    @apply font-playfair text-white text-[22px];
  }

  /* Block for Testimonials */
  .testimonial-card {
    @apply relative bg-white py-14 px-14 max-w-full md:max-w-[540px];
  }

  .testimonial-quote {
    @apply font-playfair text-everpine-600 text-[18px] md:text-[22px] relative z-10;
  }

  .testimonial-meta {
    @apply flex justify-center md:justify-start items-center gap-2 pt-10;
  }

  .testimonial-divider {
    @apply inline-block w-[40px] h-px bg-gray-500;
  }

  .testimonial-meta-text {
    @apply text-gray-500 text-[18px] md:text-lg;
  }

  .testimonial-author {
    @apply text-center md:text-start font-playfair text-everpine-600 text-[18px] md:text-[26px] pt-3.5;
  }

  .testimonial-quote-icon {
    @apply absolute top-2.5 left-0 right-0 m-auto z-0;
  }

  /* Blog */
  .article-card {
    @apply w-full md:w-[calc(50%-15px)] bg-everpine-100 overflow-hidden;
  }

  .article-card-image-wrap {
    @apply overflow-hidden;
  }

  .article-card-image {
    @apply w-full object-cover h-auto transform transition-transform duration-500;
  }

  .article-card-meta {
    @apply flex items-center gap-5 px-4 pb-2 pt-7 text-sm text-gray-600;
  }

  .article-card-meta span {
    @apply text-everpine-600;
  }

  .article-card-meta time,
  .article-card-meta .author {
    @apply text-gray-500 text-[15px];
  }

  .article-card-title {
    @apply px-4 text-2xl font-playfair text-everpine-600 mt-4;
  }

  .article-card-excerpt {
    @apply px-4 py-4 text-gray-500;
  }

  .article-card-button-wrap {
    @apply px-4 pb-4 my-5;
  }

  .article-card-button {
    @apply inline-block bg-white text-everpine-600 px-12 py-2 transition-colors transform transition-transform duration-300 hover:scale-105;
  }
}

/* ======================= */
/* UI Interactions     */
/* ======================= */
@layer utilities {
  .font-roboto {
    font-family: 'Roboto', sans-serif;
    font-optical-sizing: auto;
  }

  .font-playfair {
    font-family: 'Playfair Display', serif;
    font-optical-sizing: auto;
  }

  .rotate-x-90 {
    transform: rotateX(90deg);
  }

  .rotate-x-0 {
    transform: rotateX(0deg);
  }

  .rotate-y-90 {
    transform: rotateY(90deg);
  }

  .opacity-0 {
    opacity: 0;
  }

  .opacity-100 {
    opacity: 1;
  }
}

/* ======================= */
/* Third-party Plugins  */
/* ======================= */
/* Swiper styles */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-next,
.swiper-button-prev {
  all: unset;
  display: flex !important;
  opacity: 1 !important;
  visibility: visible !important;
  position: static !important;
  cursor: pointer;
}

.swiper-button-prev::after,
.swiper-button-next:after {
  display: none;
}

/* ======================= */
/* Responsive Tweaks    */
/* ======================= */
@media (max-width: 768px) {
  .achievements-item::before {
    display: none;
  }
}

```
