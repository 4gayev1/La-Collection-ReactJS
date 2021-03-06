import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/2822475_4_seoimageog_23985231-high_res-peaky-blinders-vi_1_.jpg" className="card-img" alt="Background" style={{"height" : " 750px","width":"1721"}}/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
