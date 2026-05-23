# CODING_RULES.md

## Purpose

This file defines the coding rules for the Sharon Fellowship Church of Albany website.

Codex should use this file when creating, editing, refactoring, or cleaning up code.

The goal is to keep the website:

- Clean
- Secure
- Responsive
- Accessible
- SEO-friendly
- Easy to update
- Professional quality

Do not overcomplicate the project, but do not write lazy code either.

---

## Tech Stack

Use this stack unless directly instructed otherwise:

```txt
React
Vite
React Router
CSS
Framer Motion
Lucide React

Do not use Angular.

Do not add backend systems, databases, authentication, admin dashboards, payment systems, CMS features, or unnecessary third-party tools unless directly instructed.

Keep this as a polished frontend website.

Project Structure Rules

Follow the structure from ARCHITECTURE.md.

Use these main folders:

src/pages
src/components/layout
src/components/ui
src/components/sections
src/data
src/styles
src/utils
src/hooks
src/routes

Rules:

Do not build the whole website in App.jsx.
Do not create giant files.
Do not duplicate components.
Do not create random folders without a clear purpose.
Keep pages, sections, components, data, and styles separated.
Component Rules

Components should be:

Focused
Reusable
Clearly named
Easy to read
Responsive
Accessible

Good component names:

Navbar
Footer
Hero
Button
PastorCard
ServiceCard
GalleryGrid
SectionHeader
ContactCard

Bad component names:

Thing
Box
Stuff
NewComponent
Section2
FinalSection

If a component becomes too large, split it into smaller pieces.

Pages should mostly assemble sections, not contain hundreds of lines of markup.

React Rules

Use functional components.

Use state only when needed for real interaction, such as:

Mobile menu
Dropdowns
Accordions
Gallery filters
Contact form fields

Do not add global state libraries.

Do not make the code complicated just to look advanced.

Keep React components readable.

Data Rules

Repeated content should live in src/data.

Use data files for:

Church info
Address
Phone number
Email
Social links
Service times
Pastor names
Navigation links
CTA labels
Gallery images
SEO metadata

If the same content appears in more than one place, move it to a data file.

Do not hardcode church contact info, service times, or pastor names in multiple components.

Content Accuracy Rules

Do not invent church content.

Do not invent:

Pastor bios
Pastor photos
Branch church details
Service times
Ministries
Events
Testimonies
Giving links
Doctrinal statements

Use confirmed information only.

If information is missing, use a clean placeholder or TODO.

Good:

TODO: Add confirmed branch church information.

Bad:

Our branch churches serve thousands across the world.
Naming Rules
Components

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
CSS Classes

Use clear names.

Preferred pattern:

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

Avoid names like:

box1
thing
blueArea
finalNew
Styling Rules

Use organized CSS.

Global styles should live in:

src/styles/

Recommended files:

globals.css
variables.css
typography.css
layout.css
animations.css
utilities.css

Use CSS variables for:

Colors
Fonts
Spacing
Border radius
Shadows
Transitions

Use the blue-centered design system from DESIGN.md.

Do not scatter random hex colors everywhere.

Good:

.card {
  background: var(--color-white);
  color: var(--color-charcoal);
  border-radius: var(--radius-lg);
}

Bad:

.card {
  background: #ffffff;
  color: #111827;
  border-radius: 27px;
}
Responsive Rules

Build mobile-first.

Every page must work on:

Phone
Tablet
Laptop
Desktop

Rules:

No horizontal scrolling
Text must remain readable
Buttons must be easy to tap
Cards should stack cleanly
Navbar must work on mobile
Images must resize properly
Avoid fixed widths that break mobile layout

Use flexible layouts instead of rigid desktop-only layouts.

Accessibility Rules

Accessibility is required.

Rules:

Use semantic HTML
Use one clear H1 per page
Keep heading order logical
Use real buttons for actions
Use real links for navigation
Add alt text to meaningful images
Use empty alt text for decorative images
Keep focus states visible
Make mobile menu keyboard accessible
Do not use clickable divs
Do not rely only on color
Respect reduced motion preferences

Bad:

<div onClick={openMenu}>Menu</div>

Good:

<button type="button" onClick={openMenu}>
  Menu
</button>
Link Rules

Use Link or NavLink for internal navigation:

<Link to="/contact">Contact Us</Link>

Use button for actions:

<button type="button" onClick={openMenu}>
  Open Menu
</button>

Use a for external links:

<a
  href="https://www.youtube.com/@sfcalbany"
  target="_blank"
  rel="noopener noreferrer"
>
  YouTube
</a>

External links that open in a new tab must include:

target="_blank"
rel="noopener noreferrer"

Use descriptive link text.

Good:

Watch Live
Get Directions
View Service Times
Contact Us

Bad:

Click Here
More
Go
Read
Security Rules

Do not introduce security risks.

Rules:

Do not expose API keys
Do not hardcode secrets
Do not put private files in public
Do not store sensitive data in frontend code
Avoid dangerouslySetInnerHTML
Do not add suspicious packages
Do not add unnecessary third-party scripts
Do not add tracking scripts unless directly instructed
Do not fake form submissions
Do not use random CDN scripts

If a contact form is created, it must not expose private credentials.

If there is no real form handler, do not pretend the form sends messages.

SEO Rules

SEO should be built into the structure.

Rules:

Every page should have one clear H1
Use proper H2 and H3 structure
Use semantic sections
Use real text, not text inside images
Use descriptive alt text
Use descriptive links
Use page-specific titles and descriptions
Keep URLs clean
Avoid keyword stuffing

SEO metadata should live in:

src/data/seo.js

Use SEO_ACCESSIBILITY.md for SEO details.

Image Rules

Images should be handled carefully.

Rules:

Store images in organized folders
Use descriptive file names
Add alt text
Do not stretch images
Use placeholders for missing images
Do not use fake pastor photos
Do not rely on random external image URLs
Lazy-load gallery images when useful

Good:

<img
  src="/images/gallery/sunday-worship-01.jpg"
  alt="Worship service at Sharon Fellowship Church of Albany"
  loading="lazy"
/>

Bad:

<img src="pic.jpg" />
Animation Rules

Use Framer Motion for smooth animations.

Animations should be:

Subtle
Smooth
Purposeful
Consistent
Not distracting

Use animation for:

Page entrance
Section reveal
Hero reveal
Card hover
Mobile menu transitions

Do not animate everything.

Do not create long loading animations that delay content.

Respect reduced motion preferences.

Contact Form Rules

If a contact form is added:

Use proper labels
Use accessible fields
Use basic validation
Do not expose credentials
Do not pretend to submit if no handler exists
Provide a direct email fallback

Recommended fields:

Name
Email
Phone optional
Message

Fallback text:

For the fastest response, please email us directly at sfcalbany@gmail.com.
Performance Rules

Keep the site fast.

Rules:

Avoid unnecessary libraries
Optimize images
Lazy-load gallery images
Avoid large videos loading by default
Avoid layout shift
Avoid unnecessary re-renders
Keep CSS organized
Remove unused code
Remove unused imports
Avoid massive files

Do not sacrifice performance for flashy effects.

Empty State Rules

Missing content should not break the page.

Examples:

Missing Pastor Photo

Show a clean placeholder with initials.

Empty Gallery
Gallery photos will be added soon.
Empty Branch Churches
Branch church information will be added soon.

Do not invent content just to fill space.

Cleanup Rules

Before finishing a feature:

Remove unused imports
Remove unused variables
Remove console logs
Remove dead code
Check mobile layout
Check keyboard navigation
Check image alt text
Check external links
Check SEO headings
Check that no secrets are exposed

Do not leave debugging logs in finished code.

Remove:

console.log()
console.error()
console.warn()
Dependency Rules

Allowed by default:

react
react-dom
vite
react-router-dom
framer-motion
lucide-react

Before adding any package, ask:

Is it necessary?
Is it reputable?
Is it actively maintained?
Does it add too much weight?
Can this be done with CSS or a small helper function?

Do not add random UI kits or unnecessary libraries.

Do Not Add

Do not add these unless directly instructed:

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
Fake branch church details
Fake service times
Fake testimonials
Fake giving links
Final Rule

Write code like this website will be maintained by real people later.

Keep it clean, secure, accessible, SEO-friendly, responsive, and easy to update.

The final codebase should feel professional, polished, and intentional.