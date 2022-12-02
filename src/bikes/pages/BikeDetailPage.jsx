import { useState, useMemo } from 'react';
import { Navigate, useParams, useNavigate, Link } from 'react-router-dom';

import { getBikeById } from '../helpers';
import './bikeDetailPage.scss';

export const BikeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const bike = useMemo(() => getBikeById(id), [id]);

  const [selectedBike] = useState(bike);

  const onNavigateBack = () => {
    navigate(-1);
  };

  const bikeImageUrl = `./assets/bikes/${id}.jpg`;

  if (!bike) {
    return <Navigate to="/electric" />;
  }

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div className="col-8">
        <img src={bikeImageUrl} alt={bike.bibe_name} className="img-fluid animate__animated animate__fadeInLeft" />
      </div>

      <div className="col-8 mt-2">
        <h3 className="detailTitle">{bike.bike_name}</h3>

        <ul className="list-group-flush p-0">
          <li className="list-group-item mb-2">
            <b>Type:</b> {bike.type}
          </li>
          <li className="list-group-item mb-2">
            <b>Features:</b> {bike.features}
          </li>
          <li className="list-group-item mb-2">
            <b>Price per day:</b> {bike.price}
            <b>*</b>
          </li>
          <li className="list-group-item mb-2">
            <b>Conditions:</b> {bike.conditions}
          </li>
        </ul>

        <small className="detailSmall">
          <b>*</b>The base price is USD 10 per day, if the request is made before the 15th of each month and 12 USD per
          day is made on the 15th or the following days.
        </small>

        <div className="mt-4">
          <button onClick={onNavigateBack} className="btn detailBtn_custom m-1">
            Back
          </button>

          {/* IMPORTANTE: ha cambiado la forma de pasar el estado a través del link con React Router V6 */}
          <Link to={'/rent'} state={selectedBike}>
            <button className="btn detailBtn_custom m-1">Rent</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
