import React from "react";
import "./login.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login-container">
          <h1>Login</h1>
          <form>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
        <Footer />
    </>
  );
};

export default Login;
