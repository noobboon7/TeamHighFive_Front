import React from "react";
import teamDreamers from "../../static/teamDreamers.png";

const WordAboutUs = () => (
    <div className='container-fluid bg-white p-5 mt-5'>
      <div className="row align-items-center">
        <div className='col-lg-6'>
            <p className='intro-lead m-0'>A Word About Us</p>
            <h1>Connecting Youth For a Better Tomorrow</h1>
            <p className='wordDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis eleifend ante et gravida. Duis quam ligula, consectetur ac justo at, feugiat condimentum lectus. Quisque congue rutrum lorem egestas tincidunt. Nunc vitae dapibus diam. </p>
            <div className='buttonDiv text-center mb-5'>
                <a href="#" className='wordBtn wordBtnSolid'>Add a Program</a>
                <a href="#" className='wordBtn wordBtnOutline'>Find Programs</a>
            </div>
        </div>
        <div className='col-lg-6'>
            <img src={teamDreamers} className="d-block mx-auto img-fluid"></img>
        </div>
      </div>
    </div>
  );

  export default WordAboutUs;
