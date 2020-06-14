import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="contact">
      <div  className="container-fluid bg-info contact-us p-5">
        <div  className="row align-items-center">
          <div className="col-lg-5 text-white">
            <h6 className="intro-lead">Let's Connect</h6>
            <h1  className="display-4 text-white">Contact Us</h1>
            <p>We're here to help and answer any questions you might have. We look forward to hearing from you!</p>
            <ul className="list-inline m-0 text-uppercase social-media">
              <li className="list-inline-item"><Link href="#" className="m-0">
              <FontAwesomeIcon icon={faFacebook} className="m-0" /></Link></li>
              <li className="list-inline-item"><Link href="#" className="m-0">
              <FontAwesomeIcon icon={faTwitter} className="m-0" /></Link></li>
              <li className="list-inline-item"><Link href="#" className="m-0">
              <FontAwesomeIcon icon={faInstagram} className="m-0" /></Link></li>
              <li className="list-inline-item"><Link href="#" className="m-0">
              <FontAwesomeIcon icon={faAt} className="m-0" /></Link></li>
              <li className="list-inline-item"><Link href="#" className="m-0">
              <FontAwesomeIcon icon={faPhone} className="m-0" /></Link></li>
            </ul>

          </div>
          <div className="col-lg-6">
          <form className="text-white">

            <div  className="form-group">
            <label for="fullname">Full Name</label>
            <input id="fullname"  className="form-control form-control-lg" type="text" placeholder="full name"></input>
            </div>

            <div  className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email"  className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp"  className="form-text text-warning">We'll never share your email with anyone else.</small>
            </div>

            <div  className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>


            <button type="submit"  className="btn btn-info">Submit</button>
            </form>


          </div>
        </div>
      </div>
    </div>

  );
};

export default Contact;
