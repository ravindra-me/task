import { Link, NavLink } from "react-router-dom";

function AsideBar() {
  return (
    <nav className="flex flex-column aside">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        exact
        to="/"
      >
        Products
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        exact
        to="/demoscripts"
      >
        Demo Scripts
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        exact
        to="/customers"
      >
        Customers
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        exact
        to="/salesteam"
      >
        Sales Team
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        exact
        to="/demos"
      >
        Demos
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        exact
        to="/settings"
      >
        Settings
      </NavLink>
    </nav>
  );
}

export default AsideBar;
