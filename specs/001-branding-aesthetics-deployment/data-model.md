# Data Model: Branding, Aesthetics, and Deployment for Physical AI Textbook

## Entities

### Textbook Website
- **Description**: The primary Docusaurus static site that serves the textbook content.
- **Attributes**:
    - `siteTitle`: String, the primary title displayed in the browser tab and page header.
    - `baseUrl`: String, the base URL path for deployment (e.g., for GitHub Pages).
- **Relationships**:
    - Relates to `Branding Assets` (consumes logo and color palette).
    - Relates to `Deployment Configuration` (uses `baseUrl`).

### Branding Assets
- **Description**: Visual and textual elements that define the textbook's identity.
- **Attributes**:
    - `projectTitle`: String, the official project name ("Embodied Intelligence: A Physical AI Textbook").
    - `faviconPath`: String, path to the custom robot-themed favicon/logo (e.g., `static/img/logo.svg`).
    - `primaryColor`: String (hex or named color), e.g., "Deep Teal".
    - `secondaryAccentColor`: String (hex or named color), e.g., "Electric Blue".
- **Relationships**:
    - Consumed by `Textbook Website` for rendering.

### Deployment Configuration
- **Description**: Settings and parameters for deploying the Docusaurus site.
- **Attributes**:
    - `targetRepositoryName`: String, the name of the GitHub Pages repository (e.g., `physical-ai-textbook`).
    - `configurationFile`: String, path to the primary Docusaurus configuration file (e.g., `docusaurus.config.ts`).
- **Relationships**:
    - Configures `Textbook Website` deployment.
