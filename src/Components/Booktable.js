import React from 'react';
import about from "../images/noddles.jpg"

// style={{backgroundImage:`url(${about})`}}
const bgimg = {
    backgroundImage: `url(${about})`,
    height: "auto",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundBlendMode: "darken"
}

function Booktable() {
    return (
        <div style={bgimg}>
            <div className="container py-5">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <h6>Reservation</h6>
                        <h1 className='pb-3'>Book A Table</h1>
                        <form class="row g-3" action='/'>
                            <div class="col-md-6">
                                <label class="form-label">Name*</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Email adderess*</label>
                                <input type="email" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Persons*</label>
                                <input type="number" class="form-control" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Phone number*</label>
                                <input type="number" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Date*</label>
                                <input type="number" class="form-control" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Time*</label>
                                <input type="number" class="form-control" id="inputPassword4" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your Notes*</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Booktable Now !</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 py-5">
                        <h2 className='text-success py-5 container'>We will try to give you all the facilities.
Thank you for visiting our cafe.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booktable;