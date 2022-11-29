import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getBikeById } from '../helpers';
import './bikeDetailPage.scss';

export const BikeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const bike = useMemo(() => getBikeById(id), [id]);

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
            <b>Price:</b>
          </li>
          <li className="list-group-item mb-2">
            <b>Conditions:</b>
          </li>
        </ul>

        <div>
          <button onClick={onNavigateBack} className="btn detailBtn_custom m-1">
            Back
          </button>
          <button className="btn detailBtn_custom m-1">Rent</button>
        </div>
      </div>
    </div>
  );
};
