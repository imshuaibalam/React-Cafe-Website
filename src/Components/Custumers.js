

import React from 'react';
import myc1 from "../images/myc1.png";
import myc2 from "../images/myc2.jpg";
import myc3 from "../images/myc3.png";


function Food() {
  return (
    <>
      <div className="food">
        <div className="container py-5">
          <div className="row food_nav">
              <h6>Our Custumers</h6>
              <h1>Happy and Satisfied Custumers</h1>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 food_menu  py-4">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={myc1} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Pork Sandwich</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempora et eligendi?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 food_menu  py-4">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={myc2} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Pork Sandwich</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempora et eligendi?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 food_menu  py-4">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={myc3} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Pork Sandwich</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempora et eligendi?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 food_menu  py-4">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={myc1} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Pork Sandwich</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempora et eligendi?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Food