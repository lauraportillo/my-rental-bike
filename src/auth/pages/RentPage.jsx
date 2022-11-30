import { useForm } from '../../hooks/useForm';
import { Navbar } from '../../ui';

export const RentPage = () => {
  const { displayName, email, telephone, onInputChange } = useForm();

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
