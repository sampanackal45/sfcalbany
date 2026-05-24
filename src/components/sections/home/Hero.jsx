import { useReducedMotion } from "framer-motion";
import { ArrowRight, Clock, PlayCircle } from "lucide-react";
import Button from "../../ui/Button";
import Reveal from "../../ui/Reveal";
import { churchInfo } from "../../../data/churchInfo";
import { ctas } from "../../../data/ctas";

function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="hero" aria-labelledby="home-hero-heading">
      <div className="hero__media" aria-hidden="true">
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
      </div>

      <div className="container hero__content">
        <Reveal className="hero__copy" y={28}>
          <p className="eyebrow hero__eyebrow">Welcome To</p>
          <h1 id="home-hero-heading">
            <span>{churchInfo.displayName}</span>
          </h1>
          <p className="hero__lead">
            A Christ-centered church family in Albany gathering for worship, prayer,
            fellowship, and the Word of God.
          </p>
          <p className="hero__motto">{churchInfo.motto}</p>
          <div className="hero__actions" aria-label="Primary actions">
            <Button href={ctas.planVisit.href} icon={ArrowRight}>
              {ctas.planVisit.label}
            </Button>
            <Button href={ctas.watchLive.href} variant="light" icon={PlayCircle} iconPosition="left">
              {ctas.watchLive.label}
            </Button>
            <Button href={ctas.viewServiceTimes.href} variant="ghost-light" icon={Clock} iconPosition="left">
              {ctas.viewServiceTimes.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
