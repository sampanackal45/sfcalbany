import Reveal from "./Reveal";

function Card({ children, className = "", as = "article", delay = 0 }) {
  return (
    <Reveal as={as} className={`card ${className}`.trim()} delay={delay}>
      {children}
    </Reveal>
  );
}

export default Card;
