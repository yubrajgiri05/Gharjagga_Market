import React, { useState } from "react";
import "../login.css";
import logo from "../../General/assets/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [state, setState] = useState({
    username:'',
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
        <div className="register-box ">
          <div className="login-logo  d-flex  justify-content-center align-items-center ">
            <img src={logo} alt="" />
          </div>
          <h2 className="text-center login-text">REGISTER</h2>

          <form onSubmit={handleSubmit} action="" className="form-element">
            <div className="d-flex gap-3 justify-content-center register-colume">
              <div className="form-group ">
                <label className="control-label " htmlFor="username">
                  Name
                </label>
                <div className="input-group">
                  <div className="input-group-addon">
                    <FaUserAlt />
                  </div>
                  <input
                    className="form-control"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="First and Last Name"
                    required
                    value={state.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group ">
                <label className="control-label " htmlFor="email">
                  Email Address
                </label>
                <div className="input-group">
                  <div className="input-group-addon">
                    <MdEmail />
                  </div>
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Emaill"
                    required
                    value={state.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex gap-3 justify-content-center  register-colume">
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
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Enter Password"
                    value={state.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* <div className="form-group ">
                <label className="control-label " htmlFor="password">
                  Confirm Password
                </label>
                <div className="input-group">
                  <div className="input-group-addon">
                    <RiLockPasswordFill />
                  </div>
                  <input
                    className="form-control"
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Re-enter Password"
                  />
                </div>
              </div> */}
            </div>
            <div className="d-flex gap-2 justify-content-center pt-3">
              <input
                className="primary-btn"
                type="submit"
                value="Register"
              ></input>
              <NavLink to="/login" className="secondary-btn">
                Login
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
