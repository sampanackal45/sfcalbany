import { ExternalLink, PlayCircle } from "lucide-react";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Reveal from "../../ui/Reveal";
import Section from "../../ui/Section";
import { ctas } from "../../../data/ctas";

function LivePreview() {
  return (
    <Section id="watch-live" className="live-preview" labelledBy="live-heading">
      <Container className="live-preview__grid">
        <Reveal className="live-preview__copy">
          <p className="eyebrow">Watch Live</p>
          <h2 id="live-heading">Watch Us Online</h2>
          <p>
            Join us online for worship through our official YouTube and Facebook
            pages.
          </p>
          <div className="live-preview__actions">
            <Button href={ctas.youtube.href} variant="light" icon={PlayCircle} iconPosition="left">
              {ctas.youtube.label}
            </Button>
            <Button href={ctas.facebook.href} variant="ghost-light" icon={ExternalLink}>
              {ctas.facebook.label}
            </Button>
          </div>
          <a className="live-preview__instagram" href={ctas.instagram.href} target="_blank" rel="noopener noreferrer">
            {ctas.instagram.label}
          </a>
        </Reveal>

        <Reveal className="live-preview__video-card" delay={0.1}>
          <div className="live-preview__video-shell">
            <iframe
              src={ctas.youtubeEmbed.href}
              title="Sharon Fellowship Church of Albany Sunday livestream"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p>Livestream audio starts muted. You can unmute it manually in the player.</p>
        </Reveal>
      </Container>
    </Section>
  );
}

export default LivePreview;
