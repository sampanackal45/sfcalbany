import { useEffect, useState } from "react";
import { Menu, Radio, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { churchInfo } from "../../data/churchInfo";
import { navigationLinks } from "../../data/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className={`site-header${isScrolled || isOpen ? " site-header--solid" : ""}`}>
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="navbar__brand" to="/" aria-label="Sharon Fellowship Church of Albany home">
          <img src={churchInfo.assets.logo} alt="" className="navbar__logo" />
          <span className="navbar__brand-text">
            <span>{churchInfo.shortName}</span>
          </span>
        </Link>

        <div className="navbar__links" aria-label="Primary">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar__link${isActive ? " navbar__link--active" : ""}${
                  link.isHighlighted ? " navbar__link--live" : ""
                }`
              }
            >
              {link.isHighlighted ? <Radio aria-hidden="true" size={16} /> : null}
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          className="navbar__menu-button"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-nav${isOpen ? " mobile-nav--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="container mobile-nav__inner">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              tabIndex={isOpen ? undefined : -1}
              className={({ isActive }) =>
                `mobile-nav__link${isActive ? " mobile-nav__link--active" : ""}${
                  link.isHighlighted ? " mobile-nav__link--live" : ""
                }`
              }
            >
              <span>{link.label}</span>
              {link.isHighlighted ? <Radio aria-hidden="true" size={18} /> : null}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
