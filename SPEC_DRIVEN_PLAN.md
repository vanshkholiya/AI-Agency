# Spec-Driven Website Plan

## Objective

Build a professional AI agency website that can sell consulting services, showcase reusable AI solutions, and launch multiple AI products across different industries over time.

## Current Stage

The repo is at an early website prototype stage. It has a homepage, product cards, service cards, solution cards, a contact form, a simple admin view, and a demo chat widget. The next step is to turn this prototype into a clear, scalable business website with defined offers, stronger conversion paths, and cleaner technical structure.

## Finalized Target Tech Stack

The current Flask/HTML/CSS/JavaScript implementation should be treated as a prototype and reference, not the final production architecture.

Final target stack:

- Frontend: Next.js with React and TypeScript.
- Styling: Tailwind CSS with a small reusable design system.
- Backend: FastAPI with Python.
- Database: PostgreSQL.
- ORM / Data Layer: SQLAlchemy or SQLModel.
- AI Integration Layer: Python service modules behind FastAPI APIs.
- Authentication: Add later for admin and client dashboards.
- File Storage: S3-compatible storage later for uploaded documents and product assets.
- Background Jobs: Redis plus Celery, RQ, or Dramatiq later for long-running AI tasks.
- Deployment: Frontend and backend deployed independently.

Why this stack:

- Next.js is React with production website structure, routing, SEO, and page performance support.
- React remains highly relevant for enterprise frontend work, and Next.js lets the project use React in a structured way.
- FastAPI keeps the backend Python-first, which fits AI, automation, document processing, model APIs, and data workflows.
- PostgreSQL is reliable for leads, products, users, admin data, subscriptions, and future product data.
- Separating frontend, backend, data, and AI services avoids painful restructuring later.

## Architecture Principles

Keep the system modular from the beginning, but do not overcomplicate it.

Required principles:

- Frontend, backend, database, and AI integrations must be separate concerns.
- The frontend should not contain business logic that belongs in the backend.
- The backend should expose clear APIs for leads, products, services, chat, admin, and future AI features.
- Product and service data should be structured, not hardcoded across many components.
- Each future product should be independently addable without rewriting the whole website.
- Each future service should be independently addable without changing unrelated pages.
- AI integrations should be wrapped behind internal service interfaces so providers can change later.
- Admin functionality should be separated from public website functionality.
- Environment variables must be used for secrets, database URLs, API keys, and deployment settings.
- Avoid unnecessary complexity in the first version; build clear modules before advanced infrastructure.

## Target Repository Structure

Future implementation should move toward this structure:

```text
AI-Agency/
  apps/
    web/                 # Next.js frontend
    api/                 # FastAPI backend
  packages/
    shared/              # Shared types, constants, schemas if needed
  docs/
    PROJECT_OBJECTIVE.md
    SPEC_DRIVEN_PLAN.md
    AUDIT_REPORT.md
  infra/
    docker/
    deployment-notes/
```

Frontend structure:

```text
apps/web/
  app/
    page.tsx
    services/
    products/
    solutions/
    industries/
    contact/
    admin/
  components/
    layout/
    sections/
    cards/
    forms/
    ui/
  data/
    services.ts
    products.ts
    industries.ts
  lib/
    api-client.ts
```

Backend structure:

```text
apps/api/
  app/
    main.py
    core/
      config.py
      security.py
    api/
      routes/
        leads.py
        products.py
        services.py
        chat.py
        admin.py
    models/
    schemas/
    services/
      ai/
      leads/
      products/
    db/
      session.py
      migrations/
```

## Product And Service Model

Products and services must be connected but not mixed.

Definitions:

- Service: Custom work delivered for a client, such as AI chatbot development or workflow automation.
- Product: A reusable AI tool, platform, template, or packaged solution that can be sold repeatedly.
- Solution: A business problem solved using one or more services or products.
- Industry: A market context where products and services can be positioned.
- Case Study: Proof that a solution worked or a demo showing how it would work.

Developer rule:

- Do not duplicate the same item manually in many places.
- Create structured records for services, products, industries, and use cases.
- Connect them through IDs or references.
- Example: one product can belong to multiple industries and can be powered by one or more services.

Suggested product status values:

- Concept
- Prototype
- Beta
- Live
- Custom Build

Suggested CTAs:

- Book A Call
- Request Demo
- Start A Project
- Join Beta
- Discuss Customization

## AI Integration Direction

The website should be ready for modern AI product launches without tying the system to one provider too early.

Use FastAPI as the main AI gateway.

Possible AI integration patterns:

- Direct LLM APIs for chat, content, summarization, and workflow tools.
- Retrieval augmented generation for document assistants and knowledge bases.
- Tool/function calling for business workflows.
- MCP-compatible architecture later for connecting external tools and data sources.
- Agent workflows only where they create real product value.

Developer rule:

- Keep AI provider code inside backend service modules.
- Do not call external AI providers directly from the public frontend.
- Keep prompts, tool definitions, and model configuration versioned and organized.
- Design APIs so AI features can be tested independently.

## Phase 1: Business And Positioning Spec

Define what the agency sells before expanding the UI.

Deliverables:

- Agency name and brand positioning.
- Primary audience segments.
- Core service categories.
- Initial product categories.
- Industry/use-case categories.
- Main conversion goal.
- Secondary conversion goals.

Decisions Needed:

- Is the business positioned as premium consulting, fast automation delivery, AI product studio, or a mix?
- What is the first market to target for early sales?
- What is the first product or service package to promote?

## Phase 2: Website Information Architecture Spec

Define the website structure so the project can grow without becoming messy.

Recommended structure:

- Home
- Services
- Products
- Solutions / Use Cases
- Industries
- Case Studies
- About
- Contact / Book A Call
- Admin / Leads

Deliverables:

- Sitemap.
- Section-by-section page purpose.
- Navigation rules.
- CTA map for every page or section.

## Phase 3: Offer And Content Spec

Replace generic AI wording with market-ready offers.

Deliverables:

- Homepage hero copy.
- Service descriptions with outcomes, not only features.
- Product cards with target users, use cases, and CTA.
- Industry-specific use cases.
- Trust-building content such as process, FAQs, proof points, and example results.
- Contact form fields aligned with sales qualification.

## Phase 4: UX And Visual Design Spec

Create a professional agency experience that feels credible, clear, and easy to scan.

Deliverables:

- Visual direction and brand system.
- Typography scale.
- Color palette.
- Button and card styles.
- Responsive layout rules.
- Reusable section patterns.
- Lead-focused homepage flow.

Key UX Goals:

- Make the first screen clearly explain what the agency does.
- Make products and services feel organized, not mixed together.
- Make every CTA lead toward consultation, demo, or inquiry.
- Make the site usable on mobile without layout crowding.

## Phase 5: Technical Foundation Spec

Replace the prototype foundation with a professional frontend/backend structure so future additions are easier.

Deliverables:

- Next.js frontend scaffold.
- FastAPI backend scaffold.
- PostgreSQL database setup.
- Environment-based backend configuration.
- Shared naming conventions for products, services, industries, and leads.
- Organized frontend components and backend routes.
- Basic accessibility improvements.
- Clear local setup instructions.
- Migration path from current prototype content into the new structure.

## Phase 6: Lead Capture And Admin Spec

Turn the website into a sales intake system.

Deliverables:

- Improved contact form.
- Lead fields such as company, budget range, project type, timeline, and preferred contact method.
- Thank-you confirmation page or message.
- Admin page with readable lead table.
- Basic admin protection before deployment.
- Email notification or CRM integration later.

## Phase 7: Product Launch System Spec

Prepare the website to launch multiple products over time.

Deliverables:

- Product catalog structure.
- Product detail page template.
- Product status labels such as Concept, Beta, Live, Custom Build.
- Product CTAs such as Book Demo, Request Access, Start Project.
- Reusable product data source later, such as JSON, database, or CMS.

## Phase 8: Launch Readiness Spec

Prepare for real market use.

Deliverables:

- SEO metadata.
- Performance check.
- Mobile QA.
- Form and admin testing.
- Deployment target decision.
- Privacy policy and basic legal pages.
- Analytics setup.

## Immediate Next Step

Before writing the new Next.js/FastAPI implementation, finalize the Phase 1 business and positioning spec. Once that is clear, scaffold the professional project structure and migrate only the useful prototype content into the new architecture.
