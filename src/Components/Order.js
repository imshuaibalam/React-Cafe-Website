import React from 'react';
import about from "../images/coffeehome.jpg"

// style={{backgroundImage:`url(${about})`}}
const bgimg = {
    backgroundImage: `url(${about})`,
    height: "auto",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundBlendMode: "darken"
}

function Order() {
    return (
        <div style={bgimg}>
            <div className="container py-5">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <h2 className='text-light py-5'>We hope that your order will arrive on time.Thank you very much for ordering.</h2>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <h6 className='text-light'>Order</h6>
                        <h1 className='pb-3 text-light'>Order Place Now !</h1>
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label text-light">Name*</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label text-light">Email adderess*</label>
                                <input type="email" class="form-control" id="inputPassword4" />
                            </div>

                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label text-light">Phone number*</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label text-light">Pin Code*</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label text-light">*Adderess</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Order Now !</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Order;