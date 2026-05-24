import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import PastorCard from "../../ui/PastorCard";
import Section from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";
import { pastors } from "../../../data/pastors";

function LeadershipPreview() {
  return (
    <Section className="leadership-preview" labelledBy="leadership-heading">
      <Container>
        <div className="section-heading-row">
          <SectionHeader
            eyebrow="Leadership"
            title="Meet Our Pastors"
            id="leadership-heading"
            text="SFCA is served by pastors and leaders who care for the church family through worship, teaching, prayer, and fellowship."
          />
          <Button to="/about" variant="secondary" icon={ArrowRight}>
            View Leadership
          </Button>
        </div>

        <div className="leadership-preview__grid">
          {pastors.map((pastor, index) => (
            <PastorCard key={pastor.name} pastor={pastor} delay={index * 0.05} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default LeadershipPreview;
