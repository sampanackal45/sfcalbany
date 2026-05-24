import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";
import ServiceCard from "../../ui/ServiceCard";
import { ctas } from "../../../data/ctas";
import { serviceTimes } from "../../../data/serviceTimes";

function ServiceTimesPreview() {
  return (
    <Section id="service-times" className="service-times" labelledBy="service-times-heading">
      <Container>
        <div className="section-heading-row">
          <SectionHeader
            eyebrow="Join Us This Sunday"
            title="Sunday Service Times"
            id="service-times-heading"
            text="A simple snapshot of our Sunday worship schedule."
          />
          <div className="section-heading-row__actions">
            <Button to={ctas.fullServiceTimes.to} variant="secondary" icon={ArrowRight}>
              {ctas.fullServiceTimes.label}
            </Button>
          </div>
        </div>

        <div className="service-times__grid">
          {serviceTimes.map((service, index) => (
            <ServiceCard key={service.name} service={service} delay={index * 0.06} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ServiceTimesPreview;
