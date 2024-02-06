import React, { useState } from "react";
import "../login.css";
import logo from "../../General/assets/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  const [state, setState] = useState({
    email:'',
    password:''

  });

  const handleChange = (event)=>{
    const {name, value}=event.target;
    setState({
      ...state,
      [name]:value
    });
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log('state',state);
  }

  return (
    <>
      <div className="container d-flex  justify-content-center align-items-center">
        <div className="login-box ">
          <div className="login-logo  d-flex  justify-content-center align-items-center ">
            <img src={logo} alt="" />
          </div>
          <h2 className="text-center">LOGIN</h2>

          <form onSubmit={handleSubmit}  className="form-element">
            <div className="form-group ">
              <label className="control-label " htmlFor="email">
                Email Address
              </label>
              <div className="input-group">
                <div className="input-group-addon">
                  <FaUserAlt />
                </div>
                <input
                  className="form-control"
                  placeholder="Enter Email"
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={state.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group ">
              <label className="control-label " htmlFor="password">
                Password
              </label>
              <div className="input-group">
                <div className="input-group-addon">
                  <RiLockPasswordFill />
                </div>
                <input
                  className="form-control"
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={state.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <NavLink to="/forgetpassword" className="forgetpassword text-start">
              Forgot Password
            </NavLink>
            <div className="d-flex gap-2 justify-content-center pt-3">
              <input
                className="primary-btn"
                type="submit"
                value="Login"
              ></input>
              <NavLink to="/register" className="secondary-btn">
                Register
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
