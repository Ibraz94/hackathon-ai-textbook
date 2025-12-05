---
description: "Task list for Docusaurus Textbook Setup feature implementation"
---

# Tasks: Docusaurus Textbook Setup

**Input**: Design documents from `specs/001-robotics-textbook-setup/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: No automated tests were specified for this documentation-focused feature. Verification will be done through visual inspection and the CI build process.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure.

- [x] T001 Initialize a new Docusaurus classic site in `docusaurus-site/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T002 Configure `docusaurus-site/docusaurus.config.js` with basic site metadata (title, tagline, URL).
- [x] T003 [P] Set up versioning for the documentation in `docusaurus-site/docusaurus.config.js` and create the initial `docusaurus-site/versioned_docs/` directory.
- [x] T004 [P] Create the main navigation structure in `docusaurus-site/docusaurus.config.js` to include Home, Modules, Code Examples, and Constitution (per FR-005).
- [x] T005 [P] Create placeholder files for the main sections: `docusaurus-site/docs/modules/index.md`, `docusaurus-site/docs/code-examples/index.md`, and `docusaurus-site/docs/constitution.md`.

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Textbook Reader Experience (Priority: P1) 🎯 MVP

**Goal**: As a Student, I want the textbook to be organized into clear, navigable modules with a table of contents, so that I can easily track my progress and locate specific topics.

**Independent Test**: A user can navigate to a module page, see a sticky table of contents on the right, and the page URL reflects the current version.

### Implementation for User Story 1

- [x] T006 [US1] Configure the Docusaurus theme in `docusaurus-site/docusaurus.config.js` to ensure the table of contents is visible and sticky.
- [x] T007 [US1] Add example content with multiple headings to a module page like `docusaurus-site/docs/modules/module-1.md` to test the sticky TOC.
- [x] T008 [US1] Customize the version dropdown component if needed to ensure it is clear and easy to use. This may involve swizzling a theme component, e.g., creating `docusaurus-site/src/theme/NavbarItem/DocsVersionDropdownNavbarItem.js`.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Content Author Experience (Priority: P2)

**Goal**: As a Content Author, I want all documentation changes to fail the build if the document structure is broken, so that I am guaranteed the deployed documentation is always correct and complete.

**Independent Test**: A pull request with a broken link in a Markdown file will cause the `build` job in the CI pipeline to fail.

### Implementation for User Story 2

- [x] T009 [US2] Create a basic CI workflow file at `.github/workflows/ci.yml`.
- [x] T010 [US2] Add a job to the `ci.yml` workflow that installs dependencies (`npm install`) and runs the build script (`npm run build`) within the `docusaurus-site/` directory.
- [x] T011 [US2] Ensure the CI job is configured to `fail-fast` and will exit with a non-zero status code if the `npm run build` command fails, thus enforcing the "Build Failure Rule".

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and address non-functional requirements.

- [x] T012 [P] Document the chosen CDN strategy for deployment (e.g., GitHub Pages, Netlify, Vercel) in the main `README.md`.
- [x] T013 [P] Add a timeout to the build job in `.github/workflows/ci.yml` to enforce the 120-second build time success criteria (SC-001).
- [x] T014 [P] Create initial placeholder content for `docusaurus-site/docs/code-examples/example-1.md` and `docusaurus-site/docs/constitution.md`.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup completion.
- **User Stories (Phase 3 & 4)**: Depend on Foundational phase completion.
- **Polish (Phase 5)**: Can be done in parallel after Foundational, but is best after user stories are complete.

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2).
- **User Story 2 (P2)**: Can start after Foundational (Phase 2). It has no direct dependency on US1.

### Parallel Opportunities

- Once Foundational (Phase 2) is complete, US1 and US2 can be implemented in parallel.
- Tasks marked with `[P]` can be worked on concurrently within their respective phases.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently. The site should be viewable with a sticky TOC and versioning.

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready.
2. Add User Story 1 → Test independently → MVP is ready for review.
3. Add User Story 2 → Test independently → CI guardrails are in place.
4. Complete Polish tasks.
