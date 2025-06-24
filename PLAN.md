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

### Phase 1: Development Tools Setup
**Priority**: HIGH | **Status**: TODO

#### 1.1 Code Quality Tools
- [ ] **Setup Prettier**: Create .prettierrc config (single quotes, trailing commas)
- [ ] **Setup ESLint**: Add canonical rules with import ordering and unicorn plugins
- [ ] **Update package.json scripts**: Add lint, lint:fix, type-check, test commands
- [ ] **Setup testing framework**: Choose and configure testing solution (Vitest recommended for Astro)

#### 1.2 Verification
- [ ] Run `yarn lint` successfully
- [ ] Run `yarn type-check` successfully
- [ ] Verify formatting with `yarn prettier --check .`

---

### Phase 2: Dutch Content Development
**Priority**: HIGH | **Status**: TODO

#### 2.1 Homepage Content Refinement
- [ ] **Replace Lorem Ipsum hero section** with authentic Pixeau messaging:
  - Professional title reflecting core business value
  - Compelling description of services/expertise
  - Clear call-to-action buttons with proper links
- [ ] **Review and enhance existing sections**:
  - Services (Software Ontwikkeling, Nearshoring, AI) - content looks good
  - Client logos - verify all SVGs exist in /public/clients/
  - Technology logos - verify all SVGs exist in /public/tech/

#### 2.2 Additional Pages Content
- [ ] **Contact page**: Complete contact information, forms, location
- [ ] **About Us (Over Ons)**: Company story, team, mission/vision
- [ ] **Terms (Algemene Voorwaarden)**: Legal terms and conditions
- [ ] **Service detail pages** in /diensten/ subdirectory:
  - Software development details
  - Nearshoring details
  - AI services details

---

### Phase 3: English Translation
**Priority**: MEDIUM | **Status**: TODO

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

### Hero Section Identified Issues:
- **Current**: Lorem ipsum placeholder text ("Anim aute id magna aliqua...")
- **Need**: Authentic Pixeau business messaging reflecting:
  - Technical expertise (15+ years experience)
  - Core services (Software Development, Nearshoring, AI)
  - Professional positioning in Dutch market

### Development Standards:
- Follow existing component patterns
- Maintain Tailwind CSS + React architecture
- Ensure responsive design
- Keep i18n routing structure

---

## Executor's Feedback or Assistance Requests

*This section will be updated by the Executor during implementation phases*
