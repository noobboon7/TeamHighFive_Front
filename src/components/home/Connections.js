import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import CountUp from 'react-countup';


const Connections = ({prgArr}) => {

    const categoryCounts = () => {
        let catArr = (prgArr.map(prg => prg.categories))    
        catArr = catArr.flat()
         catArr = catArr.reduce((acc, word) => { 
            acc[word] = (acc[word] || 0) + 1
            return acc;
        },[])
  
    };


    console.log(categoryCounts())

    return(
    <div className='connectionDiv'>

            <div className="counterDiv">
                <div className="data-div">
                <span className="counter-icon">
                    <FontAwesomeIcon icon={faCalendarAlt} className="m-0" />
                  </span>
                    <h1>{CountUp end={(prgArr.filter(prg=> prg.start_season === 'Summer' || prg.start_season === 'N/A')).length} duration{5}}</h1>
                    <p>SUMMER PROGRAMS</p>
                </div>
                <div className="data-div">
                 <span className="counter-icon">
                <FontAwesomeIcon icon={faHandshake} className="m-0" />
              </span>
                <h1>{CountUp end={(prgArr.filter(prg=> prg.categories.includes('education') || prg.categories.includes('colleges') || prg.categories.includes('schools'))).length} duration={5}}</h1>
                    <p>EDUCATIONAL PROGRAMS</p>
                </div>
                <div className="data-div">
                   <span className="counter-icon">
                <FontAwesomeIcon icon={faStar} className="m-0" />
              </span>
                    <h1>{CountUp end={(prgArr.filter(prg => prg.age_group === 'All' || parseInt(prg.age_group.split('-')[1]) < 16)).length} duration={5}}</h1>
                    <p>YOUTH ORGANIZATIONS</p>
                </div>
                <div className="data-div">
                    <span className="counter-icon">
                <FontAwesomeIcon icon={faHeart} className="m-0" />
              </span>
                    <h1>CountUp end={8} duration={5}</h1>
                    <p>TOP CATEGORY SPORTS</p>
                </div>
            </div>
        <div className="btnDiv">
         <button className='connectBtn'>Join the Movement</button>             
        </div>     
    </div>
    )
    };
  
  export default Connections;