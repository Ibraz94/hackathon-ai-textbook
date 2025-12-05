# Tasks: Branding, Aesthetics, and Deployment for Physical AI Textbook

**Input**: Design documents from `/specs/001-branding-aesthetics-deployment/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Node.js dependencies for Docusaurus project in `docusaurus-site/package.json`
- [x] T002 Ensure Docusaurus site can build and serve locally in `docusaurus-site/`

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 Ensure `docusaurus.config.ts` exists and is a valid Docusaurus configuration in `docusaurus-site/docusaurus.config.ts`
- [x] T004 Confirm `src/css/custom.css` exists for custom styling in `docusaurus-site/src/css/custom.css`
- [x] T005 Verify `src/pages/index.tsx` exists as homepage entry point in `docusaurus-site/src/pages/index.tsx`
- [x] T006 Create `static/img/logo.svg` placeholder for favicon in `docusaurus-site/static/img/logo.svg`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

## Phase 3: User Story 1 - Textbook Branding and Identity (Priority: P1) 🎯 MVP

**Goal**: Ensure the textbook's official title and branding are correctly displayed.

**Independent Test**: Verify site title in browser tab and page header.

### Implementation for User Story 1

- [x] T007 [US1] Update primary site title in `docusaurus-site/docusaurus.config.ts`
- [x] T008 [US1] Set `projectName` for Docusaurus in `docusaurus-site/docusaurus.config.ts`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

## Phase 4: User Story 2 - Engaging Visual First Impression (Priority: P1)

**Goal**: Provide a visually appealing and informative homepage with the defined color palette.

**Independent Test**: Visually assess homepage layout and color adherence.

### Implementation for User Story 2

- [x] T009 [P] [US2] Implement Deep Teal and Electric Blue color palette in `docusaurus-site/src/css/custom.css`
- [x] T010 [US2] Create custom, visually engaging homepage content in `docusaurus-site/src/pages/index.tsx`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

## Phase 5: User Story 3 - Professional Site Appearance (Priority: P2)

**Goal**: Implement a custom robot-themed favicon/logo and apply the color palette site-wide.

**Independent Test**: Inspect browser favicon and site-wide color usage.

### Implementation for User Story 3

- [x] T011 [P] [US3] Reference custom robot-themed favicon in `docusaurus-site/docusaurus.config.ts`
- [x] T012 [US3] Ensure `static/img/logo.svg` contains the robot-themed logo in `docusaurus-site/static/img/logo.svg`

**Checkpoint**: All user stories should now be independently functional

## Phase 6: User Story 4 - Reliable Deployment (Priority: P3)

**Goal**: Configure reliable deployment to a designated GitHub Pages repository.

**Independent Test**: Verify successful deployment to GitHub Pages at the specified base URL.

### Implementation for User Story 4

- [x] T013 [US4] Set `baseUrl` for GitHub Pages deployment in `docusaurus-site/docusaurus.config.ts`
- [x] T014 [US4] Update deployment workflow (e.g., `.github/workflows/ci.yml`) to use correct `baseUrl` and target repository in `.github/workflows/ci.yml`

**Checkpoint**: All user stories should now be independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T015 Run quickstart.md validation to ensure instructions are current
- [x] T016 Review and commit all Docusaurus configuration changes in `docusaurus-site/`
- [x] T017 Verify full site build and deployment works end-to-end in `docusaurus-site/`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable
- **User Story 4 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2/US3 but should be independently testable

### Within Each User Story

- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- T001 and T002 can run in parallel (within Setup)
- T003, T004, T005, T006 can run in parallel (within Foundational)
- Once Foundational phase completes, User Stories 1, 2, 3, and 4 can be started in parallel by different team members, though priority suggests P1 then P2 then P3.
- Within User Story 2, T009 and T010 have some parallel opportunity (CSS vs JSX).
- Within User Story 3, T011 and T012 have some parallel opportunity (config vs asset).

## Implementation Strategy

### MVP First (User Story 1 + 2)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. Complete Phase 4: User Story 2
5. **STOP and VALIDATE**: Test User Story 1 and 2 independently
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP for Branding and Identity!)
3. Add User Story 2 → Test independently → Deploy/Demo (MVP for Homepage and Colors!)
4. Add User Story 3 → Test independently → Deploy/Demo (MVP for Professional Site Appearance!)
5. Add User Story 4 → Test independently → Deploy/Demo (MVP for Reliable Deployment!)
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
   - Developer D: User Story 4
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence