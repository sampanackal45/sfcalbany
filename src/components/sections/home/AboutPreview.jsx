import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Reveal from "../../ui/Reveal";
import Section from "../../ui/Section";
import { aboutPreviewTags } from "../../../data/homeContent";
import { ctas } from "../../../data/ctas";

const aboutImages = [
  {
    src: "/Resources/Pictures/Copy of 3Q9A7182.jpg",
    alt: "Members of the Sharon Fellowship Church of Albany community smiling together",
  },
  {
    src: "/Resources/Hero Images/1.jpg",
    alt: "Young adults from the Sharon Fellowship Church of Albany community",
  },
  {
    src: "/Resources/Pictures/Copy of 3Q9A3690-Enhanced-NR.jpg",
    alt: "Church community fellowship at Sharon Fellowship Church of Albany",
  },
];

function AboutPreview() {
  return (
    <Section className="about-preview" labelledBy="about-preview-heading">
      <Container className="about-preview__grid">
        <Reveal className="about-preview__copy">
          <p className="eyebrow">About SFCA</p>
          <h2 id="about-preview-heading">Justified. Sanctified. Glorified.</h2>
          <p>
            At Sharon Fellowship Church of Albany, we are a community of believers
            who gather to worship, grow, and serve together. Our mission is to love
            God, love people, and make disciples. Whether you are new to faith or
            have followed Jesus for years, we invite you to join us on this journey.
          </p>
          <div className="about-preview__tags" aria-label="Church community highlights">
            {aboutPreviewTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Button to={ctas.learnAbout.to} variant="secondary" icon={ArrowRight}>
            {ctas.learnAbout.label}
          </Button>
        </Reveal>

        <Reveal className="about-preview__media" delay={0.1}>
          <img className="about-preview__image about-preview__image--large" src={aboutImages[0].src} alt={aboutImages[0].alt} loading="lazy" />
          <div className="about-preview__stack">
            <img src={aboutImages[1].src} alt={aboutImages[1].alt} loading="lazy" />
            <img src={aboutImages[2].src} alt={aboutImages[2].alt} loading="lazy" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default AboutPreview;
