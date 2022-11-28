import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getBikeById } from '../helpers';

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
    <div className="row mt-5">
      <div className="col-4">
        <img src={bikeImageUrl} alt={bike.bibe_name} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>

      <div className="col-8">
        <h3>{bike.bike_name}</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Type:</b> {bike.type}
          </li>
          <li className="list-group-item">
            <b>Description:</b> {bike.description}
          </li>
        </ul>

        <button onClick={onNavigateBack} className="btn btn-outline-primary">
          Back
        </button>
      </div>
    </div>
  );
};
