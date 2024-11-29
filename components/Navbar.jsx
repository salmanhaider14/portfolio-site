import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand ps-5" href="#">
          Salman Patrick
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li className="nav-item pe-5">
              <a
                className="nav-link active"
                aria-current="page"
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="nav-item pe-5">
              <a className="nav-link active" aria-current="page" href="#work">
                Work
              </a>
            </li>{" "}
            <li className="nav-item pe-5">
              <a className="nav-link active" aria-current="page" href="#skills">
                Skills
              </a>
            </li>{" "}
            <li className="nav-item pe-5">
              <a className="nav-link active" aria-current="page" href="#about">
                About
              </a>
            </li>
          </ul>
          <SocialIcons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
