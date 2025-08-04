# Pixeau.nl Marketing Website Development Plan

## Project Overview
**Goal**: Create a professional marketing website for Pixeau.nl in Dutch and English (UK) with proper development tools, content, and deployment.

## Current Status / Progress Tracking

### ✅ Phase 0: Foundation Setup (COMPLETED)
- [x] Astro 5.8.0 + React + Tailwind CSS 4.1.7 framework
- [x] Internationalization (i18n) with Dutch (nl) and English (en) locales
- [x] Basic component architecture (HeroBlock, LogoCloud, FeatureBoxes)
- [x] Multi-page structure with locale routing

---

## 🚀 NEXT PHASES TO EXECUTE

### ✅ Phase 1: Development Tools Setup (COMPLETED)
**Priority**: HIGH | **Status**: COMPLETED

#### 1.1 Code Quality Tools
- [x] **Setup Prettier**: Create .prettierrc config (single quotes, trailing commas)
- [x] **Setup ESLint**: Add canonical rules with import ordering and unicorn plugins
- [x] **Update package.json scripts**: Add lint, lint:fix, type-check, test commands
- [x] **Setup testing framework**: Choose and configure testing solution (Vitest recommended for Astro)

#### 1.2 Verification
- [x] **Fix remaining lint issues**: 16 ESLint errors (unused imports, parsing errors)
- [x] **Clean up TypeScript warnings**: Address remaining TS issues in source files
- [x] Run `yarn type-check` successfully (git-exclude excluded)
- [x] Verify formatting with `yarn prettier --check .`

---

### ✅ Phase 2: Dutch Content Development
**Priority**: HIGH | **Status**: COMPLETED

#### 2.1 Homepage Hero Carousel Implementation
- [x] **Create new HeroCarousel component** with 3 slides:
  - Slide 1: Software Ontwikkeling service
  - Slide 2: Nearshoring service
  - Slide 3: AI voor Efficiëntere Organisaties service
- [x] **Implement carousel functionality**:
  - Tailwind-based carousel with smooth transitions
  - Navigation dots/indicators
  - Previous/Next arrow controls
  - Auto-advance with pause on hover
- [x] **Replace current HeroBlock** with new HeroCarousel on homepage
- [x] **Fix carousel layout issues**:
  - Update width constraints to match FeatureBoxes: `mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8` ✅
  - Maintain consistent aspect ratio across slides to prevent height changes ✅
  - Ensure carousel expands to full content width like other components ✅
- [x] **Fix mobile viewport indicator positioning**:
  - Single indicator system still buggy at 1020-1040px viewport range ✅
  - Current lg breakpoint (1024px) causes positioning issues at transition ✅
  - Need different responsive approach that doesn't rely on lg breakpoint ✅
  - Consider using different breakpoint or static positioning below certain width ✅
  - Ensure smooth behavior across entire 320px-1200px+ range ✅

#### 2.2 Homepage Content Refinement  
- [x] **Review and enhance existing sections**:
  - Services (Software Ontwikkeling, Nearshoring, AI) - content looks good
  - Client logos - verify all SVGs exist in /public/clients/ ✅
  - Technology logos - verify all SVGs exist in /public/tech/ ✅

#### 2.3 Additional Pages Content
- [ ] **Contact page**: Complete contact information, forms, location
- [ ] **About Us (Over Ons)**: Company story, team, mission/vision
- [ ] **Terms (Algemene Voorwaarden)**: Legal terms and conditions
- [ ] **Service detail pages** in /diensten/ subdirectory:
- Software development details
- Nearshoring details  
- AI services details

#### 2.4 Hero Carousel Content Creation
- [x] **Create compelling content for each slide**:
  - Professional headlines for each service ✅
  - Engaging descriptions that highlight unique value propositions ✅
  - Clear call-to-action buttons linking to service detail pages ✅
  - Consistent visual design across all three slides ✅
- [x] **Ensure proper Dutch language quality**:
  - Professional copywriting ✅
  - SEO-optimized content ✅
  - Brand voice consistency ✅
- [x] **Align carousel content with service pages**:
  - Nearshoring: Update from "Europa" to "het VK/Verenigd Koninkrijk" to match service page ✅
  - Software Development: Verify content consistency with service page ✅
  - AI Services: Verify content consistency with service page ✅

---

### Phase 3: English Translation
**Priority**: HIGH | **Status**: TODO

#### 3.1 Homepage Translation
- [ ] Translate refined Dutch hero section to English (UK)
- [ ] Translate all homepage sections (services, client descriptions)
- [ ] Create proper CTAs and navigation in English

#### 3.2 Additional Pages Translation
- [ ] Contact page translation
- [ ] About Us translation
- [ ] Terms translation
- [ ] Service detail pages translation

#### 3.3 Content Quality Review
- [ ] Professional copywriting review
- [ ] SEO optimization for both languages
- [ ] Consistency check across languages

---

### Phase 4: Deployment Setup
**Priority**: MEDIUM | **Status**: TODO

#### 4.1 Static Build Configuration
- [ ] Configure Astro for static site generation
- [ ] Test build process: `yarn build`
- [ ] Verify all routes work correctly in build

#### 4.2 Cloudflare Deployment
- [ ] Setup Cloudflare Pages project
- [ ] Configure Wrangler for deployment
- [ ] Setup custom domain (pixeau.nl)
- [ ] Configure SSL and DNS
- [ ] Test production deployment

#### 4.3 CI/CD Pipeline
- [ ] Automate deployment from git repository
- [ ] Setup staging environment
- [ ] Performance and SEO validation

---

### Phase 5: Final Quality Assurance
**Priority**: MEDIUM | **Status**: TODO

#### 5.1 Testing & Validation
- [ ] Cross-browser testing
- [ ] Mobile responsiveness verification
- [ ] Performance optimization (Lighthouse scores)
- [ ] SEO validation (meta tags, sitemap, etc.)

#### 5.2 Content Review
- [ ] Professional proofreading
- [ ] Brand consistency check
- [ ] Legal compliance verification

---

## Technical Implementation Notes

### Content Priorities by Language:
1. **Dutch (nl)**: Primary language - must be complete and professional
2. **English (en)**: Secondary - professional translation of Dutch content

### Hero Carousel Technical Requirements:
- **Component**: New HeroCarousel.astro component using Tailwind CSS
- **Functionality**: 3-slide carousel showcasing core services
- **Features**: Auto-advance, navigation controls, responsive design
- **Integration**: Replace current HeroBlock on both Dutch and English homepages
- **Content**: Service-specific messaging with clear CTAs

### Current Hero Section Status:
- **Current**: Simple HeroBlock with placeholder text ("Anim aute id magna aliqua...")
- **Planned**: Dynamic 3-slide carousel highlighting:
  - Software Development (15+ years experience)
  - Nearshoring (European talent scaling)  
  - AI Solutions (efficiency & cost reduction)

### Development Standards:
- Follow existing component patterns
- Maintain Tailwind CSS + React architecture
- Ensure responsive design
- Keep i18n routing structure

---

## Executor's Feedback or Assistance Requests

### Phase 2 Progress Summary (Executor Update)
**Status**: 🔄 **IN PROGRESS** - Hero carousel implementation with refinements needed

**What was accomplished:**
- ✅ Created HeroCarousel.astro component with TypeScript support
- ✅ Implemented 3-slide carousel featuring all core services
- ✅ Added navigation controls (dots, prev/next arrows, auto-advance)
- ✅ Created compelling Dutch content for each service slide
- ✅ Replaced HeroBlock with HeroCarousel in Dutch homepage
- ✅ Verified all client and tech logo assets exist
- ✅ Fixed TypeScript errors and tested build process

**Current Status:**
- TypeScript check: ✅ **0 errors** (only minor warnings in other components)  
- Build: ✅ **Successful** - all 16 pages generated
- Carousel functionality: ✅ **Working** - auto-advance, navigation, responsive
- Dutch content: ✅ **Professional quality** with proper CTAs

**Phase 2 Complete ✅**
- ✅ **Fix carousel width/layout** - Match FeatureBoxes responsive width constraints
- ✅ **Fix aspect ratio consistency** - Prevent height changes between slides  
- ✅ **Content alignment** - Update nearshoring from "Europa" to "het VK" per service page
- ✅ **Fix indicator positioning** - Used xl breakpoint (1280px) instead of lg (1024px) to avoid transition issues
- ✅ **Ready for Phase 3** - English Translation

### Phase 1 Completion Summary (Executor Update)
**Status**: ✅ **COMPLETED** - All development tools successfully configured

**What was accomplished:**
- ✅ Prettier configured with Astro support (.prettierrc + prettier-plugin-astro)
- ✅ ESLint configured with TypeScript, import ordering, unicorn rules, and Astro support
- ✅ Vitest testing framework setup with jsdom environment
- ✅ Package.json scripts added (lint, lint:fix, type-check, test, format)
- ✅ **Fixed git-exclude directory exclusion** from linting and type checking
- ✅ **Fixed parsing errors** in source files (JSX expression issues)
- ✅ **Fixed consts.ts module** by adding proper exports
- ✅ **Resolved all unused imports** (16 ESLint errors fixed)
- ✅ **Fixed Tailwind CSS plugin type issue** in astro.config.mjs
- ✅ **Fixed Alpine.js script warnings** in FrequentlyAskedBlock component

**Current Status:**
- TypeScript check: ✅ **0 errors, 0 warnings** (all issues resolved)
- ESLint: ✅ **0 errors** (all issues resolved)
- Build: ✅ **Successful** (all pages generated)
- Development tools fully functional

**Final Status:**
- ✅ All development tools fully configured and working
- ✅ Zero lint errors across entire source code
- ✅ Zero TypeScript errors or warnings
- ✅ Full build pipeline functional

**Next recommended action**: ✅ **Ready for Phase 2** - Dutch Content Development

### ✅ Phase 1b: Lint & TypeScript Cleanup (COMPLETED)
**Priority**: HIGH | **Status**: COMPLETED

#### 1b.1 ESLint Issues Resolution
- [x] **Remove unused imports** across all source files (16 errors remaining)
- [x] **Fix parsing errors** in Dutch service pages 
- [x] **Clean up unused variables** in RSS and other files

#### 1b.2 TypeScript Issues Resolution  
- [x] **Address any remaining TS warnings** in source files
- [x] **Verify all imports resolve correctly**
- [x] **Run full build to ensure no compilation errors**

#### 1b.3 Final Verification
- [x] `yarn lint src/` runs with 0 errors
- [x] `yarn type-check` runs with 0 errors  
- [x] `yarn build` completes successfully
