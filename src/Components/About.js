import React from 'react';
import about from "../images/about.jpg"

function About() {
    return (
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <img src={about} alt="" className='img-fluid rounded-circle'/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <h6>Our History</h6>
                        <h1 className='pb-3'>Where The Food’s As Good As The Root Beer.</h1>
                        <h3 className='pb-3'>Satisfying people hunger for simple pleasures</h3>
                        <p>May over was. Be signs two. Spirit. Brought said dry own firmament lesser best sixth deep abundantly bearing, him, gathering you blessed bearing he our position best ticket in month hole deep</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About