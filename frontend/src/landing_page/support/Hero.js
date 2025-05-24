import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3">
        <div className="col-1"></div>
        <div className="col-6 p-5">
          <h1 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O, why is my order getting rejected..." />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins </a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-5 p-5">
          <h1 className="fs-4">Featured</h1>
          <ol>
            <li>
              <a href="">Latest Intraday leverages and Square-off timings</a>
            </li>
            <li>
              <a href="">Surveillance measure on scrips - May 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
export default Hero;
