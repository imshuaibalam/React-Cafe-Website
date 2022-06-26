import React from 'react';
import img1 from "../images/burger.jpg";
import img2 from "../images/paneertikka.jpg";
import { Link } from 'react-router-dom';

function Food() {
  return (
    <>
      <div className="food">
        <div className="container py-5">
          <div className="row food_nav">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 food_heading">
              <h6>Popular Menu</h6>
              <h1>Delicious Food Menu</h1>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 food_menu  py-4">
              <Link className=' text-decoration-none text-dark pe-4 fs-5' to="/food">Breakfast</Link>
              <Link className=' text-decoration-none text-dark pe-4 fs-5' to="/food">Lunch</Link>
              <Link className=' text-decoration-none text-dark pe-4 fs-5' to="/food">Dinner</Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 food_menu  py-4">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={img1} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Pork Sandwich</h5>
                      <p class="card-text">They're wherein heaven seed hath nothing</p>
                      <h5 className='text-danger'>&#8377;60.00</h5>
                      <Link to="/Order" class="btn btn-primary">Order Now !</Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 food_menu  py-4">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={img2} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Paneer Tikka</h5>
                      <p class="card-text">They're wherein heaven seed hath nothing</p>
                      <h5 className='text-danger'>&#8377;40.00</h5>
                      <Link to="/Order" class="btn btn-primary">Order Now !</Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 food_menu  py-4">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={img2} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Paneer Tikka</h5>
                      <p class="card-text">They're wherein heaven seed hath nothing</p>
                      <h5 className='text-danger'>&#8377;60.00</h5>
                      <Link to="/Order" class="btn btn-primary">Order Now !</Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 food_menu  py-4">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={img1} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Pork Sandwich</h5>
                      <p class="card-text">They're wherein heaven seed hath nothing</p>
                      <h5 className='text-danger'>&#8377;40.00</h5>
                      <Link to="/Order" class="btn btn-primary">Order Now !</Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 food_menu  py-4">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={img1} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Pork Sandwich</h5>
                      <p class="card-text">They're wherein heaven seed hath nothing</p>
                      <h5 className='text-danger'>&#8377;60.00</h5>
                      <Link to="/Order" class="btn btn-primary">Order Now !</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 food_menu  py-4">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={img2} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Paneer Tikka</h5>
                      <p class="card-text">They're wherein heaven seed hath nothing</p>
                      <h5 className='text-danger'>&#8377;40.00</h5>
                      <Link to="/Order" class="btn btn-primary">Order Now !</Link>

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