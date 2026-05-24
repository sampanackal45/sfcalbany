import Card from "./Card";

function PastorCard({ pastor, delay = 0 }) {
  return (
    <Card className="pastor-card" delay={delay}>
      <div className="pastor-card__media">
        {pastor.image ? (
          <img src={pastor.image} alt={pastor.alt} loading="lazy" />
        ) : (
          <div className="pastor-card__placeholder" role="img" aria-label={pastor.alt}>
            <span>{pastor.initials}</span>
            <small>Photo Coming Soon</small>
          </div>
        )}
      </div>
      <div className="pastor-card__content">
        <h3>{pastor.name}</h3>
        <p>{pastor.role}</p>
      </div>
    </Card>
  );
}

export default PastorCard;
