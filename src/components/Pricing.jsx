import React from "react";
import "../assets/pricing.css";

function Pricing() {
  const price = document.getElementById("price");
  const price2 = document.getElementById("price2");
  const price3 = document.getElementById("price3");
  const view = document.querySelector(".formactive");

  const toggle = function () {
    view.classList.toggle("visible");
  };
  return (
    <div>
      <div class="pricing1 py-5 bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 text-center">
              <h3 class="mt-3 font-weight-light mb-1">
                Quickly build an effective pricing table for your potential
                customers with this Bootstrap example. It's built with default
                Bootstrap components and utilities with little customization.
              </h3>

              <div class="switcher-box mt-4 d-flex align-items-center justify-content-center"></div>
            </div>
          </div>
        </div>

        <div class="row mt-5 row justify-content-center">
          <div class="col-lg-3 col-md-6">
            <div class="card text-center card-shadow on-hover border-0 mb-4">
              <div class="card-body font-14">
                <h5 class="mt-3 mb-1 font-weight-medium">FREE</h5>

                <div class="pricing my-3">
                  <span class="monthly display-5 font-weight-medium">$0</span>
                  <span class="yearly display-5">240</span>
                  <small class="monthly display-5 font-weight-light">/mo</small>
                  <small class="yearly">/yr</small>
                </div>
                <ul class="list-inline font-weight-medium">
                  <li class="d-block py-2">10 users included</li>
                  <li class="d-block py-2">2 GB of storage</li>
                  <li class="d-block py-2">Email support</li>
                  <li class="d-block py-2">Help center access</li>
                </ul>
                <div class="bottom-btn" id="price" onClick={toggle}>
                  <a class="btn btn-outline-primary me-2" href="#f1">
                    <span >
                      Sign up for free
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card text-center card-shadow on-hover border-0 mb-4">
              <div class="card-body font-14">
                <h5 class="mt-3 mb-1 font-weight-medium">Pro</h5>

                <div class="pricing my-3">
                  <span class="monthly display-5 font-weight-medium">$15</span>
                  <span class="yearly display-5">240</span>
                  <small class="monthly display-5 font-weight-light">/mo</small>
                  <small class="yearly">/yr</small>
                </div>
                <ul class="list-inline font-weight-medium">
                  <li class="d-block py-2">20 users included</li>
                  <li class="d-block py-2">10 GB of storage</li>
                  <li class="d-block py-2">Priority email support</li>
                  <li class="d-block py-2">Help center access</li>
                </ul>
                <div class="bottom-btn" id="price2" onClick={toggle}>
                  <a class="btn btn-primary me-2" href="#f1">
                    <span >
                      Get started
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card text-center card-shadow on-hover border-0 mb-4">
              <div class="card-body font-14">
                <h5 class="mt-3 mb-1 font-weight-medium">Enterprise</h5>

                <div class="pricing my-3">
                  <span class="monthly display-5 font-weight-medium">$29</span>
                  <span class="yearly display-5">240</span>
                  <small class="monthly display-5 font-weight-light">/mo</small>
                  <small class="yearly">/yr</small>
                </div>
                <ul class="list-inline font-weight-medium">
                  <li class="d-block py-2">30 users included</li>
                  <li class="d-block py-2">15 GB of storage</li>
                  <li class="d-block py-2">Phone and email support</li>
                  <li class="d-block py-2">Help center access</li>
                </ul>
                <div class="bottom-btn" id="price3" onClick={toggle}>
                  <a class="btn btn-primary me-2" href="#f1">
                    <span >
                      Contact us
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="formactive">
        <form>
          <div class="form-row">
            <div class="col-7">
              <input type="text" class="form-control" placeholder="Name" />
            </div>
            <div class="col">
              <input type="email" class="form-control" placeholder="Email" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Orders" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Comments" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pricing;
