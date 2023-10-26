import React, { useState } from "react";
import "../assets/pricing.css";

function Pricing() {
  const price = document.getElementById("price");
  const price2 = document.getElementById("price2");
  const price3 = document.getElementById("price3");
  const view = document.querySelector(".formactive");

  const [isModalVisible, setModalVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
  });

  const openModal = () => {
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
   
  //   console.log('Form data submitted:', formData);
  //   closeModal(); // Close the modal after submission
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YO3ES8CB4O1QHJLK70ZCSOZ7W',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
  
    try {
      const response = await fetch('/formapi/958', requestOptions);
  
      if (response.ok) {
        console.log('Form data submitted successfully');
      } else {
        console.error('Form data submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    closeModal(); // Close the modal after submission
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
                <div class="bottom-btn" id="price" onClick={openModal}>
                  <a class="btn btn-outline-primary me-2" href="#f1">
                    <span>Sign up for free</span>
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
                <div class="bottom-btn" id="price2" onClick={openModal}>
                  <a class="btn btn-primary me-2" href="#f1">
                    <span>Get started</span>
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
                <div class="bottom-btn" id="price3" onClick={openModal}>
                  <a class="btn btn-primary me-2" href="#f1">
                    <span>Contact us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
       

        {isModalVisible && (
          <div className="modal" tabIndex="-1" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
            
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      name="comments"
                      placeholder="Order Comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </form>
             
            
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    
    </div>
  );
}

export default Pricing;
