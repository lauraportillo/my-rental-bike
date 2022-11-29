import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark p-2 navbar_customBackground">
      <Link className="navbar-brand " to="/">
        My rental bike
      </Link>

      <div className="navbar-collapse p-2">
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

          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/rent">
            Rent
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
