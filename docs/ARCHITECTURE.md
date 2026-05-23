# ARCHITECTURE.md

## Purpose

This file defines the architecture for the Sharon Fellowship Church of Albany website.

The goal is to keep the project clean, organized, secure, reusable, responsive, and easy to update.

This should be a modern frontend project, not a messy collection of random files.

Codex should follow this structure when creating or editing code.

---

## Recommended Stack

Use this stack unless directly instructed otherwise:

- React
- Vite
- React Router
- CSS
- Framer Motion
- Lucide React

Do not use Angular for this project.

Do not add backend systems, authentication, databases, admin dashboards, payment systems, or unrelated tools unless directly instructed.

Keep the project focused on building a polished frontend website.

---

## Main Architecture Rule

Separate the project into:

- Pages
- Layout components
- Reusable UI components
- Page sections
- Shared data
- Global styles
- Utilities
- Static assets

Do not place everything inside one giant file.

Do not duplicate repeated content across multiple components.

---

## Recommended Folder Structure

```txt
sfca-website/
│
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   ├── logo-light.png
│   └── images/
│       ├── hero/
│       ├── pastors/
│       ├── gallery/
│       ├── missions/
│       └── backgrounds/
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── MainLayout.jsx
│   │   │   ├── PageWrapper.jsx
│   │   │   └── ScrollToTop.jsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Section.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   ├── PageHero.jsx
│   │   │   ├── PastorCard.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── GalleryGrid.jsx
│   │   │   ├── ContactCard.jsx
│   │   │   └── Reveal.jsx
│   │   │
│   │   └── sections/
│   │       ├── home/
│   │       ├── about/
│   │       ├── services/
│   │       ├── beliefs/
│   │       ├── missions/
│   │       ├── gallery/
│   │       ├── contact/
│   │       └── live/
│   │
│   ├── data/
│   │   ├── churchInfo.js
│   │   ├── navigation.js
│   │   ├── serviceTimes.js
│   │   ├── pastors.js
│   │   ├── beliefs.js
│   │   ├── missions.js
│   │   ├── branchChurches.js
│   │   ├── gallery.js
│   │   ├── seo.js
│   │   └── ctas.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── WhatWeBelieve.jsx
│   │   ├── Missions.jsx
│   │   ├── BranchChurches.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   ├── Live.jsx
│   │   └── NotFound.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   ├── typography.css
│   │   ├── layout.css
│   │   ├── animations.css
│   │   └── utilities.css
│   │
│   ├── utils/
│   │   ├── externalLinks.js
│   │   ├── seoHelpers.js
│   │   └── constants.js
│   │
│   ├── hooks/
│   │   ├── useReducedMotion.js
│   │   └── useScrollDirection.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── docs/
│   ├── PROJECT_CONTEXT.md
│   ├── ARCHITECTURE.md
│   ├── CODING_RULES.md
│   ├── DESIGN.md
│   ├── CONTENT_GUIDE.md
│   ├── SEO_ACCESSIBILITY.md
│   ├── FEATURE_LOG.md
│   └── pages/
│       ├── HOME.md
│       ├── ABOUT.md
│       ├── SERVICES.md
│       ├── WHAT_WE_BELIEVE.md
│       ├── MISSIONS.md
│       ├── BRANCH_CHURCHES.md
│       ├── GALLERY.md
│       ├── CONTACT.md
│       └── LIVE.md
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md

Folder Responsibilities
public/

Stores static assets that are safe to expose publicly.

Use this for:

Logos
Favicons
Pastor images
Gallery images
Hero images
Background images

Rules:

Do not store secrets here.
Do not store private files here.
Use clear file names.
Do not use fake pastor photos.
Use placeholders when real images are missing.
src/components/layout/

Stores site-wide layout components.

Use for:

Navbar
Footer
Main layout wrapper
Page transition wrapper
Scroll-to-top behavior

These components appear across multiple pages.

Navbar and footer should use data files instead of hardcoding repeated information.

src/components/ui/

Stores reusable UI components.

Use for:

Buttons
Cards
Containers
Sections
Page heroes
Section headers
Pastor cards
Service cards
Gallery grids
Contact cards
Reveal animations

UI components should be reusable and flexible.

Do not hardcode page-specific text inside generic UI components.

src/components/sections/

Stores larger page sections.

Organize sections by page or feature.

Examples:

sections/home/Hero.jsx
sections/home/ServiceTimesPreview.jsx
sections/home/LeadershipPreview.jsx
sections/about/LeadershipSection.jsx
sections/contact/ContactInfo.jsx
sections/live/LiveSection.jsx

Pages should import and assemble these sections.

Do not put all section code directly inside the page file if it becomes large.

src/data/

Stores repeated content and structured site data.

Use this for:

Church info
Navigation links
Service times
Pastors
Beliefs
Missions
Branch churches
Gallery images
SEO metadata
CTA labels

Important rule:

If the same content appears in more than one place, store it in src/data/.

Do not duplicate church contact info, service times, social links, or pastor names across multiple files.

src/pages/

Stores route-level pages.

Each page should assemble sections and page-specific layout.

Pages should stay readable.

Pages should not become giant files full of every card, image, and paragraph.

Required pages:

Home.jsx
About.jsx
Services.jsx
WhatWeBelieve.jsx
Missions.jsx
BranchChurches.jsx
Gallery.jsx
Contact.jsx
Live.jsx
NotFound.jsx
src/routes/

Stores route definitions.

Use:

src/routes/AppRoutes.jsx

Required routes:

/                  Home
/about             About
/services          Services
/what-we-believe   What We Believe
/missions          Missions
/branch-churches   Branch Churches
/gallery           Gallery
/contact           Contact
/live              Live
*                  Not Found

Use React Router for internal navigation.

Use clean lowercase URLs.

src/styles/

Stores global styling files.

Recommended files:

globals.css
variables.css
typography.css
layout.css
animations.css
utilities.css

Use CSS variables for colors, spacing, shadows, border radius, transitions, and typography.

Do not scatter random hex colors throughout the project.

The design system should stay consistent.

src/utils/

Stores small helper functions.

Use for:

Safe external link handling
SEO helper functions
Shared constants
Formatting helpers if needed

Do not place React components in utils.

src/hooks/

Stores reusable React hooks.

Use only when the logic is reusable.

Recommended hooks:

useReducedMotion.js
useScrollDirection.js

Do not create hooks just to make the project look complicated.

Application Entry Files
src/main.jsx

This should only:

Import React
Import ReactDOM
Import App
Import global CSS
Render the app

Do not put page content here.

src/App.jsx

This should stay minimal.

Recommended structure:

import AppRoutes from "./routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;

Do not build the whole website inside App.jsx.

Layout Pattern

Use a shared layout so the navbar and footer are not repeated on every page.

Recommended structure:

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

All main pages should render inside this shared layout.

The main element should contain the page’s primary content.

Page Pattern

Pages should assemble sections.

Example:

import Hero from "../components/sections/home/Hero";
import ServiceTimesPreview from "../components/sections/home/ServiceTimesPreview";
import PurposeMottoValues from "../components/sections/home/PurposeMottoValues";
import ContactCTA from "../components/sections/home/ContactCTA";

function Home() {
  return (
    <>
      <Hero />
      <ServiceTimesPreview />
      <PurposeMottoValues />
      <ContactCTA />
    </>
  );
}

export default Home;

Good page files are readable and high-level.

Bad page files contain hundreds of lines of repeated card markup.

Component Rules

Components should be:

Focused
Reusable
Named clearly
Easy to understand
Responsive
Accessible
Styled consistently

Avoid giant components.

If a component becomes too large, split it into smaller components.

Data Rules

Use data files for repeated content.

churchInfo.js

Should store:

Church name
Short name
Address
Phone
Email
Social links
navigation.js

Should store:

Navbar links
Dropdown links
Footer quick links
Live CTA flag if needed
serviceTimes.js

Should store:

Telugu service
English service
Malayalam service
Children’s church
Any weekly gatherings
pastors.js

Should store:

Pastor names
Roles
Image paths
Alt text
Placeholder/initials if image is missing
beliefs.js

Should store:

Belief titles
Summaries
Full text if needed
gallery.js

Should store:

Image paths
Alt text
Categories if filters are used
seo.js

Should store:

Page titles
Meta descriptions
Page paths
Open Graph text if needed
Routing Rules

Use React Router.

Use Link or NavLink for internal links.

Good:

<Link to="/contact">Contact Us</Link>

Do not use this for internal navigation:

<a href="/contact">Contact Us</a>

Use regular anchor tags only for:

External links
Email links
Phone links
Map links
External Link Rules

External links that open in a new tab must use:

target="_blank"
rel="noopener noreferrer"

Use safe links for:

Instagram
YouTube
Facebook
Google Maps

Do not create broken or fake links.

Image Rules

Images should be organized in public/images.

Rules:

Use descriptive file names.
Use alt text for meaningful images.
Do not stretch images.
Use placeholders when needed.
Do not use fake pastor photos.
Do not rely on random external image URLs.
Keep image structure easy to update later.
Styling Rules

Use a consistent CSS system.

Use variables for:

Colors
Fonts
Spacing
Border radius
Shadows
Transitions

Example:

:root {
  --color-navy: #071b33;
  --color-primary-blue: #1d5fdb;
  --color-soft-blue: #eaf3ff;
  --color-white: #ffffff;
  --color-off-white: #f8fafc;
  --color-charcoal: #111827;
  --color-muted-text: #5b6472;

  --container-width: 1180px;
  --section-padding: clamp(4rem, 8vw, 7rem);

  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --radius-xl: 2rem;

  --transition-base: 260ms ease;
}

Do not use random one-off styling everywhere.

CSS Class Naming

Use clear class names.

Recommended style:

component
component__element
component--modifier

Examples:

hero
hero__content
hero__actions

pastor-card
pastor-card__image
pastor-card__content

service-card
service-card__time
service-card__title

Avoid:

box1
thing
newstuff
final-section
blue-area-2
Animation Rules

Use Framer Motion for page and scroll animations.

Recommended components:

PageWrapper.jsx
Reveal.jsx

Animation should be:

Smooth
Subtle
Consistent
Fast enough to feel responsive
Not distracting

Respect reduced motion preferences.

Do not animate everything for no reason.

Accessibility Rules

Accessibility must be part of the architecture.

Rules:

Use semantic HTML.
Use one clear H1 per page.
Keep heading order logical.
Use alt text for meaningful images.
Use visible focus states.
Buttons must be keyboard accessible.
Mobile menu must be keyboard accessible.
Do not use clickable divs.
Use ARIA only when semantic HTML is not enough.

Good:

<button type="button">Open menu</button>

Bad:

<div onClick={openMenu}>Open menu</div>
SEO Rules

SEO should be structured from the beginning.

Rules:

Each page should have a clear title.
Each page should have a meta description.
Each page should have one H1.
Use proper H2/H3 structure.
Use semantic sections.
Use real text instead of text inside images.
Use descriptive alt text.
Use descriptive link text.
Avoid keyword stuffing.

SEO data should live in src/data/seo.js.

Security Rules

The frontend should avoid common security issues.

Rules:

Do not expose API keys.
Do not hardcode secrets.
Do not store private files in public.
Avoid dangerouslySetInnerHTML.
Do not add suspicious packages.
Do not add unnecessary third-party scripts.
Use safe external link attributes.
Do not fake form submissions.
Do not store sensitive user data in frontend code.

If a contact form is added, it must be honest about whether it actually sends messages.

Contact Form Rules

If a contact form exists:

Use proper labels.
Use basic validation.
Do not expose credentials.
Do not pretend to submit if no handler exists.
Provide a fallback email link.
Keep the form simple and accessible.

Recommended fields:

Name
Email
Phone optional
Message
Performance Rules

The site should feel fast.

Rules:

Keep dependencies minimal.
Optimize images.
Use lazy loading for gallery images when useful.
Avoid large videos loading by default.
Avoid unnecessary re-renders.
Avoid layout shift.
Keep CSS organized.
Remove unused code and imports.
Avoid massive single files.
Empty State Rules

Missing content should not break the site.

Examples:

Missing Pastor Photo

Show initials or a clean placeholder.

Empty Branch Churches

Show:

Branch church information will be added soon.
Empty Gallery

Show:

Gallery photos will be added soon.

Do not invent missing content.

Naming Conventions
React Components

Use PascalCase:

Navbar.jsx
PastorCard.jsx
ServiceCard.jsx
Data and Utility Files

Use camelCase:

churchInfo.js
serviceTimes.js
seoHelpers.js
Folders

Use lowercase:

components
sections
styles
data
utils
hooks

Use clear descriptive names.

Import Rules

Keep imports organized.

Recommended order:

// Library imports
import { Link } from "react-router-dom";

// Data imports
import { churchInfo } from "../../data/churchInfo";

// Component imports
import Button from "../ui/Button";

Remove unused imports.

Avoid messy import sections.

Build Order

Recommended build order:

1. Project setup
2. Global styles and variables
3. Data files
4. Layout components
5. Navbar
6. Footer
7. Reusable UI components
8. Home page
9. Inner page hero
10. About page
11. Services page
12. What We Believe page
13. Missions page
14. Branch Churches page
15. Gallery page
16. Contact page
17. Live page
18. NotFound page
19. SEO pass
20. Accessibility pass
21. Responsive/mobile polish
22. Security/code cleanup
23. Performance cleanup
Do Not Add

Do not add:

Backend server
Database
Authentication
Admin dashboard
Payment system
User accounts
CMS
Analytics scripts
Random UI libraries
Fake APIs
Fake pastor photos
Fake branch church information

Only add these if directly instructed.

Final Architecture Rule

Build this as a clean, component-driven React frontend.

Prioritize:

Reusable components
Shared data files
Clean routing
Organized styles
Strong SEO
Accessibility
Security
Performance
Mobile responsiveness
Easy future updates

The final codebase should feel like a professional frontend project for Sharon Fellowship Church of Albany.