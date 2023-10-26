import React from 'react'
import "../assets/nav.css"

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Company Name
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div class="d-flex">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Enterprise
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Support
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
              <button class="btn btn-outline-primary me-2" type="button">
                Main button
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar