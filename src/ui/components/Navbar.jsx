import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        My rental bike
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/electric">
            Electric
          </NavLink>

          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/road">
            Road
          </NavLink>

          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/city">
            City
          </NavLink>

          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/search">
            Search
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
