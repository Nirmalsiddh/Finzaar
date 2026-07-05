import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  // We can't check `cookies.token` directly here: the backend sets the
  // token cookie as httpOnly, which means it is intentionally invisible to
  // client-side JS (react-cookie included). It IS still sent to the server
  // automatically on credentialed requests, so the server (/userverification)
  // must be the source of truth for whether the user is logged in.
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/userverification`,
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (status) {
          setUsername(user);
          setIsVerifying(false);
        } else {
          removeCookie("token");
          window.location.href = process.env.REACT_APP_FRONTEND_URL + "/login";
        }
      } catch (error) {
        console.error(error);
        window.location.href = process.env.REACT_APP_FRONTEND_URL + "/login";
      }
    };
    verifyCookie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Logout = () => {
    removeCookie("token");
    window.location.href = process.env.REACT_APP_FRONTEND_URL + "/signup";
  };

  if (isVerifying) {
    // Avoid flashing the dashboard (or bouncing out of it) before we know
    // the real auth state.
    return null;
  }

  return (
    <>
      <TopBar onButCli={Logout} username={username}/>
      <Dashboard/>
    </>
  );
};

export default Home;