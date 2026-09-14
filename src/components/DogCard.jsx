const DogCard = ({ dog }) => {
  return (
    <a href="#" className="dog-card">
      <div className="avatar">
        <img src={dog.image} alt={dog.name} />
      </div>
      <div className="name">{dog.name}</div>
      <div className="card-meta">
        <div className="chip">{dog.breed}</div>
        <div className="chip mono">{dog.age} yrs</div>
      </div>
      <div className="card-status">
        <span className={`dot ${dog.checkedIn ? 'in' : 'out'}`}></span>
        {dog.checkedIn ? 'Checked in today' : 'Not checked in today'}
      </div>
      <span className="card-arrow">View profile →</span>
    </a>
  );
};

export default DogCard;