// import { Link } from 'react-router-dom';

export const BikeCard = ({ id, type, bike }) => {
  const bikeImageUrl = `./assets/bikes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={bikeImageUrl} className="card-img" alt={bike} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{bike}</h5>
              <p className="card-text">{type}</p>

              {/* <Link to={`/hero/${id}`}>More...</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
