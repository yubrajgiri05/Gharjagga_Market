import React from 'react'
import '../dashboard.css'
import { Col, Row } from 'react-bootstrap'
import { FaRegUserCircle,FaHeart,FaHome,FaPaperPlane,FaUser,FaPhoneAlt } from "react-icons/fa";
import { MdAddBox, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoChatbubbles,IoSettings,IoLocation,IoMail } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import profile from '../assets/profile.svg'

const Dashboard = () => {
  return (
    <>
    <Row className="g-3">
        <Col lg={4} md={10}>
            <div className="nav flex-column align-items-center nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <img src={profile} alt="" style={{height:90,width:90}} />
                <p className='user-name'>User Name</p>
                <button className="nav-link active" id="v-pills-information-tab" data-bs-toggle="pill" data-bs-target="#v-pills-information" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    <FaRegUserCircle className="profile-icon"/> Basic Information
                </button>
                <button className="nav-link" id="v-pills-favourite-tab" data-bs-toggle="pill" data-bs-target="#v-pills-favourite" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                    <FaHeart className="profile-icon"/>Favourite
                </button>
                <button className="nav-link" id="v-pills-ads-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ads" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                   <MdAddBox className="profile-icon"/> My Ads
                </button>
                <button className="nav-link" id="v-pills-sell-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sell" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                   <FaHome className="profile-icon"/> For Sell
                </button>
                <button className="nav-link" id="v-pills-rent-tab" data-bs-toggle="pill" data-bs-target="#v-pills-rent" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                   <FaPaperPlane className="profile-icon"/> For Rent
                </button>
                <button className="nav-link" id="v-pills-chats-tab" data-bs-toggle="pill" data-bs-target="#v-pills-chats" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                   <IoChatbubbles className="profile-icon"/> Chat
                </button>
                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                   <IoSettings className="profile-icon"/> Setting
                </button>
            </div>
        </Col>
        <Col lg={8}>
            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-information" role="tabpanel" aria-labelledby="v-pills-information-tab" tabIndex={0}>
                    <div className="dashboard-breadcurmb d-flex align-items-center gap-2">
                        <FaHome className="profile-icon"/> Home
                         <MdKeyboardDoubleArrowRight className="profile-icon-arrow px-2"/>
                         <FaRegUserCircle className="profile-icon"/> Basic Information
                    </div>
                    <div className="dashboard-information">
                        <h2>Basic Information</h2>
                        <Row className='gx-5 gy-3'>
                            <Col lg={6} md={6} className=' d-flex align-items-center gap-2'>
                                <FaUser/>: Full Name
                            </Col>
                            <Col lg={6} md={6} className=' d-flex align-items-center gap-2'>
                                <FaPhoneAlt/>: 98XXXXXXXXXXXX 
                            </Col>
                            <Col lg={6} md={6} className=' d-flex align-items-center gap-2'>
                                <IoLocation/>: Kathmandu (please update location)
                            </Col>
                            <Col lg={6} md={6} className=' d-flex align-items-center gap-2'>
                                <RiLockPasswordFill/>: ********
                            </Col>
                            <Col lg={6} md={6} className=' d-flex align-items-center gap-2'>
                                <IoMail/>: abcdistu@gmail.com
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-favourite" role="tabpanel" aria-labelledby="v-pills-favourite-tab" tabIndex={0}>
                    <div className="dashboard-breadcurmb d-flex align-items-center gap-2">
                        <FaHome className="profile-icon"/> Home
                         <MdKeyboardDoubleArrowRight className="profile-icon-arrow px-2"/>
                         <FaHeart className="profile-icon"/>Favourite
                    </div>
                    <div className="dashboard-information">
                        <p className='error'>We are under construction.. :):):):)</p>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-ads" role="tabpanel" aria-labelledby="v-pills-ads-tab" tabIndex={0}>
                    <div className="dashboard-breadcurmb d-flex align-items-center gap-2">
                        <FaHome className="profile-icon"/> Home
                         <MdKeyboardDoubleArrowRight className="profile-icon-arrow px-2"/>
                         <MdAddBox className="profile-icon"/> My Ads
                    </div>
                    <div className="dashboard-information">
                        <h2>Properties Sale Ads</h2>
                        <p className='error'>No ADs Found</p>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-sell" role="tabpanel" aria-labelledby="v-pills-sell-tab" tabIndex={0}>
                    <div className="dashboard-breadcurmb d-flex align-items-center gap-2">
                        <FaHome className="profile-icon"/> Home
                         <MdKeyboardDoubleArrowRight className="profile-icon-arrow px-2"/>
                         <FaHome className="profile-icon"/> For Sell
                    </div>
                    <div className="dashboard-information">
                       <form action=""  className='d-flex flex-column align-items-center'>
                         <Row className='g-4'>
                            <Col lg={4} md={6}>
                            <div className="form-group ">
                                    <label className="control-label " htmlFor="password">
                                                Type
                                    </label>
                                    <select required="required" name="SearchKey" className="form-control">
                                                <option value selected disabled>--Type for--</option>
                                                <optgroup label="Properties">
                                                <option value="House(For home Purpose)"> House</option>
                                                <option value="House(For Commercial Purpose)">Commercial House</option>
                                                <option value="Land"> Land</option>	
                                                <option value="Apartment"> Apartment</option>	
                                                <option value="Restaurant"> Restaurant</option>	
                                                </optgroup>
                                                <optgroup label="Rent">
                                                <option value="Room"> Room</option>
                                                <option value="Office">Office</option>
                                                <option value="Apartment">Apartment</option>
                                                <option value="RentLand">Land</option>
                                                <option value="RentHouse">House</option>
                                                </optgroup>
                                </select>
                            </div>
                            <div className="form-group ">
                                    <label className="control-label " htmlFor="password">
                                    Area(Sq.ft/Anna)
                                    </label>
                                    <input className="form-control" placeholder="Area" id="area" name="area" type="text" required />
                            </div>
                            <div className="form-group ">
                                    <label className="control-label " htmlFor="password">
                                    Nearest Landmark
                                    </label>
                                    <input className="form-control" placeholder="Nearest Landmark" id="landmark" name="landmark" type="text" required />
                            </div>
                            <div className="form-group ">
                                    <label className="control-label " htmlFor="password">
                                    House Face
                                    </label>
                                    <select required="required" name="SearchKey" className="form-control">
                                                <option value selected disabled>--House Face--</option>
                                                <option value="east"> EAST</option>
                                                <option value="west"> WEST</option>	
                                                <option value="north"> NORTH</option>	
                                                <option value="south"> SOUTH</option>	
                                </select>
                            </div>
                            <div className="form-group ">
                                    <label className="control-label " htmlFor="password">
                                    Floor
                                    </label>
                                    <input className="form-control" placeholder="Floor" id="landmark" name="landmark" type="text" required />
                            </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="form-group ">
                                        <label className="control-label " htmlFor="password">
                                        Location
                                        </label>
                                        <input className="form-control" placeholder="Location" id="location" name="location" type="text" required />
                                </div>
                                <div className="form-group ">
                                        <label className="control-label " htmlFor="password">
                                        Road(ft)
                                        </label>
                                        <input className="form-control" placeholder="Road" id="road" name="road" type="text" required />
                                </div>
                                <div className="form-group ">
                                        <label className="control-label " htmlFor="password">
                                        Price (RS)
                                        </label>
                                        <input className="form-control" placeholder="Rs. XXXX" id="price" name="price" type="text" required />
                                </div>
                                <div className="form-group ">
                                        <label className="control-label " htmlFor="password">
                                        Parking
                                        </label>
                                        <input className="form-control" placeholder="1 Car, 2 Bike" id="parking" name="parking" type="text" required />
                                </div>
                            </Col>
                            <Col lg={4} md={12}>
                            <h3 className='text-center'>Upload Properties Image</h3>
                            <p>(Maximum supports 6 Images. Each image must be below 1MB. )</p>
                            
                            <input type='file' title=" "/>

                            </Col>
                         </Row>
                         <input className="primary-btn mt-3 text-center" type="submit" value="Submit"></input>
                       </form>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-rent" role="tabpanel" aria-labelledby="v-pills-rent-tab" tabIndex={0}>
                    <div className="dashboard-breadcurmb d-flex align-items-center gap-2">
                        <FaHome className="profile-icon"/> Home
                         <MdKeyboardDoubleArrowRight className="profile-icon-arrow px-2"/>
                         <FaPaperPlane className="profile-icon"/> For Rent
                    </div>
                    <div className="dashboard-information">
                       <form action="" className='d-flex flex-column align-items-center' >
                         <Row className='g-4'>
                            <Col lg={4} md={6}>
                            <div className="form-group ">
                                    <label className="control-label " htmlFor="password">
                                                Type
                                    </label>
                                    <select required="required" name="SearchKey" className="form-control">
                                                <option value selected disabled>--Type for--</option>
                                                <optgroup label="Properties">
                                                <option value="House(For home Purpose)"> House</option>
                                                <option value="House(For Commercial Purpose)">Commercial House</option>
                                                <option value="Land"> Land</option>	
                                                <option value="Apartment"> Apartment</option>	
                                                <option value="Restaurant"> Restaurant</option>	
                                                </optgroup>
                                                <optgroup label="Rent">
                                                <option value="Room"> Room</option>
                                                <option value="Office">Office</option>
                                                <option value="Apartment">Apartment</option>
                                                <option value="RentLand">Land</option>
                                                <option value="RentHouse">House</option>
                                                </optgroup>
                                </select>
                            </div>
                            <div className="form-group ">
                                        <label className="control-label " htmlFor="password">
                                        Parking
                                        </label>
                                        <input className="form-control" placeholder="1 Car, 2 Bike" id="parking" name="parking" type="text" required />
                            </div>
                            <div className="form-group ">
                                    <label className="control-label " htmlFor="password">
                                    Floor
                                    </label>
                                    <input className="form-control" placeholder="Floor" id="landmark" name="landmark" type="text" required />
                            </div>
                            <div className="form-group ">
                                    <label className="control-label " htmlFor="password">
                                    House Face
                                    </label>
                                    <select required="required" name="SearchKey" className="form-control">
                                                <option value selected disabled>--House Face--</option>
                                                <option value="east"> EAST</option>
                                                <option value="west"> WEST</option>	
                                                <option value="north"> NORTH</option>	
                                                <option value="south"> SOUTH</option>	
                                </select>
                            </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="form-group ">
                                        <label className="control-label " htmlFor="password">
                                        Location
                                        </label>
                                        <input className="form-control" placeholder="Location" id="location" name="location" type="text" required />
                                </div>
                                <div className="form-group ">
                                    <label className="control-label " htmlFor="password">
                                    Nearest Landmark
                                    </label>
                                    <input className="form-control" placeholder="Nearest Landmark" id="landmark" name="landmark" type="text" required />
                            </div>
                                <div className="form-group ">
                                        <label className="control-label " htmlFor="password">
                                        Price (RS)
                                        </label>
                                        <input className="form-control" placeholder="Rs. XXXX" id="price" name="price" type="text" required />
                                </div>
                                <div className="form-group ">
                                        <label className="control-label " htmlFor="password">
                                        Road(ft)
                                        </label>
                                        <input className="form-control" placeholder="Road" id="road" name="road" type="text" required />
                                </div>
                            </Col>
                            <Col lg={4} md={12}>
                            <h3 className='text-center'>Upload Properties Image</h3>
                            <p>(Maximum supports 6 Images. Each image must be below 1MB. )</p>
                            
                               <input type="file" name="image" />

                            </Col>
                         </Row>
                         <input className="primary-btn mt-3 " type="submit" value="Submit"></input>
                       </form>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-chats" role="tabpanel" aria-labelledby="v-pills-chats-tab" tabIndex={0}>
                    <div className="dashboard-breadcurmb d-flex align-items-center gap-2">
                        <FaHome className="profile-icon"/> Home
                         <MdKeyboardDoubleArrowRight className="profile-icon-arrow px-2"/>
                         <IoChatbubbles className="profile-icon"/> Chat
                    </div>
                    <div className="dashboard-information">
                    <p className='error'>We are under construction.. :):):):)</p>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex={0}>
                     <div className="dashboard-breadcurmb d-flex align-items-center gap-2">
                        <FaHome className="profile-icon"/> Home
                         <MdKeyboardDoubleArrowRight className="profile-icon-arrow px-2"/>
                         <IoSettings className="profile-icon"/> Setting
                    </div>
                    <div className="dashboard-information">
                    <p className='error'>Change Password</p>
                    <form action="">
                        <div className="form-group ">
                            <label className="control-label " htmlFor="password">
                                 Old Password
                             </label>
                            <input className="form-control" placeholder="***********" id="password" name="password" type="password" required />
                        </div>
                        <div className="form-group ">
                            <label className="control-label " htmlFor="password">
                                New Password
                             </label>
                            <input className="form-control" placeholder="***********" id="password" name="password" type="password" required />
                        </div>
                        <div className="form-group ">
                            <label className="control-label " htmlFor="password">
                                Confirm New Password
                             </label>
                            <input className="form-control" placeholder="***********" id="password" name="password" type="password" required />
                        </div>
                        <input className="primary-btn mt-3" type="submit" value="Update"></input>
                    </form>    
                    <div className="delete-account text-danger">
                        Delete Account
                    </div>
                    </div>
                </div>
            </div>
        </Col>
    </Row>

    </>
  )
}

export default Dashboard
