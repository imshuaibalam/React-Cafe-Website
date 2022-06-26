import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light text-light bg-dark py-3 sticky-top">
                <div class="container">
                    <Link class="navbar-brand text-light fs-3" to="/">ApnaCafe</Link>
                    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                            <li class="nav-item">
                                <Link class="nav-link active text-light px-4" aria-current="page" to="/" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light px-4" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light px-4" to="/Food">Menu</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light px-4" to="/Dishes">Special Dishes</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light px-4" to="/Chefs">Chefs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light px-4" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                        <Link class="btn btn-outline-light" to="/Booktable" type="submit">Book A Table</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar