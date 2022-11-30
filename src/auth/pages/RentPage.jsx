import { useForm } from '../../hooks/useForm';
import { Navbar } from '../../ui';

export const RentPage = () => {
  const { displayName, email, onInputChange } = useForm();

  const onSearchSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1 className="mt-3 mb-3">Rent your bike</h1>

        <form onSubmit={onSearchSubmit} className="col-6">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              className="form-control"
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </>
  );
};
