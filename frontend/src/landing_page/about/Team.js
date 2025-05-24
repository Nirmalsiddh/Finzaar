import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mb-5 border-top ">
        <h1 className="fs-2 text-center ">People</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/NirmalSiddh.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nirmal Siddh</h4>
          <h5>Founder, CEO</h5>
        </div>
        <div className="col-6 p-3">
          <p>
            Welcome to Finzaar, a modern, reliable, and transparent platform for
            smart investors. Inspired by the simplicity and performance of
            platforms like Zerodha, Finzaar is designed to empower every trader
            and investor with cutting-edge tools, a seamless trading experience,
            and zero hidden charges.
          </p>
          <p>
            Finzaar is built by Nirmal Siddh, a passionate software engineer,
            Java DSA enthusiast, and MERN stack developer with a strong
            foundation in data structures, backend systems, and financial
            technology solutions.
          </p>
          <p>
            Connect on <a href="/">Homepage</a> /<a href="https://x.com/nirmalsiddh">X</a> /
            <a href="https://www.linkedin.com/in/nirmal-siddh-6257822a7/">Linked-In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Team;
