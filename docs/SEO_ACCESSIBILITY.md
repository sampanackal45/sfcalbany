# SEO_ACCESSIBILITY.md

## Purpose

This file defines the SEO and accessibility standards for the Sharon Fellowship Church of Albany website.

The website should be easy to find, easy to understand, easy to navigate, and accessible to all users.

Codex should use this file when building page structure, headings, metadata, image alt text, navigation, buttons, forms, and content sections.

---

## SEO Goal

The website should be optimized for people searching for a Christian church in or around Albany, NY.

The site should especially target:

- Christians looking for a church near Albany
- Families looking for a church community
- New visitors looking for Sunday service times
- People looking for worship services near Albany
- People looking for an Indian / Malayalam / Telugu / English church
- People in the Albany Capital Region
- People near the broader tri-state/upstate area around Albany
- People looking for livestream worship services

The website should feel welcoming to both committed Christians and anyone searching for a church home.

---

## Local SEO Focus

The website should clearly connect SFCA with Albany, NY and the surrounding region.

Important location phrases:

- Albany, NY
- Albany church
- Church in Albany NY
- Churches near Albany NY
- Christian church Albany NY
- Worship service Albany NY
- Church near Western Ave Albany
- Capital Region church
- Upstate New York church
- Indian church Albany NY
- Malayalam church Albany
- Telugu church Albany
- English church service Albany
- Pentecostal church Albany NY

Use these naturally. Do not keyword stuff.

The content should sound human and welcoming, not robotic.

---

## Primary SEO Keywords

Use these naturally across the website:

```txt
Sharon Fellowship Church of Albany
SFCA Albany
Sharon Fellowship Albany
Albany church
Church in Albany NY
Christian church Albany NY
Pentecostal church Albany NY
Indian church Albany NY
Malayalam church Albany
Telugu church Albany
English service Albany NY
Worship service Albany NY
Sunday service Albany NY
Church near Albany NY
Capital Region church

Audience Keywords

The website should also naturally support searches from people looking for:

church for families in Albany
church for students in Albany
church for youth in Albany
church with English service Albany
church with Malayalam service Albany
church with Telugu service Albany
church livestream Albany NY
Sunday worship Albany
Christian community Albany NY

Use these only where they make sense.

SEO Writing Rules

When writing website copy:

Keep it natural
Keep it welcoming
Mention Albany where appropriate
Mention service times clearly
Mention the church name clearly
Avoid stuffing keywords
Avoid fake claims
Avoid vague church language with no useful info
Make the website useful for first-time visitors
Use real text, not text inside images
Keep paragraphs short and readable
Use headings that describe the section clearly

Good:

Join us for Sunday worship at Sharon Fellowship Church of Albany, located at 1781 Western Ave in Albany, NY.

Bad:

Albany church Albany NY church Christian church Albany Pentecostal church Albany worship Albany.

Page Title Rules

Every page should have a clear SEO title.

Recommended format:

Page Name | Sharon Fellowship Church of Albany

Examples:

Home | Sharon Fellowship Church of Albany
About | Sharon Fellowship Church of Albany
Services | Sharon Fellowship Church of Albany
What We Believe | Sharon Fellowship Church of Albany
Missions | Sharon Fellowship Church of Albany
Gallery | Sharon Fellowship Church of Albany
Contact | Sharon Fellowship Church of Albany
Live | Sharon Fellowship Church of Albany

The homepage can use:

Sharon Fellowship Church of Albany | Christian Church in Albany, NY

Meta Description Rules

Each page should have a unique meta description.

Rules:

Keep descriptions clear and natural
Mention the church name when useful
Mention Albany, NY when useful
Keep it around 140–160 characters when possible
Do not repeat the same description for every page
Do not keyword stuff

Example homepage description:

Welcome to Sharon Fellowship Church of Albany, a Christian church in Albany, NY. Join us for Sunday worship, community, and online services.

Example contact page description:

Contact Sharon Fellowship Church of Albany. Find our address, phone number, email, service information, and directions to our church in Albany, NY.
Required SEO Data Structure

SEO metadata should live in:

src/data/seo.js

Suggested structure:

export const seo = {
  home: {
    title: "Sharon Fellowship Church of Albany | Christian Church in Albany, NY",
    description:
      "Welcome to Sharon Fellowship Church of Albany, a Christian church in Albany, NY. Join us for Sunday worship, community, and online services.",
    path: "/",
  },

  about: {
    title: "About | Sharon Fellowship Church of Albany",
    description:
      "Learn more about Sharon Fellowship Church of Albany, our church family, leadership, values, and worship community in Albany, NY.",
    path: "/about",
  },

  services: {
    title: "Services | Sharon Fellowship Church of Albany",
    description:
      "View Sunday service times and weekly gatherings at Sharon Fellowship Church of Albany in Albany, NY.",
    path: "/services",
  },

  whatWeBelieve: {
    title: "What We Believe | Sharon Fellowship Church of Albany",
    description:
      "Read about the faith, beliefs, and biblical foundation of Sharon Fellowship Church of Albany.",
    path: "/what-we-believe",
  },

  missions: {
    title: "Missions | Sharon Fellowship Church of Albany",
    description:
      "Learn about the missions, outreach, and service work of Sharon Fellowship Church of Albany.",
    path: "/missions",
  },

  branchChurches: {
    title: "Branch Churches | Sharon Fellowship Church of Albany",
    description:
      "View branch church information connected with Sharon Fellowship Church of Albany.",
    path: "/branch-churches",
  },

  gallery: {
    title: "Gallery | Sharon Fellowship Church of Albany",
    description:
      "View photos from worship services, church events, Sunday School, youth gatherings, and community life at SFCA.",
    path: "/gallery",
  },

  contact: {
    title: "Contact | Sharon Fellowship Church of Albany",
    description:
      "Contact Sharon Fellowship Church of Albany. Find our address, phone number, email, and directions to our church in Albany, NY.",
    path: "/contact",
  },

  live: {
    title: "Live | Sharon Fellowship Church of Albany",
    description:
      "Watch Sharon Fellowship Church of Albany online through our livestream and stay connected with Sunday worship services.",
    path: "/live",
  },
};
Heading Structure

Every page must have a clean heading structure.

Rules:

Use only one h1 per page
Use h2 for major sections
Use h3 for cards or subsections
Do not skip heading levels randomly
Do not use headings only for styling
Do not make every line a heading

Example:

<h1>Sharon Fellowship Church of Albany</h1>

<section>
  <h2>Join Us This Sunday</h2>
  <h3>English Service</h3>
</section>

Bad:

<h1>Home</h1>
<h4>Service Times</h4>
<h2>English Service</h2>
Semantic HTML Rules

Use semantic HTML whenever possible.

Use:

<header>
<nav>
<main>
<section>
<article>
<footer>

Avoid using too many generic divs when a semantic element makes more sense.

Good:

<section aria-labelledby="service-times-heading">
  <h2 id="service-times-heading">Sunday Service Times</h2>
</section>

Bad:

<div className="service-section">
  <div className="big-text">Sunday Service Times</div>
</div>
Navigation SEO Rules

The navigation should be clear and crawlable.

Required nav links:

Home
About
Services
What We Believe
Missions
Branch Churches
Gallery
Contact
Live

Rules:

Use real links
Use descriptive labels
Do not hide important pages behind unclear labels
Use React Router Link or NavLink for internal links
Make the Live link visually emphasized
Keep mobile navigation accessible
Link Text Rules

Links and buttons should be descriptive.

Good:

Watch Live
Plan Your Visit
View Service Times
Contact Us
Get Directions
Learn About Our Beliefs

Bad:

Click Here
Read More
Go
More
Link

Descriptive link text helps both SEO and accessibility.

Image SEO Rules

Images should support SEO and accessibility.

Rules:

Every meaningful image needs useful alt text
Decorative images should use empty alt text: alt=""
Do not stuff keywords into alt text
Do not use fake alt text
Do not use image text as a replacement for real page text
Use descriptive file names
Avoid huge unoptimized images

Good image file names:

sunday-worship-sharon-fellowship-albany.jpg
sfca-pastor-santhosh-tharian.jpg
church-service-albany-ny.jpg

Bad image file names:

IMG_9843.jpg
pic1.jpg
finalfinalchurchpic.png

Good alt text:

Worship service at Sharon Fellowship Church of Albany

Bad alt text:

Albany church Albany NY Christian worship church best church near me
Local Contact Information

The church’s contact information should appear clearly on the site.

Official information:

Sharon Fellowship Church of Albany
1781 Western Ave, Albany, NY 12203
(518) 621-6894
sfcalbany@gmail.com

This should appear on:

Contact page
Footer
Homepage contact/location section

Use proper link formats:

<a href="tel:+15186216894">(518) 621-6894</a>
<a href="mailto:sfcalbany@gmail.com">sfcalbany@gmail.com</a>
Structured Data Recommendation

If structured data is added, use church/local organization schema.

Suggested JSON-LD type:

Church

Important fields:

Name
Address
Phone
Email
URL
Social links
Opening/service info if appropriate

Do not invent information.

Only include accurate confirmed church information.

Open Graph Rules

Pages should support good sharing previews when possible.

Open Graph data should include:

Page title
Description
Site name
Page URL
Preview image if available

Suggested site name:

Sharon Fellowship Church of Albany

Do not use random preview images.

Use a clean church logo, building image, or worship image once available.

Accessibility Goal

The website should be usable by everyone, including:

Keyboard users
Screen reader users
Mobile users
Older visitors
Users with low vision
Users who prefer reduced motion
Users with slower devices or connections

Accessibility should be built into the site from the beginning.

Do not treat accessibility as a final cleanup step.

Accessibility Core Rules

The site must follow these rules:

Use semantic HTML
Use proper headings
Use readable text sizes
Use strong color contrast
Use visible focus states
Make buttons and links keyboard accessible
Make mobile navigation keyboard accessible
Use alt text for meaningful images
Do not rely only on color to communicate meaning
Do not use clickable divs
Respect reduced motion preferences
Keep forms properly labeled
Keep the site usable on mobile
Color Contrast Rules

The blue-centered design must still be readable.

Rules:

Text on blue backgrounds must have strong contrast
Light blue text should not be used on white if contrast is weak
Gray text should not be too light
Buttons must be readable
Links must be visually clear
Focus outlines must be visible

Do not sacrifice readability for aesthetics.

Keyboard Accessibility

All interactive elements must work with the keyboard.

This includes:

Navbar links
Dropdown menus
Mobile menu button
Mobile menu links
Buttons
Contact form fields
Gallery filters
Accordions
Social links

Keyboard users should be able to:

Tab through the page logically
See where focus is
Open and close menus
Activate buttons and links
Fill out forms

Do not remove focus outlines unless replacing them with a strong custom focus style.

Button and Link Accessibility

Use correct elements.

Use a link when navigating somewhere:

<Link to="/contact">Contact Us</Link>

Use a button when triggering an action:

<button type="button">Open Menu</button>

Do not use a div or span as a button.

Bad:

<div onClick={openMenu}>Menu</div>

Good:

<button type="button" onClick={openMenu}>
  Menu
</button>
Mobile Navigation Accessibility

The mobile menu must be accessible.

Rules:

The menu button should be a real button
The button should have an accessible label
The menu should be keyboard usable
The menu should be closable
Focus should remain logical
Dropdowns should not trap users
Links should be large enough to tap easily

Example label:

<button aria-label="Open navigation menu">
  ...
</button>
Form Accessibility

If a contact form is added, it must be accessible.

Rules:

Every input must have a label
Required fields should be clear
Error messages should be understandable
Form fields should have visible focus states
Do not rely only on placeholder text as labels
Do not fake successful submissions
Provide a direct email fallback

Recommended fields:

Name
Email
Phone optional
Message

Good:

<label for="email">Email</label>
<input id="email" name="email" type="email" required />

Bad:

<input placeholder="Email" />
Motion Accessibility

Animations should respect users who prefer reduced motion.

Use reduced motion handling in CSS and animation components.

Required CSS pattern:

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}

Animation should improve the design, not block the user from reading content.

Avoid:

Excessive motion
Long page-loading animations
Movement that delays content
Animations that make the page feel slow
Gallery Accessibility

The gallery should be accessible.

Rules:

Images should have alt text if they communicate real content
Decorative images can use empty alt text
Filters should be keyboard accessible
If a lightbox is added, it must be keyboard accessible
Users should be able to close the lightbox with keyboard
Do not create a gallery that only works with mouse hover

If a fully accessible lightbox is too complex, keep the gallery simple.

Video and Livestream Accessibility

The Live page should be clear and usable.

Rules:

Provide a direct YouTube link
Provide a direct Facebook link if used
Do not rely only on an embedded video
Use descriptive button text like “Watch on YouTube”
Make embeds responsive
Avoid autoplaying audio or video
Add a fallback message if an embed fails
Performance and SEO

Performance affects user experience and SEO.

Rules:

Optimize images
Lazy-load gallery images
Avoid large unnecessary scripts
Avoid heavy videos loading automatically
Keep CSS organized
Remove unused code
Avoid layout shift
Make pages responsive
Keep the site fast on mobile
Content Trust Rules

Do not invent church facts.

Do not invent:

Branch church details
Pastor photos
Ministry programs
Testimonies
Service times
Events
Giving links
Doctrinal wording

If information is missing, use a clean placeholder or TODO comment.

Accuracy is more important than filling every space.

Accessibility Testing Checklist

Before considering a page finished, check:

Does the page have one clear H1?
Are headings in logical order?
Can the page be used with only a keyboard?
Are links and buttons descriptive?
Are focus states visible?
Do images have appropriate alt text?
Is text readable on mobile?
Is color contrast strong enough?
Does the mobile menu work properly?
Does reduced motion work?
Are forms labeled properly?
Does the page avoid horizontal scrolling?
SEO Testing Checklist

Before considering a page finished, check:

Does the page have a unique title?
Does the page have a unique meta description?
Is the church name clear?
Is Albany, NY included where appropriate?
Are service times easy to find?
Is contact information easy to find?
Is the page content real text?
Are images named and described well?
Are internal links clear?
Are external links safe?
Is the page useful for a first-time visitor?
Is keyword usage natural?
Final SEO and Accessibility Rule

Build the site so that a person searching for a Christian church near Albany can quickly find SFCA, understand who the church is, see service times, contact the church, get directions, and watch online.

Build the site so that every visitor can use it comfortably, whether they are on desktop, mobile, keyboard, screen reader, slow internet, or reduced-motion settings.

SEO and accessibility should be part of the structure, not an afterthought.