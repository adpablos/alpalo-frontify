import React, { Component } from 'react';
import { connect } from "frontity";
import profilepic from "../images/profilepic.jpg";

const About = ({state}) => {

    if(state.theme.resumeData){
        var main = state.theme.resumeData.main;
        var name = main.name;
        var bio = main.bio;
        var street = main.address.street;
        var city = main.address.city;
        var state = main.address.state;
        var zip = main.address.zip;
        var phone= main.phone;
        var email = main.email;
        var resumeDownload = main.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
}

export default connect(About);
