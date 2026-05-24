import { ArrowRight, MapPin } from "lucide-react";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";
import ServiceCard from "../../ui/ServiceCard";
import { churchInfo } from "../../../data/churchInfo";
import { ctas } from "../../../data/ctas";
import { serviceTimes } from "../../../data/serviceTimes";

function ServiceTimesPreview() {
  return (
    <Section id="service-times" className="service-times" labelledBy="service-times-heading">
      <Container>
        <div className="section-heading-row">
          <SectionHeader
            eyebrow="Join Us This Sunday"
            title="Service Times"
            id="service-times-heading"
            text="Worship with Sharon Fellowship Church of Albany in Telugu, English, or Malayalam. Children's Church is available during the Malayalam service."
          />
          <div className="section-heading-row__actions">
            <Button href={churchInfo.directionsUrl} variant="secondary" icon={MapPin} iconPosition="left">
              Get Directions
            </Button>
            <Button href={ctas.planVisit.href} variant="primary" icon={ArrowRight}>
              {ctas.planVisit.label}
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
