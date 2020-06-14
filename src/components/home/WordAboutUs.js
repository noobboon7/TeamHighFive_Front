import React from "react";
import teamDreamers from "../../static/teamDreamers.png";

const WordAboutUs = () => (
    <div className='wordDiv'>
        <div className='textDiv'>
            <p className='head' > A Word About Us</p>
            <h1>Connecting Youth For a Better Tomorrow</h1>
            <p className='wordDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis eleifend ante et gravida. Duis quam ligula, consectetur ac justo at, feugiat condimentum lectus. Quisque congue rutrum lorem egestas tincidunt. Nunc vitae dapibus diam. </p>
            <div className='buttonDiv'>
                <button className='wordBtn'>Add a Program</button>        
                <button className='wordBtn'>Find Programs</button>        
            </div>
    </div>
        <div className='imageDiv'>
            <img src={teamDreamers}></img>
        </div>
    </div>
  );
  
  export default WordAboutUs;