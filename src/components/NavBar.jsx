import { NavLink,Link } from "react-router-dom";
import WidgetCart from "./WidgetCart";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
            <Logo/>
         </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                style={{ textDecoration: "none", margin: "1rem" }}
                to={"category/rostro"}
              >
                Rostro
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", margin: "1rem" }}
                to={"category/ojos"}
              >
                Ojos
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", margin: "1rem" }}
                to={"category/labios"}
              >
                Labios
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", margin: "1rem" }}
                to={"category/skincare"}
              >
                Skincare
              </NavLink>
            </div>
          </div>
          <WidgetCart />
        </div>
      </nav>
    </>
  );
};

export default NavBar;