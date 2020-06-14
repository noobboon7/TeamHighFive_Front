import React from "react";
import { Link } from "react-router-dom";

import Will from "../../static/team/will.jpg";
import Kellie from "../../static/team/kellie.jpg";
import Katie from "../../static/team/katie.png";
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
      <div class="jumbotron jumbotron-fluid">
        <div class="container text-center">
        <h6 className="intro-lead">Meet the team members</h6>
        <h1 class="display-4">Our Team</h1>
        </div>
      </div>

      <div id="the-team" className="container-fluid">
        <h2 className="text-center mb-5">Advisors</h2>
        <div id="advisor" className="container">
          <div className="row justify-content-center">

            <div className="col-lg-4">
              <div class="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Will} alt="Will"></img>
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 intro-lead">Card subtitle</h6>
                  <h3 class="card-title">Card title</h3>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li class="list-inline-item"><a href="https://www.linkedin.com/in/williamgolden5/" target="_blank" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                  <li class="list-inline-item"><a href="#" className="m-0">
                  <FontAwesomeIcon icon={faGithub} className="m-0" /></a></li>
                </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div class="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Kellie} alt="kellie"></img>
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 intro-lead">Card subtitle</h6>
                  <h3 class="card-title">Card title</h3>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li class="list-inline-item"><a href="https://www.linkedin.com/in/kellieporter" target="_blank" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                  <li class="list-inline-item"><a href="#" className="m-0">
                  <FontAwesomeIcon icon={faGithub} className="m-0" /></a></li>
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
              <div class="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Katie} alt="Katie"></img>
                  <div class="card-body">
                    <h6 class="card-subtitle mb-2 intro-lead">Card subtitle</h6>
                    <h3 class="card-title">Card title</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <div class="card-footer border-0">
                  <ul className="list-inline m-0 text-uppercase text-center">
                    <li class="list-inline-item"><a href="https://www.linkedin.com/in/katharine-francis10/" target="_blank" className="m-0">
                    <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                    <li class="list-inline-item"><a href="#" className="m-0">
                    <FontAwesomeIcon icon={faGithub} className="m-0" /></a></li>
                  </ul>
                  </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div class="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Jerry} alt="Jerry"></img>
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 intro-lead">Card subtitle</h6>
                  <h3 class="card-title">Card title</h3>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li class="list-inline-item"><a href="" target="_blank" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                  <li class="list-inline-item"><a href="https://linkedin.com/in/jerry-velazquez-8540b9bb" className="m-0">
                  <FontAwesomeIcon icon={faGithub} className="m-0" /></a></li>
                </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div class="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Parker} alt="Parker"></img>
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 intro-lead">Card subtitle</h6>
                  <h3 class="card-title">Card title</h3>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li class="list-inline-item"><a href="https://www.linkedin.com/in/parker-bacall/" target="_blank" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                  <li class="list-inline-item"><a href="#" className="m-0">
                  <FontAwesomeIcon icon={faGithub} className="m-0" /></a></li>
                </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div class="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Jo} alt="Jo"></img>
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 intro-lead">Card subtitle</h6>
                  <h3 class="card-title">Card title</h3>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li class="list-inline-item"><a href="https://www.linkedin.com/in/jchen143/" target="_blank" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                  <li class="list-inline-item"><a href="#" className="m-0">
                  <FontAwesomeIcon icon={faGithub} className="m-0" /></a></li>
                </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div class="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Chat} alt="Chat"></img>
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 intro-lead">Card subtitle</h6>
                  <h3 class="card-title">Card title</h3>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li class="list-inline-item"><a href="#" target="_blank" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                  <li class="list-inline-item"><a href="#" className="m-0">
                  <FontAwesomeIcon icon={faGithub} className="m-0" /></a></li>
                </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div class="card border-0 mb-5">
                <img className="card-img-top w-100 h-100" src={Judi} alt="Judi"></img>
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 intro-lead">Card subtitle</h6>
                  <h3 class="card-title">Card title</h3>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer border-0">
                <ul className="list-inline m-0 text-uppercase text-center">
                  <li class="list-inline-item"><a href="#" target="_blank" className="m-0">
                  <FontAwesomeIcon icon={faLinkedin} className="m-0" /></a></li>
                  <li class="list-inline-item"><a href="#" className="m-0">
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
