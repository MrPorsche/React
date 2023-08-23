import React from "react";
import img from "../img/ppc_img.webp";
import { NavLink } from "react-router-dom";

const About =() => {
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 heading">
                <h1> Know more about <br /> <strong className="brand-name">TechWeb</strong></h1>
                <div className="btn">
                  <NavLink to="/contact" className="btn-get-started">Contact Now</NavLink>
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

export default About;