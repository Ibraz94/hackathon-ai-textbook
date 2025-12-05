# Quickstart Guide: Robotics Course Content Development

**Feature Branch**: `002-robotics-course-spec`
**Created**: 2025-12-05
**Purpose**: A quick guide for content creators and developers to set up the environment and start working with the Robotics Course Content.

## 1. Prerequisites

Ensure you have the following installed:

*   Node.js (LTS version, e.g., 20.x)
*   npm (usually comes with Node.js)
*   Git

## 2. Clone the Repository

First, clone the main project repository:

```bash
git clone [YOUR_REPOSITORY_URL_HERE]
cd hackathon-ai-textbook
```

## 3. Navigate to the Docusaurus Site

The course content is managed within a Docusaurus site:

```bash
cd docusaurus-site
```

## 4. Install Dependencies

Install the necessary Node.js packages for the Docusaurus site:

```bash
npm install
```

## 5. Start the Local Development Server

To preview the course content locally as you develop:

```bash
npm start
```

This will open a local development server, typically at `http://localhost:3000`, and automatically refresh the page as you make changes to the Markdown/MDX files.

## 6. Accessing Course Content

Course modules, code examples, and the project constitution are located under the `docusaurus-site/docs/` directory.

## 7. Versioning Content

If you need to create a new version of the documentation (e.g., for a new release of the course content), use the Docusaurus versioning command:

```bash
npm run docusaurus docs:version <NEW_VERSION_NUMBER>
```

Replace `<NEW_VERSION_NUMBER>` with the semantic version (e.g., `2.0.0`).

## 8. Creating New Modules and Content

To maintain consistency and adhere to the defined structure, please follow these guidelines when creating new modules or content:

1.  **Utilize the Module Template**: Always start new module content by copying the `docusaurus-site/docs/modules/MODULE_TEMPLATE.mdx` file.
    *   **Path**: `docusaurus-site/docs/modules/`
    *   **Template**: `MODULE_TEMPLATE.mdx`
    *   **Example**: `cp docusaurus-site/docs/modules/MODULE_TEMPLATE.mdx docusaurus-site/docs/modules/new-module-name.mdx`

2.  **Fill in Placeholders**: Update all placeholders within the template (`[Module Title]`, `[Focus Area X]`, `[KLO X]`, `[Hardware Component Name]`, `[Prerequisite X]`, etc.) with your specific content.
    *   Ensure Key Learning Outcomes (KLOs) are measurable and student-centric.
    *   Reference required hardware components as per the `Hardware Context`.

3.  **Update Sidebar Configuration**: After creating a new module, add it to the appropriate sidebar configuration in `docusaurus-site/sidebars.ts` to ensure it appears in the site navigation.

4.  **Content Review**: Before submitting a Pull Request, ensure your content adheres to the project's [Content Style Guide](/docs/style-guide) (if available) and passes all Docusaurus build checks.
