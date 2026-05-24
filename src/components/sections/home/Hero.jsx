import { useReducedMotion } from "framer-motion";
import { ArrowRight, Clock, MapPin, PlayCircle } from "lucide-react";
import Button from "../../ui/Button";
import Reveal from "../../ui/Reveal";
import { churchInfo } from "../../../data/churchInfo";
import { ctas } from "../../../data/ctas";
import { serviceTimes } from "../../../data/serviceTimes";

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
          <p className="eyebrow hero__eyebrow">
            <MapPin aria-hidden="true" size={16} />
            {churchInfo.city}
          </p>
          <h1 id="home-hero-heading">Welcome to Sharon Fellowship Church of Albany</h1>
          <p className="hero__lead">
            A Christ-centered church family in Albany, NY, gathering for worship,
            prayer, fellowship, and the Word of God.
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

        <Reveal className="hero__service-strip" delay={0.12} y={20}>
          <span className="hero__service-label">Sunday Worship</span>
          <div className="hero__service-list">
            {serviceTimes.slice(0, 3).map((service) => (
              <span key={service.name}>
                <strong>{service.name.replace(" Service", "")}</strong>
                {service.time}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
