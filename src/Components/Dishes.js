import React from 'react';
import burger from "../images/burger.jpg";
import noddles from "../images/noddles.jpg";
import sandwich from "../images/sandwich.jpg";
import { Link } from 'react-router-dom';


function Dishes() {
    return (
        <>
            <div className='container py-5'>
                <h6>Popular Dishes</h6>
                <h1 className='pb-2'>Our Exclusive Items</h1>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div class="card dishes shadow  bg-white mb-5" style={{ width: "18rem" }}>
                            <img src={burger} class="card-img-top" alt="..." className="img-fluid" />
                            <div class="card-body">
                                <h5 class="card-title">Indian Burger</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to="/Order" class="btn btn-primary">Order Now !</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div class="card dishes shadow bg-white mb-5" style={{ width: "18rem" }}>
                            <img src={noddles} class="card-img-top" alt="..." className="img-fluid" />
                            <div class="card-body">
                                <h5 class="card-title">Cremy Noodles</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to="/Order" class="btn btn-primary">Order Now !</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div class="card dishes shadow  bg-whit  mb-5" style={{ width: "18rem" }}>
                            <img src={sandwich} class="card-img-top" alt="..." className="img-fluid" />
                            <div class="card-body">
                                <h5 class="card-title">Sandwich</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to="/Order" class="btn btn-primary">Order Now !</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7EdpBH81XIY"  allow="accelerometer; autoplay;    " allowfullscreen></iframe> */}
        </>
    )
}

export default Dishes