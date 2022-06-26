import { Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Dishes from './Components/Dishes';
import Food from "./Components/Food"
import Chefs from './Components/Chefs';
import Booktable from './Components/Booktable';
import Custumers from './Components/Custumers';
import Contact from './Components/Contact';
import Order from "./Components/Order";
import Error from './Components/Error';
// import {
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
<>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route extact path='/' element={<Home/>} />
      <Route extact path='/about' element={<About/>} />
      <Route extact path='/dishes' element={<Dishes/>} />
      <Route extact path='/Food' element={<Food/>} />
      <Route extact path='/chefs' element={<Chefs/>} />
      <Route extact path='/booktable' element={<Booktable/>} />
      <Route extact path='/custumers' element={<Custumers/>}/>
      <Route extact path='/contact' element={<Contact/>} />
      <Route extact path='/order' element={<Order/>} />
      <Route  element={<Error/>}/>

    </Routes>


    </>
  );
}

export default App;


// import React from 'react';
// import bgimg from "./images/coffeehome.jpg";

// function App() {
//   return (
//     <div className='home' style={{backgroundImage:`url(${bgimg})`, height:"100vh", width:"100%", backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundPosition:"center"}}>
//         <h1 className='text-white'>hello how are you?</h1>
//         <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magnam mollitia. Eos, consectetur vitae alias dolore hic, dolores illo rerum accusantium amet, ex suscipit. Quaerat repellat a at pariatur saepe veniam accusantium porro molestias modi error nisi deserunt beatae expedita corrupti qui, adipisci recusandae necessitatibus officia temporibus? Beatae quia sapiente dolore nam amet ad libero a, similique fuga, dolor illum suscipit ipsum magnam doloremque repellat cupiditate repudiandae exercitationem asperiores quis obcaecati incidunt ex! Amet illo iste aperiam doloribus libero voluptates culpa sed officiis neque repudiandae quam, nam laborum fuga itaque ratione, voluptas ab omnis dolore tenetur. Ullam ab saepe ducimus?</p>
//     </div>
//   )
// }

// export default App;

