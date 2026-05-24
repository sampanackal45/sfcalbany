import { Clock } from "lucide-react";
import Card from "./Card";

function ServiceCard({ service, delay = 0 }) {
  return (
    <Card className="service-card" delay={delay}>
      <div className="service-card__icon" aria-hidden="true">
        <Clock size={22} />
      </div>
      <div>
        <h3>{service.name}</h3>
        <p className="service-card__time">{service.time}</p>
      </div>
    </Card>
  );
}

export default ServiceCard;
