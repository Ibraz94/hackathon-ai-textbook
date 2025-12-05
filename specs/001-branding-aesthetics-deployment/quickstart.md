# Quickstart: Branding, Aesthetics, and Deployment for Physical AI Textbook

This quickstart guide provides the essential steps to apply the branding, aesthetic, and deployment configurations defined for the "Embodied Intelligence: A Physical AI Textbook" project.

## Prerequisites

- Node.js (version 18 or higher)
- npm or Yarn
- Access to the project repository.

## 1. Update Docusaurus Configuration

Modify the `docusaurus.config.ts` file in the `docusaurus-site/` directory to reflect the new branding and deployment settings.

### Project Name and Site Title

Update the `title` and `projectName` properties:

```typescript
// docusaurus.config.ts
const config = {
  title: 'Embodied Intelligence: A Physical AI Textbook',
  // ... other configs
  projectName: 'physical-ai-textbook', // Used for GitHub Pages baseUrl
  // ... other configs
};
```

### Favicon/Logo

Ensure the `favicon` path points to the custom robot-themed logo:

```typescript
// docusaurus.config.ts
const config = {
  // ... other configs
  favicon: 'img/logo.svg', // Path relative to `static/`
  // ... other configs
};
```
And make sure `static/img/logo.svg` exists with your custom robot-themed logo.

### Deployment Base URL

Set the `baseUrl` for GitHub Pages deployment:

```typescript
// docusaurus.config.ts
const config = {
  // ... other configs
  baseUrl: '/physical-ai-textbook/', // Corresponds to your GitHub Pages repository name
  // ... other configs
};
```

## 2. Implement Color Palette

Update the `docusaurus-site/src/css/custom.css` file to define the Deep Teal and Electric Blue color palette.

```css
/* docusaurus-site/src/css/custom.css */
:root {
  --ifm-color-primary: #00796B; /* Deep Teal */
  --ifm-color-primary-dark: #00695C;
  --ifm-color-primary-darker: #005F54;
  --ifm-color-primary-darkest: #004D40;
  --ifm-color-primary-light: #26A69A;
  --ifm-color-primary-lighter: #4DB6AC;
  --ifm-color-primary-lightest: #80CBC4;

  --ifm-color-secondary-accent: #00BCD4; /* Electric Blue */
  --ifm-color-secondary-accent-dark: #00ACC1;
  --ifm-color-secondary-accent-darker: #0097A7;
  --ifm-color-secondary-accent-darkest: #00838F;
  --ifm-color-secondary-accent-light: #26C6DA;
  --ifm-color-secondary-accent-lighter: #4DD0E1;
  --ifm-color-secondary-accent-lightest: #80DEEA;
}
```

## 3. Create Custom Homepage

Develop the custom, visually engaging homepage at `docusaurus-site/src/pages/index.tsx`. This file will replace the default Docusaurus homepage.

## 4. Test Locally

To preview your changes locally:

```bash
cd docusaurus-site
npm install
npm start
```

## 5. Deploy to GitHub Pages

After committing your changes, Docusaurus can be deployed to GitHub Pages. Ensure your GitHub Actions or deployment script is configured to build and deploy to the `gh-pages` branch for the `physical-ai-textbook` repository.
