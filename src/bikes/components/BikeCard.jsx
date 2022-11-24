// import { Link } from 'react-router-dom';

export const BikeCard = ({ id, type, bike }) => {
  const bikeImageUrl = `./assets/bikes/${id}.jpg`;

  return (
    <div className="card-deck animate__animated animate__fadeIn">
      <div className="card">
        <img src={bikeImageUrl} className="card-img-top p-3" alt={bike} />

        <div className="card-body">
          <h5 className="card-title">{bike}</h5>
          <p className="card-text">{type}</p>

          {/* <Link to={`/hero/${id}`}>More...</Link> */}
        </div>
      </div>
    </div>
  );
};
