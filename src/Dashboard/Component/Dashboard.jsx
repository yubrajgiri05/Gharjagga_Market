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
                       
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-rent" role="tabpanel" aria-labelledby="v-pills-rent-tab" tabIndex={0}>
                    <div className="dashboard-breadcurmb d-flex align-items-center gap-2">
                        <FaHome className="profile-icon"/> Home
                         <MdKeyboardDoubleArrowRight className="profile-icon-arrow px-2"/>
                         <FaPaperPlane className="profile-icon"/> For Rent
                    </div>
                    <div className="dashboard-information">
                        
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
                    </div>
                </div>
            </div>
        </Col>
    </Row>

    </>
  )
}

export default Dashboard
