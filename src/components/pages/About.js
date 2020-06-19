import React from "react";

import Will from "../../static/team/will.jpg";
import Kellie from "../../static/team/kellie.jpg";
import Katie from "../../static/team/katie.jpg";
import Jerry from "../../static/team/jerry.jpg";
import Parker from "../../static/team/parker.jpg";
import Jo from "../../static/team/jo.jpg";
import Chat from "../../static/team/chat.jpg";
import Judi from "../../static/team/judi.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div id="about">
      <div className="jumbotron jumbotron-fluid bg-info">
        <div className="container text-center">
{        // <h6 className="intro-lead">How it Works</h6>
}
        <h1 className="display-4 text-white">About</h1>
        </div>
      </div>

      <div id="mission" className="container">
      <div id="about-project" className="bg-white p-5">
      <h2>Mission / <span className="text-info">Team Youth Connnection</span></h2>
      <p>A web application catering to young black and brown users. The mission is to make extracurricular (specifically non-profit) organizations and programs more accessible and reachable to the youth. A user can search from our database for programs/companies providing technology support, youth programming, after-school programs, summer-school programs, internships, etc.</p>
      </div>
      </div>

      <div id="the-team" className="container-fluid">
        <h2 className="text-center mb-5">Advisors</h2>
        <div id="advisor" className="container">
          <div className="row justify-content-center">

            <div className="col-lg-4">
              <div className="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Will} alt="William Golden"></img>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 intro-lead">Project Manager</h6>
                  <h3 className="card-title">William Golden</h3>
                  <p className="card-text">I am a software engineer from Tuscaloosa Alabama currently working in the NYC area. In college I used my web dev talents to give local companies in the Tuscaloosa area a web presence and afterward enjoyed a brief stint as a professional poker player. After a couple of years I re-engaged with my original passion of web development and enrolled at Fullstack Academy of Code to further my skills into being a fullstack software engineer. I am currently working at Blackbird LLC as a software engineer creating user interfaces for hedge fund traders and investors.</p>
                </div>
                <div className="card-footer social-media border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/williamgolden5/" target="_blank" rel="noopener noreferrer" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Kellie} alt="kellie"></img>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 intro-lead">UX/UI Designer</h6>
                  <h3 className="card-title">Kellie Porter</h3>
                  <p className="card-text">As a native New Yorker, I have a fast-paced creative mind to match the city I call home. I have worked to put my energy into my passions which include Graphic Communications, Web Development, Digital Literacy, STEM education, and UX/UI design</p>
                </div>
                <div className="card-footer social-media border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/kellieporter" target="_blank" rel="noopener noreferrer" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        <h2 className="text-center mb-5">Team Members</h2>
        <div id="team-members" className="container mb-5">
          <div className="row justify-content-center">

            <div className="col-lg-3">
              <div className="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Katie} alt="Katharine Francis"></img>
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 intro-lead">Software Developer / Tech Lead</h6>
                    <h3 className="card-title">Katharine Francis</h3>
                    <p className="card-text">I'm a software developer with a familiarity of Javascript technologies, such as React/Redux, React Native, Node.js/Express and Electron. I'm also passionate about designing dynamic websites with the latest CSS3 features.</p>
                  </div>
                  <div className="card-footer social-media border-0">
                  <ul className="list-inline m-0 text-uppercase text-center">
                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/katharine-francis10/" target="_blank" rel="noopener noreferrer" className="m-0">
                    <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                    <li className="list-inline-item"><a href="https://github.com/KatieFrey" target="_blank" rel="noopener noreferrer" className="m-0">
                    <FontAwesomeIcon icon={faGithub} className="m-0" /></a></li>
                  </ul>
                  </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Jerry} alt="Jerry Velazquez"></img>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 intro-lead">Full Stack Web Developer</h6>
                  <h3 className="card-title">Jerry Velazquez</h3>
                  <p className="card-text">I'm a software developer with about 1 year experience and actively seeking a Full-time opportunity to work as a full-stack developer.</p>
                </div>
                <div className="card-footer social-media border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li className="list-inline-item"><a href="https://linkedin.com/in/jerry-velazquez-8540b9bb" target="_blank" rel="noopener noreferrer" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                  <li className="list-inline-item"><a href="https://github.com/noobboon7" target="_blank" rel="noopener noreferrer" className="m-0">
                  <FontAwesomeIcon icon={faGithub} className="m-0" /></a></li>
                </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Parker} alt="Parker Bacall"></img>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 intro-lead">Full Stack Web Developer</h6>
                  <h3 className="card-title">Parker Bacall</h3>
                  <p className="card-text">Full-stack developer inspired by the infinite possibilities of tech. I value the ability to be unique and creative in the software development field. I have a passion for learning and sharing my experience with others. My background in creative freelance work which means I’m great at managing multiple projects at a time and always looking to pick up new skills.</p>
                </div>
                <div className="card-footer social-media border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/parker-bacall/" target="_blank" rel="noopener noreferrer" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                  <li className="list-inline-item"><a href="https://github.com/parkerbacall" target="_blank" rel="noopener noreferrer" className="m-0">
                  <FontAwesomeIcon icon={faGithub} className="m-0" /></a></li>
                </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Jo} alt="Jo Chen"></img>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 intro-lead">Software Developer</h6>
                  <h3 className="card-title">Jo Chen</h3>
                  <p className="card-text">I am a full-stack engineer with experience in JavaScript, Ruby, React, Redux, Rails, Express, MongoDB, SQL, Mongoose, Amazon Web Services, HTML5, CSS3, PostgreSQL, AJAX, the Spoonacular API, and the Google Maps API.</p>
                </div>
                <div className="card-footer social-media border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/jchen143/" target="_blank" rel="noopener noreferrer" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                  <li className="list-inline-item"><a href="https://github.com/jchen143" target="_blank" rel="noopener noreferrer" className="m-0">
                  <FontAwesomeIcon icon={faGithub} className="m-0" /></a></li>
                </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Chat} alt="Cihad Aldanmaz"></img>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 intro-lead">Software Developer</h6>
                  <h3 className="card-title">Cihad Aldanmaz</h3>
                  <p className="card-text">Software Developer with a passion for creativity and utilizing technology to problem solve for businesses. With experience in Ruby on Rails, JavaScript, and React and a background in Communication and Marketing, I would love to help design efficient code for business products.</p>
                </div>
                <div className="card-footer social-media border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li className="list-inline-item"><a href="http://www.linkedin.com/in/cihadald" target="_blank" rel="noopener noreferrer" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                  <li className="list-inline-item"><a href="https://github.com/cihataldanmaz" className="m-0">
                  <FontAwesomeIcon icon={faGithub} className="m-0" /></a></li>
                </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Judi} alt="Judi Desire"></img>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 intro-lead">Front-End Developer</h6>
                  <h3 className="card-title">Judi Desire</h3>
                  <p className="card-text">A goal-oriented Web Developer with strong commitment to collaboration and solutions-oriented problem-solving. Use various web design software to develop customer-focused websites and designs. Committed to high standards of web design, user experience, usability and speed for multiple types of end-users. Successful at maintaining customer satisfaction through effective customer support.</p>
                </div>
                <div className="card-footer social-media border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/jdesire/" target="_blank" rel="noopener noreferrer" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                  <li className="list-inline-item"><a href="https://github.com/berryny" target="_blank" rel="noopener noreferrer" className="m-0">
                  <FontAwesomeIcon icon={faGithub} className="m-0" /></a></li>
                </ul>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
};

export default About;
