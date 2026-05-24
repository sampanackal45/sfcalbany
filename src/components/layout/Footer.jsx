import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { churchInfo } from "../../data/churchInfo";
import { footerQuickLinks } from "../../data/navigation";
import { externalLinkProps } from "../../utils/externalLinks";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link className="site-footer__logo-link" to="/" aria-label="Sharon Fellowship Church of Albany home">
            <img src={churchInfo.assets.logo} alt="" className="site-footer__logo" />
            <span>{churchInfo.name}</span>
          </Link>
          <p>{churchInfo.motto}</p>
        </div>

        <div className="site-footer__column">
          <h2>Visit</h2>
          <address>
            <a href={churchInfo.directionsUrl} {...externalLinkProps}>
              <MapPin aria-hidden="true" size={18} />
              {churchInfo.address.full}
            </a>
            <a href={churchInfo.phone.href}>
              <Phone aria-hidden="true" size={18} />
              {churchInfo.phone.label}
            </a>
            <a href={churchInfo.email.href}>
              <Mail aria-hidden="true" size={18} />
              {churchInfo.email.label}
            </a>
          </address>
        </div>

        <div className="site-footer__column">
          <h2>Quick Links</h2>
          <ul>
            {footerQuickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__column">
          <h2>Connect</h2>
          <ul>
            {churchInfo.socialLinks.map((social) => (
              <li key={social.href}>
                <a href={social.href} {...externalLinkProps}>
                  {social.label}
                  <ExternalLink aria-hidden="true" size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {currentYear} Sharon Fellowship Church of Albany. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
