import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Navbar } from '../../ui';

import './rentPage.scss';

export const RentPage = () => {
  const { displayName, email, telephone, onInputChange } = useForm();

  const location = useLocation();

  const onSearchSubmit = (ev) => {
    ev.preventDefault();
  };

  const bikeImageUrl = `./assets/bikes/${location.state.id}.jpg`;

  return (
    <>
      <Navbar />

      <div className="container col-6">
        <h1 className="mt-3 mb-3">Rent your bike:</h1>
        <div className="d-flex flex-column align-items-center justify-content-center p-4 ">
          <div>
            <img src={bikeImageUrl} alt={location.state.bibe_name} className="img-fluid" />
          </div>
          <small className="rentPageTitle">{location.state.bike_name}</small>
        </div>

        <form onSubmit={onSearchSubmit}>
          <div className="form-group">
            <label htmlFor="displayName">Full name</label>
            <input
              type="text"
              placeholder="Your Name"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              className="form-control mt-1 mb-2"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email@google.com"
              name="email"
              value={email}
              onChange={onInputChange}
              className="form-control mt-1 mb-2"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Phone number</label>
            <input
              type="telephone"
              placeholder="123456789"
              name="telephone"
              value={telephone}
              onChange={onInputChange}
              className="form-control mt-1 mb-2"
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </>
  );
};
