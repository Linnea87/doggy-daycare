import "../styles/DogCard.css";

const DogCard = ({ dog }) => {
  return (
    <a href="#" className="dog-card">
      <div className="avatar">
        <img className="dog-img" src={dog.img} alt={dog.name} />
      </div>
      <div className="name">{dog.name}</div>
      <div className="card-meta">
        <div className="chip">{dog.breed}</div>
        <div className="chip">{dog.age} yrs</div>
      </div>
      <div className="card-status">
        <span className={`dot ${dog.present ? 'in' : 'out'}`}></span>
        {dog.present ? 'Checked in today' : 'Waiting at home'}
      </div>
      <span className="card-arrow">View profile →</span>
    </a>
  );
};

export default DogCard;