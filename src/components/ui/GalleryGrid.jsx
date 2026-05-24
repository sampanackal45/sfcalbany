import Reveal from "./Reveal";

function GalleryGrid({ images }) {
  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <Reveal
          as="figure"
          key={image.src}
          className={`gallery-grid__item gallery-grid__item--${index + 1}`}
          delay={index * 0.04}
        >
          <img src={image.src} alt={image.alt} loading="lazy" />
        </Reveal>
      ))}
    </div>
  );
}

export default GalleryGrid;
