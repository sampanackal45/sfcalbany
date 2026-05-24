import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Button from "../../ui/Button";
import ContactCard from "../../ui/ContactCard";
import Container from "../../ui/Container";
import Reveal from "../../ui/Reveal";
import Section from "../../ui/Section";
import { churchInfo } from "../../../data/churchInfo";
import { ctas } from "../../../data/ctas";

function ContactVisitCTA() {
  return (
    <Section id="visit" className="visit-cta" labelledBy="visit-heading">
      <Container className="visit-cta__grid">
        <Reveal className="visit-cta__copy">
          <p className="eyebrow">Visit SFCA</p>
          <h2 id="visit-heading">Join Us This Sunday</h2>
          <p>
            We would love to welcome you and your family to {churchInfo.displayName}.
            Come worship with us at {churchInfo.address.full}.
          </p>
          <div className="visit-cta__actions">
            <Button href={churchInfo.directionsUrl} icon={MapPin} iconPosition="left">
              Get Directions
            </Button>
            <Button to={ctas.contact.to} variant="light" icon={ArrowRight}>
              {ctas.contact.label}
            </Button>
          </div>
        </Reveal>

        <Reveal className="visit-cta__contacts" delay={0.1}>
          <div className="visit-cta__image" aria-hidden="true">
            <img src={churchInfo.assets.visitImage} alt="" loading="lazy" />
          </div>
          <ContactCard icon={MapPin} title="Address" href={churchInfo.directionsUrl} external>
            {churchInfo.address.full}
          </ContactCard>
          <ContactCard icon={Phone} title="Phone" href={churchInfo.phone.href}>
            {churchInfo.phone.label}
          </ContactCard>
          <ContactCard icon={Mail} title="Email" href={churchInfo.email.href}>
            {churchInfo.email.label}
          </ContactCard>
        </Reveal>
      </Container>
    </Section>
  );
}

export default ContactVisitCTA;
