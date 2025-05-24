import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Finzaar Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3">
          <img src="media/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investing platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/streakLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted">Systematic trading platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/sensibullLogo.svg" style={{ width: "40%" }} />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/zerodhaFundhouse.png" style={{ width: "50%" }} />
          <p className="text-small text-muted">Our asset management venture</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/goldenpiLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/dittoLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted">Personalized advice on life</p>
        </div>
        <button
          className="p-3 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={() => navigate("/signup")}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}
export default Universe;
