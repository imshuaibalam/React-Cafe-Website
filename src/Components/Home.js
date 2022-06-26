
import React from 'react';
import { Link } from 'react-router-dom';
import heroimg from "../images/pizzpng.png"

const heroimgstyle = {
  maxHeight:"100vh",
  width:"100%",
}

function Home() {
  return (
    <div className='home d-flex align-items-center' style={{height:"90vh", width:"100%"}}>
      <div className="hero_content container" >
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg6">
            <h3 className='text-success pb-2'>Expensive But The Best </h3>
            <h1 className='text-dark pb-2'>Deliciousness jumping into the mouth</h1>
            <p className='text-dark'>Together creeping heaven upon third dominion be upon won't darkness rule land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning</p>
            <Link to="/Booktable"><button type="button" class="btn btn-success btn-lg">Reservation</button></Link>
            <Link to="/dishes"><button type="button" class="btn btn-danger btn-lg mx-4">Watch Our Story</button></Link>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg6 pb-3">
            <img src={heroimg} alt="" style={heroimgstyle}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;