import '../styles/DogProfile.css';

const DogProfile = ({ dog, onBack }) => {
    if (!dog) {
        return (
            <section className="dog-profile">
                <button className="btn-back" onClick={onBack}>
                    ← Back to dogs
                </button>
            </section>
        );
    }

    return (
        <section className="dog-profile">
            <button className="btn-back" onClick={onBack}>
                ← Back to dogs
            </button>

            <div className="dog-profile-card">
                <div className="dog-profile-img-wrap">
                    <img
                        src={dog.img}
                        alt={dog.name}
                        onError={(e) => {
                            e.target.src = `${import.meta.env.BASE_URL}dog-icon-logo.png`
                            e.target.style.objectFit = 'contain';
                        }}
                    />

                </div>

                <div className="dog-profile-info">
                    <div className='dog-status-info'>
                        <div className="dog-name-breed">
                            <h1>{dog.name}</h1>
                            <p className="dog-detail-breed">{dog.breed}</p>
                        </div>

                        <span className="status-row">
                            <span className={`status-dot ${dog.present ? 'is-present' : 'is-home'}`}
                                aria-hidden="true"></span>
                            <span className="status-badge">
                                {dog.present ? 'Checked in' : 'Waiting at home'}
                            </span>
                        </span>
                    </div>

                    <dl className="detail-list">
                        <div>
                            <dt>
                                Gender:
                            </dt>
                            <dd>{dog.sex}</dd>
                        </div>

                        <div>
                            <dt>Born:</dt>
                            <dd>{(new Date().getFullYear() - dog.age)}</dd>
                        </div>

                        <div>
                            <dt>Age:</dt>
                            <dd>{dog.age} years</dd>
                        </div>

                        <div>
                            <dt>Chip number:</dt>
                            <dd>{dog.chipNumber}</dd>
                        </div>
                    </dl>

                    <div className="owner-card">
                        <h2>Owner</h2>
                        <p>{dog.owner?.name} {dog.owner?.lastName}</p>
                        <p>
                            <a href={`tel:${dog.owner?.phoneNumber}`}>{dog.owner?.phoneNumber}</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DogProfile;