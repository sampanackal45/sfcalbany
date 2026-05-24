import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock, PlayCircle } from "lucide-react";
import Button from "../../ui/Button";
import { churchInfo } from "../../../data/churchInfo";
import { ctas } from "../../../data/ctas";

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.45,
      staggerChildren: 0.16,
    },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const animatedMediaProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0.52, scale: 1.045 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1.45, ease: [0.22, 1, 0.36, 1] },
      };
  const animatedContentProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        animate: "visible",
        variants: heroContainer,
      };

  return (
    <section className="hero" aria-labelledby="home-hero-heading">
      <motion.div className="hero__media" aria-hidden="true" {...animatedMediaProps}>
        <video
          className="hero__video"
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          preload="metadata"
          poster={churchInfo.assets.heroPoster}
        >
          <source src={churchInfo.assets.introVideo} type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__wash" />
      </motion.div>

      <div className="container hero__content">
        <motion.div className="hero__copy" {...animatedContentProps}>
          <motion.p className="eyebrow hero__eyebrow" variants={heroItem}>
            Welcome To
          </motion.p>
          <motion.h1 id="home-hero-heading" variants={heroItem}>
            <span>{churchInfo.displayName}</span>
          </motion.h1>
          <motion.p className="hero__lead" variants={heroItem}>
            A Christ-centered church family in Albany gathering for worship, prayer,
            fellowship, and the Word of God.
          </motion.p>
          <motion.p className="hero__motto" variants={heroItem}>
            {churchInfo.motto}
          </motion.p>
          <motion.div className="hero__actions" aria-label="Primary actions" variants={heroItem}>
            <Button href={ctas.planVisit.href} icon={ArrowRight}>
              {ctas.planVisit.label}
            </Button>
            <Button href={ctas.watchLive.href} variant="light" icon={PlayCircle} iconPosition="left">
              {ctas.watchLive.label}
            </Button>
            <Button href={ctas.viewServiceTimes.href} variant="ghost-light" icon={Clock} iconPosition="left">
              {ctas.viewServiceTimes.label}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
