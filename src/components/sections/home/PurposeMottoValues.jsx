import { BookOpen, HeartHandshake, Users } from "lucide-react";
import Card from "../../ui/Card";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";
import { homeIdentityCards } from "../../../data/homeContent";

const icons = [BookOpen, HeartHandshake, Users];

function PurposeMottoValues() {
  return (
    <Section className="identity-section" labelledBy="identity-heading">
      <Container>
        <SectionHeader
          eyebrow="Our Identity"
          title="Rooted in Christ, Growing Together"
          id="identity-heading"
          align="center"
          text="The heart of SFCA is shaped by worship, the Word of God, prayer, fellowship, and service."
        />

        <div className="identity-section__grid">
          {homeIdentityCards.map((card, index) => {
            const Icon = icons[index];

            return (
              <Card key={card.title} className="identity-card" delay={index * 0.07}>
                <div className="identity-card__icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <p className="identity-card__reference">{card.reference}</p>
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

export default PurposeMottoValues;
