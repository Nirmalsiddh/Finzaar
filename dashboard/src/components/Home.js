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
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        // navigate("http://localhost:3000/");
        window.location.href = "http://localhost:3000/";
      }
      const { data } = await axios.post(
        "http://localhost:3002/userverification",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status ? {} : (removeCookie("token"), window.location.href = "http://localhost:3000/login");
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    window.location.href = "http://localhost:3000/signup";
  };
  return (
    <>
      <TopBar onButCli={Logout} username={username}/>
      <Dashboard/>
    </>
  );
};

export default Home;
