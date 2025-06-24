# Agent Instructions

## Goal
To create a marketing website for Pixeau.nl in Dutch and in English (UK).

## Multi-Agent System Coordinator

You are a multi-agent system coordinator, playing two roles in this environment: Planner and Executor. You will decide the next steps based on the current state in the `PLAN.md` file. Your goal is to complete the user's final requirements.

When the user asks for something to be done, you will take on one of two roles: the Planner or Executor. Any time a new request is made, the human user will ask to invoke one of the two modes. If the human user doesn't specify, please ask the human user to clarify which mode to proceed in.

### Role Descriptions

1. **Planner**
   - Responsibilities: Perform high-level analysis, break down tasks, define success criteria, evaluate current progress. The human user will ask for a feature or change, and your task is to think deeply and document a plan so the human user can review before giving permission to proceed with implementation. When creating task breakdowns, make the tasks as small as possible with clear success criteria. Do not overengineer anything, always focus on the simplest, most efficient approaches.
   - Actions: Revise the `PLAN.md` file to update the plan accordingly.

2. **Executor**
   - Responsibilities: Execute specific tasks outlined in `PLAN.md`, such as writing code, running tests, handling implementation details, etc.. The key is you need to report progress or raise questions to the human at the right time, e.g. after completion some milestone or after you've hit a blocker. Simply communicate with the human user to get help when you need it.
   - Actions: When you complete a subtask or need assistance/more information, also make incremental writes or modifications to `PLAN.md` file; update the "Current Status / Progress Tracking" and "Executor's Feedback or Assistance Requests" sections; if you encounter an error or bug and find a solution, document the solution in "AGENT.md" to avoid running into the error or bug again in the future.

## Development Workflow

### Commands
- **Dev server**: `yarn dev` (usually running in background on http://localhost:4321)
- **Build**: `yarn build`
- **Preview build**: `yarn preview`
- **Test**: `yarn test` or `yarn test:run`
- **Test (single)**: `yarn test -- --run --reporter=verbose test-name`
- **Lint**: `yarn lint --fix` (use --fix for efficiency)
- **Type check**: `yarn type-check`
- **Add packages**: Always use `yarn add package-name` (NOT npm install)
-
### Environment
- **Dev server**: Assume `yarn dev` is running in background - don't run it in most cases
- **Checking current state**: Use `read_web_page` with http://localhost:4321 to see current app state
- **Project management**: Keep `PLAN.md` updated and well-organized. Mark completed items as [x]. Work systematically through phases. Restructure sections when they become redundant or unclear.

## Technical Architecture

### Current Project State
- **Framework**: Astro 5.8.0 with React components and Tailwind CSS 4.1.7
- **Internationalization**: Setup for Dutch (nl) and English (en) with proper locale routing
- **Structure**: Multi-page site with `/nl/` and `/en/` locale prefixes
- **Components**: Modular component architecture (HeroBlock, LogoCloud, FeatureBoxes, etc.)
- **Content Management**: Structured content with proper i18n routing

### Missing Critical Development Tools
- **Prettier**: No .prettierrc config (only found in git-exclude folder)
- **ESLint**: No eslint configuration files detected
- **Type checking**: Available via yarn type-check but no linting in scripts
- **Testing**: No test framework configured yet

### Content Status Assessment
- **Dutch (nl)**: HomePage has real content for services/clients but hero section uses Lorem Ipsum placeholder
- **English (en)**: Minimal content - only has HeroBlock with placeholder text, missing all sections
- **Pages Available**: 
  - Homepage, Contact, About Us (Over Ons), Terms (Algemene Voorwaarden)
  - Services subdirectory (diensten/) exists for Dutch

### Deployment Status
- **Current**: Development only (yarn dev on localhost:4321)
- **Planned**: Static compilation → Cloudflare hosting
- **Wrangler**: Already included in devDependencies (v4.19.2)

## Code Standards

### Formatting & Linting
- **Prettier**: Single quotes, trailing commas, default settings
- **ESLint**: Canonical rules with import ordering and unicorn plugins
- **Lint rules**: Don't modify eslint.config.js - use `// eslint-disable-next-line rule-name` sparingly when needed
- **Prefer fixing**: Always try to fix code to match lint rules rather than disable

## Best Practices

### Documentation & Setup
- **Always check docs first**: When setting up evolving technologies (EG.: Tailwind, React, libraries), always check current documentation on the web first
- **Don't rely on memory**: Technologies change frequently - use `read_web_page` to get latest setup instructions and best practices
- **Verify compatibility**: Check version compatibility between different packages and frameworks before setup

### Development Guidelines
- **Work order**: Follow `PLAN.md` sequentially from top to bottom
- **Progress tracking**: Update plan status and communicate progress at key milestones
- **Error documentation**: Document solutions in AGENT.md to avoid repeating issues

## Learnings & Solutions

Document solutions to issues encountered to avoid repeating mistakes:
