import { motion, useReducedMotion } from "framer-motion";

function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  y = 22,
  once = true,
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = motion[as] || motion.div;

  if (prefersReducedMotion) {
    const Component = as;
    return <Component className={className}>{children}</Component>;
  }

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionComponent>
  );
}

export default Reveal;
