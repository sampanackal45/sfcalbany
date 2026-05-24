import Button from "../components/ui/Button";

function NotFound({ isPlannedPage = false }) {
  return (
    <section className="not-found section">
      <div className="container not-found__content">
        <p className="eyebrow">{isPlannedPage ? "Coming Soon" : "Page Not Found"}</p>
        <h1>{isPlannedPage ? "This page will be built in a future phase." : "We could not find that page."}</h1>
        <p>
          For now, the Home page is the active build focus for Sharon Fellowship Church
          of Albany.
        </p>
        <Button to="/" variant="primary">
          Return Home
        </Button>
      </div>
    </section>
  );
}

export default NotFound;
