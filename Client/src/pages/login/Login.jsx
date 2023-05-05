import React, { useEffect, useState } from "react";
import "./login.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import newRequest from "../../utils/newRequest";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Loading...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    try {
      const res = await newRequest.post("/auth/login", {
        username,
        password,
      });
      if (res.status == 200) {
        setError(null);
      }
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
      // console.log(res.data);
    } catch (error) {
      setError(error.response.data);
      toast.error(error.response.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    if (error) {
      setClicked(true);
    }
  }, [clicked, error]);
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="login">
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={() => setClicked(!clicked)}>
              Login
            </button>
            {error && clicked && <span className="error">{error}</span>}
          </form>
          <div className="login-footer">
            <span>Don&apos;t have an account? </span>
            <Link to="/register" className="link">
              Register
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
