import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import GalleryGrid from "../../ui/GalleryGrid";
import Section from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";
import { ctas } from "../../../data/ctas";
import { galleryPreviewImages } from "../../../data/gallery";

function GalleryPreview() {
  return (
    <Section className="gallery-preview" labelledBy="gallery-heading">
      <Container>
        <div className="section-heading-row">
          <SectionHeader
            eyebrow="Church Life"
            title="Life at SFCA"
            id="gallery-heading"
            text="Take a glimpse into worship, fellowship, events, and community at Sharon Fellowship Church of Albany."
          />
          <Button to={ctas.viewGallery.to} variant="secondary" icon={ArrowRight}>
            {ctas.viewGallery.label}
          </Button>
        </div>

        <GalleryGrid images={galleryPreviewImages} />
      </Container>
    </Section>
  );
}

export default GalleryPreview;
