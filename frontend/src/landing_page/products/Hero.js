import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5">
        <h1 className="text-muted mt-3 fs-4">Technology</h1>
        <h3 className="mt-3">Sleek, modern and intuitive trading platforms</h3>
        <p className="mt-3 mb-5">
          Check out{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings
          </a>{" "}
          <i class="fa-solid fa-arrow-right"></i>
        </p>
      </div>
    </div>
  );
}
export default Hero;
