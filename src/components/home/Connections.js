import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import CountUp from 'react-countup';


const Connections = ({prgArr}) => {

    // const categoryCounts = () => {
    //     let catArr = (prgArr.map(prg => prg.categories))
    //     catArr = catArr.flat()
    //      catArr = catArr.reduce((acc, word) => {
    //         acc[word] = (acc[word] || 0) + 1
    //         return acc;
    //     },[])

    // };

    return(
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
              <p className="counter-number"><CountUp end={(prgArr.filter(prg=> prg.start_season === 'Summer' || prg.start_season === 'N/A')).length} duration={5} /></p>
              <p className="counter-label">Summer Programs</p>
            </div>
            <div className="col-md-3 text-center">
              <span className="counter-icon">
                <FontAwesomeIcon icon={faHandshake} className="m-0" />
              </span>
              <p className="counter-number"><CountUp end={(prgArr.filter(prg=> prg.categories.includes('education') || prg.categories.includes('colleges') || prg.categories.includes('schools'))).length} duration={5} /></p>
              <p className="counter-label">Educational Programs</p>
            </div>

            <div className="col-md-3 text-center">
              <span className="counter-icon">
                <FontAwesomeIcon icon={faStar} className="m-0" />
              </span>
              <p className="counter-number"><CountUp end={11} duration={5} /></p>
              <p className="counter-label">Top Category<span className="category">Sports</span></p>
            </div>
            <div className="col-md-3 text-center">
              <span className="counter-icon">
                <FontAwesomeIcon icon={faHeart} className="m-0" />
              </span>
              <p className="counter-number"><CountUp end={(prgArr.filter(prg => prg.age_group === 'All' || parseInt(prg.age_group.split('-')[1]) < 16)).length} duration={5} /></p>
              <p className="counter-label">Youth Programs</p>
            </div>
          </div>
        </div>

        <button className='connectBtn connectBtnSolid'>Join the Movement</button>
    </div>
    )
    };

  export default Connections;
