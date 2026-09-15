import "../styles/Home.css";

const Home = ({ onViewCatalog }) => {
  const stats = [
    { value: "06:30–18:00", label: "Opening hours, Mon–Fri" },
    { value: "8", label: "Dogs in the registry" },
    { value: "4", label: "Staff on site today" },
  ];

  const steps = [
    { title: "Check-in", text: "Owners drop off their dog for the day." },
    { title: "Daytime", text: "Play, rest, and walks in small groups." },
    { title: "Report", text: "Staff write a short note in the profile." },
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
            Browse the dog catalog
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

        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
