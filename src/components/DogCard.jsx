import "../styles/DogCard.css";
import "../styles/ImageFallback.css";
import { getImageFallback } from "../utils/imageFallback";

const DogCard = ({ dog, onSelect }) => {
  const { src, isFallback, onError } = getImageFallback(dog.img);

  return (
    <a href="#" className="dog-card" onClick={(e) => {
      e.preventDefault();
      onSelect(dog);
    }}>
      <div className="avatar">
        <img
          className={`dog-img${isFallback ? ' img-fallback' : ''}`}
          src={src}
          alt={dog.name}
          onError={onError}
        />
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