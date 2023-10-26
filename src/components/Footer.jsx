import React from "react";

function Footer() {
  return (
    <>
      <div class="container my-5">
        <div class="container p-4 pb-0">
          <hr class="my-3" />
          <section class="">
            <div class="row">
              <div class="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3">
                <div class="col-12 col-md">
                  <img
                    class="mb-2"
                    src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                  <small class="d-block mb-3 text-muted">© 2017-2018</small>
                </div>
              </div>

              {/* <hr class="w-100 clearfix d-md-none" /> */}

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 class="mb-4 font-weight-bold">Features</h5>
                <p>
                  <a class="text-black text-decoration-none">Cool atuff</a>
                </p>
                <p>
                  <a class="text-black text-decoration-none">Random feature</a>
                </p>
                <p>
                  <a class="text-black text-decoration-none">Team feature</a>
                </p>
                <p>
                  <a class="text-black text-decoration-none">
                    Stuff for developers
                  </a>
                </p>
                <p>
                  <a class="text-black text-decoration-none">Another one</a>
                </p>
                <p>
                  <a class="text-black text-decoration-none">Last time</a>
                </p>
              </div>

              {/* <hr class="w-100 clearfix d-md-none" /> */}

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 class="mb-4 font-weight-bold">Resources</h5>
                <p>
                  <a class="text-black text-decoration-none">Resource</a>
                </p>
                <p>
                  <a class="text-black text-decoration-none">Resource name</a>
                </p>
                <p>
                  <a class="text-black text-decoration-none">
                    Another resource
                  </a>
                </p>
                <p>
                  <a class="text-black text-decoration-none">Final resource</a>
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 class="mb-4 font-weight-bold">About</h5>
                <p>
                  <a class="text-black text-decoration-none">Team</a>
                </p>
                <p>
                  <a class="text-black text-decoration-none">Locations</a>
                </p>
                <p>
                  <a class="text-black text-decoration-none">privacy</a>
                </p>
                <p>
                  <a class="text-black text-decoration-none">Terms</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Footer;
