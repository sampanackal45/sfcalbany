function Section({ children, id, className = "", labelledBy }) {
  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={labelledBy}>
      {children}
    </section>
  );
}

export default Section;
