import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import CountUp from 'react-countup';

const Connections = () => (
    <div className='connectionDiv container-fluid d-flex flex-column align-items-center py-5 my-5'>
        <div className='connect-head-div'>
            <span className='intro-lead'>Prepare for Success</span>
        </div>
        <div className='text-white'>
            <h1>We're Pround of our Connections</h1>
        </div>

        <div className="connection-counter-wrapper container text-white my-3">
          <div className="row">
            <div className="col-md-3 text-center">
              <span className="counter-icon">
                <FontAwesomeIcon icon={faCalendarAlt} className="m-0" />
              </span>
              <p className="counter-number"><CountUp end={17} duration={5} /></p>
              <p className="counter-label">Summer Programs</p>
            </div>
            <div className="col-md-3 text-center">
              <span className="counter-icon">
                <FontAwesomeIcon icon={faHandshake} className="m-0" />
              </span>
              <p className="counter-number"><CountUp end={50} duration={5} /></p>
              <p className="counter-label">Internships</p>
            </div>

            <div className="col-md-3 text-center">
              <span className="counter-icon">
                <FontAwesomeIcon icon={faStar} className="m-0" />
              </span>
              <p className="counter-number"><CountUp end={25} duration={5} /></p>
              <p className="counter-label">Top Category<span className="category">Sports</span></p>
            </div>
            <div className="col-md-3 text-center">
              <span className="counter-icon">
                <FontAwesomeIcon icon={faHeart} className="m-0" />
              </span>
              <p className="counter-number"><CountUp end={100} duration={5} /></p>
              <p className="counter-label">Youth Organization</p>
            </div>
          </div>
        </div>

        <button className='connectBtn connectBtnSolid'>Join the Movement</button>
    </div>
  );

  export default Connections;
