import React from 'react'
import '../login.css'
import logo from '../../General/assets/logo.png'

const ForgetPassword = () => {
  return (
    <>
      <div className="container d-flex  justify-content-center align-items-center">
        <div className="register-box ">
          <div className="login-logo  d-flex  justify-content-center align-items-center ">
             <img src={logo} alt="" /> 
          </div>
          <h2 className='text-center login-text'>Reset Password</h2>


        <form action='' className='form-element'>
                    <div className="form-group d-flex">
                    <label className="control-label " htmlFor="email">
                        Email Address
                    </label>
                        <input className="form-control" id="email" name="email" type="email" required />
                   </div>
            <div className="d-flex gap-2 justify-content-center pt-3">
              <input className="primary-btn" type="submit" value="Submit"></input>
            </div>
        </form>
       </div>
      </div>
    </>
  )
}

export default ForgetPassword
