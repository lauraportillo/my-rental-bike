import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Navbar } from '../../ui';
import { bikes } from '../../bikes/data/bikes';
import './rentPage.scss';

export const RentPage = () => {
  const { displayName, email, telephone, onInputChange } = useForm();

  const location = useLocation();

  const onSearchSubmit = (ev) => {
    ev.preventDefault();
  };

  const renderSelectedBike = () => {
    const handleChange = (event) => {
      console.log(event.target.value);
    };

    if (location.state === null) {
      return (
        <div className="form-group">
          <select name="bikes" id="bikeSelet" onChange={handleChange} className="form-select">
            <option value="allBikes">Choose a bike</option>
            {bikes.map((option) => (
              <option key={option.bike_name} value={option.bike_name}>
                {option.type}-{option.bike_name}
              </option>
            ))}
          </select>
        </div>
      );
    } else {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center p-4 ">
          <div>
            <img src={`./assets/bikes/${location.state.id}.jpg`} alt={location.state.bibe_name} className="img-fluid" />
          </div>
          <small className="rentPageTitle">{location.state.bike_name}</small>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="container col-8">
        <h1 className="mt-3 mb-3">Rent your bike:</h1>
        {renderSelectedBike()}

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
