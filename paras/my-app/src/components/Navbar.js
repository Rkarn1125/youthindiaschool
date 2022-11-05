import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand text-danger" href="#">
            Youth India E-School
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <Link className="text-decoration-none" to="/">Home</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link className="text-decoration-none" to="/Second">Second Page</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
