import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand ps-5" href="#">
          Salman Patrick
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li class="nav-item pe-5">
              <a class="nav-link active" aria-current="page" href="#services">
                Services
              </a>
            </li>
            <li class="nav-item pe-5">
              <a class="nav-link active" aria-current="page" href="#work">
                Work
              </a>
            </li>{" "}
            <li class="nav-item pe-5">
              <a class="nav-link active" aria-current="page" href="#skills">
                Skills
              </a>
            </li>{" "}
            <li class="nav-item pe-5">
              <a class="nav-link active" aria-current="page" href="#about">
                About
              </a>
            </li>
          </ul>
          <a
            href="https://web.facebook.com/profile.php?id=100049396515197"
            target="_blank"
          >
            <FaFacebook className="h2 me-3" color="navy" />
          </a>
          <a href="https://github.com/salmanhaider14/" target="_blank">
            {" "}
            <FaGithub className="h2 me-3" color="black" />{" "}
          </a>
          <a href="https://www.linkedin.com/in/salman-patrick/" target="_blank">
            {" "}
            <FaLinkedin className="h2 me-5" color="blue" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
