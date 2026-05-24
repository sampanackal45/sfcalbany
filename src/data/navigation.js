export const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "What We Believe", path: "/what-we-believe" },
  { label: "Missions", path: "/missions" },
  { label: "Branch Churches", path: "/branch-churches" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
  { label: "Live", path: "/live", isHighlighted: true },
];

export const footerQuickLinks = navigationLinks.filter(
  (link) => !["Home", "Branch Churches"].includes(link.label),
);
