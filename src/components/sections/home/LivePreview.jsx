import { ExternalLink, PlayCircle } from "lucide-react";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Reveal from "../../ui/Reveal";
import Section from "../../ui/Section";
import { ctas } from "../../../data/ctas";
import { serviceTimes } from "../../../data/serviceTimes";

function LivePreview() {
  return (
    <Section id="watch-live" className="live-preview" labelledBy="live-heading">
      <Container className="live-preview__grid">
        <Reveal className="live-preview__copy">
          <p className="eyebrow">Watch Live</p>
          <h2 id="live-heading">Watch Us Online</h2>
          <p>
            Join us online for worship through our official YouTube and Facebook
            pages. Direct links are always available if you cannot join us in person.
          </p>
          <div className="live-preview__actions">
            <Button href={ctas.youtube.href} variant="light" icon={PlayCircle} iconPosition="left">
              {ctas.youtube.label}
            </Button>
            <Button href={ctas.facebook.href} variant="ghost-light" icon={ExternalLink}>
              {ctas.facebook.label}
            </Button>
          </div>
        </Reveal>

        <Reveal className="live-preview__panel" delay={0.1}>
          <div className="live-preview__play" aria-hidden="true">
            <PlayCircle size={42} />
          </div>
          <p className="live-preview__label">Sunday Worship Online</p>
          <ul>
            {serviceTimes.slice(0, 3).map((service) => (
              <li key={service.name}>
                <span>{service.name}</span>
                <strong>{service.time}</strong>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}

export default LivePreview;
