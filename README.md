# Swastika Mitra Portfolio

A modern personal portfolio website built with React and Vite. It showcases Swastika Mitra’s academic background, technical skills, projects, achievements, certifications, and contact information in a clean, recruiter-friendly layout.

## Overview

This portfolio is designed to:

- present a strong first impression for employers and recruiters
- highlight technical abilities and project work
- make contact, GitHub, and LinkedIn access easy
- provide a polished single-page experience for mobile and desktop

## Features

- Responsive layout for all screen sizes
- Dark professional theme with modern UI styling
- Smooth navigation between sections
- Hero section with profile image and quick intro
- Projects section with links to GitHub repositories
- Certifications, achievements, and experience timeline
- Contact section with email and social links
- Downloadable resume button
- Quick View panel for a portfolio snapshot

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Lucide React icons

## Project Structure

```bash
swastika-portfolio/
├── public/
│   ├── profile.jpg
│   └── resume.svg
├── src/
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal in your browser.

## Production Build

To generate the optimized production build:

```bash
npm run build
```

The output will be created in the `dist/` folder.

## Deployment

This project can be deployed to any static hosting platform, including:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

For most setups, the deployment command is simply:

```bash
npm run build
```

Then publish the contents of the `dist/` folder.

## Customization Notes

Before publishing publicly, consider updating:

- the profile photo in `public/profile.jpg`
- the resume file in `public/resume.svg` or replace it with a real PDF
- GitHub, LinkedIn, and email links in `src/main.jsx`
- project details and certification entries to match real achievements
- any personal information you do not want visible publicly

## License

This project is for personal portfolio use. If you plan to reuse or share it publicly, make sure you have permission for all personal content, images, and links included in the site.

## Author

Swastika Mitra

