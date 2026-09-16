import "../styles/Home.css";

const Home = ({ dogs, loading, onViewCatalog }) => {
  const stats = [
    { value: "06:30–18:00", label: "Monday–Friday" },
    { value: loading ? "…" : dogs.length, label: "Dogs in the registry" },
    { value: "2", label: "Staff for every small group of 6 dogs" },
    ,
  ];

  const steps = [
    {
      label: "Check-in",
      heading: "Morning drop-off",
      text: "Owners drop off their dog for the day.",
    },
    {
      label: "Daytime",
      heading: "Play, rest, and walks",
      text: "Dogs are grouped by size and temperament for calm, safe time together during the day.",
    },
    {
      label: "Report",
      heading: "Daily note",
      text: "Staff write a short note for each dog, saved to their profile and visible at pickup.",
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="intro">Safe daytime care for dogs</p>
          <h1>A second home while you're at work.</h1>
          <p className="tagline">
            Doggy Daycare welcomes dogs for play, rest, and meals on weekdays.
          </p>
          <button className="btn-primary" onClick={onViewCatalog}>
            Meet our dogs
          </button>
        </div>
      </section>

      <div className="home">
        <div className="stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <h2>What a day with us looks like</h2>
        <p className="section-sub">
          Here's what your dog gets up to while you're away.
        </p>

        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.label}>
              <p className="step-label">{step.label}</p>
              <h3>{step.heading}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
