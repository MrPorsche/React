import React from "react";
import img from "../img/ppc_img.webp";
import { NavLink } from "react-router-dom";

const Home =() => {
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 heading">
                <h1> Grow your business with <strong className="brand-name">TechWeb</strong> <hr /></h1>
                <h2 className="my-3">We are the Team of talented developers.</h2>
                <div className="btn">
                  <NavLink to="/services" className="btn-get-started">Get Started</NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={img} alt="home img" className="img-fluid animated"/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;