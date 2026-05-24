import { Link } from "react-router-dom";
import { externalLinkProps, isExternalUrl } from "../../utils/externalLinks";

function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  ...props
}) {
  const classNames = `button button--${variant} button--${size} ${className}`.trim();
  const content = (
    <>
      {Icon && iconPosition === "left" ? <Icon aria-hidden="true" size={18} /> : null}
      <span>{children}</span>
      {Icon && iconPosition === "right" ? <Icon aria-hidden="true" size={18} /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={classNames} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const safeProps = isExternalUrl(href) ? externalLinkProps : {};

    return (
      <a className={classNames} href={href} {...safeProps} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classNames} type="button" {...props}>
      {content}
    </button>
  );
}

export default Button;
