import { ArrowRight, Globe2, HeartHandshake, Send, Users } from "lucide-react";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";
import { ctas } from "../../../data/ctas";
import { missionsPreviewCards } from "../../../data/homeContent";

const icons = [HeartHandshake, Globe2, Send, Users];

function MissionsPreview() {
  return (
    <Section className="missions-preview" labelledBy="missions-heading">
      <Container>
        <div className="missions-preview__intro">
          <SectionHeader
            eyebrow="Missions & Church Life"
            title="Serving Albany and Beyond"
            id="missions-heading"
            text="At SFCA, we desire to share the love and compassion of Christ beyond the walls of the church through service, outreach, and missions."
          />
          <Button to={ctas.exploreMissions.to} variant="light" icon={ArrowRight}>
            {ctas.exploreMissions.label}
          </Button>
        </div>

        <div className="missions-preview__grid">
          {missionsPreviewCards.map((card, index) => {
            const Icon = icons[index];

            return (
              <Card key={card.title} className="mission-card" delay={index * 0.06}>
                <span className="mission-card__icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default MissionsPreview;
