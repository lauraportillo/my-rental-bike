// import { Link } from 'react-router-dom';

export const BikeCard = ({ id, type, bike_name }) => {
  const bikeImageUrl = `./assets/bikes/${id}.jpg`;

  return (
    <div className="card-deck animate__animated animate__fadeIn p-2">
      <div className="card">
        <img src={bikeImageUrl} className="card-img-top p-3" alt={bike_name} />

        <div className="card-body">
          <h5 className="card-title">{bike_name}</h5>
          <p className="card-text">{type}</p>

          {/* <Link to={`/hero/${id}`}>More...</Link> */}
        </div>
      </div>
    </div>
  );
};
