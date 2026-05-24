import Reveal from "./Reveal";

function SectionHeader({ eyebrow, title, text, align = "left", id }) {
  return (
    <Reveal className={`section-header section-header--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {text ? <p>{text}</p> : null}
    </Reveal>
  );
}

export default SectionHeader;
