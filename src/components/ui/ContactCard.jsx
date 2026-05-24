function ContactCard({ icon: Icon, title, children, href, external = false }) {
  const content = (
    <>
      <span className="contact-card__icon" aria-hidden="true">
        <Icon size={20} />
      </span>
      <span>
        <span className="contact-card__title">{title}</span>
        <span className="contact-card__text">{children}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        className="contact-card"
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return <div className="contact-card">{content}</div>;
}

export default ContactCard;
