import React from 'react';
import { Link } from 'react-router-dom';
import chef1 from "../images/chef1.jpg";
import chefs2 from "../images/chefs2.jpg";
import chefs3 from "../images/chefs3.jpg";


function Chefs() {
    return (
        <>
            <div className='container py-5'>
                <h6>Team Member</h6>
                <h1 className='pb-5'>Our Experience Chefs</h1>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div class="card chefs shadow p-2 bg-white mb-5" style={{ width: "18rem" }}>
                            <img src={chef1} class="card-img-top" alt="..." className="img-fluid" />
                            <div class="card-body text-center">
                                <h5 class="card-title">Roohi</h5>
                                <p class="card-text">Chef Master</p>
                                <Link to="/contact" class="btn btn-primary">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div class="card chefs shadow p-2 bg-white mb-5" style={{ width: "18rem" }}>
                            <img src={chefs3} class="card-img-top" alt="..." className="img-fluid" />
                            <div class="card-body text-center">
                                <h5 class="card-title">Aakash</h5>
                                <p class="card-text">Chef Master</p>
                                <Link to="/contact" class="btn btn-primary">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div class="card chefs shadow p-2  bg-whit  mb-5" style={{ width: "18rem" }}>
                            <img src={chefs2} class="card-img-top" alt="..." className="img-fluid" />
                            <div class="card-body text-center">
                                <h5 class="card-title">Justin</h5>
                                <p class="card-text">Chef Master</p>
                                <Link to="/contact" class="btn btn-primary">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7EdpBH81XIY"  allow="accelerometer; autoplay;    " allowfullscreen></iframe> */}
        </>
    )
}

export default Chefs