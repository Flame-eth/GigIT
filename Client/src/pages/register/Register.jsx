import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Loading...", {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });

      const { username: username, password: password } = user;
      const res = await newRequest.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("currentUser", JSON.stringify(res.data));

      toast.success("Registration Successful!", {
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
      }, 5000);
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="register">
        <form onSubmit={handleSubmit}>
          <div className="left">
            <h1>Create a new account</h1>
            <label htmlFor="">Username</label>
            <input
              name="username"
              type="text"
              placeholder="johndoe"
              onChange={handleChange}
            />
            <label htmlFor="">Email</label>
            <input
              name="email"
              type="email"
              placeholder="email"
              onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input name="password" type="password" onChange={handleChange} />
            <label htmlFor="">Profile Picture</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <label htmlFor="">Country</label>
            <input
              name="country"
              type="text"
              placeholder="Usa"
              onChange={handleChange}
            />
            <button type="submit">Register</button>
          </div>
          <div className="right">
            <h1>I want to become a seller</h1>
            <div className="toggle">
              <label htmlFor="">Activate the seller account</label>
              <label className="switch">
                <input type="checkbox" onChange={handleSeller} />
                <span className="slider round"></span>
              </label>
            </div>
            <label htmlFor="">Phone Number</label>
            <input
              name="phone"
              type="text"
              placeholder="+1 234 567 89"
              onChange={handleChange}
            />
            <label htmlFor="">Description</label>
            <textarea
              placeholder="A short description of yourself"
              name="desc"
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}></textarea>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Register;
