import React from "react";

const WordAboutUs = () => (
    <div className='container-fluid bg-white p-5 mt-5 word-about-us'>
      <div className="row align-items-center justify-content-end">
        <div className='col-lg-6 word-about-us-body p-5'>
            <p className='intro-lead m-0'>A Word About Us</p>
            <h1>Connecting Youth For a Better Tomorrow</h1>
            <p className='wordDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis eleifend ante et gravida. Duis quam ligula, consectetur ac justo at, feugiat condimentum lectus. Quisque congue rutrum lorem egestas tincidunt. Nunc vitae dapibus diam. </p>
            <div className='buttonDiv text-center'>
                <a href="https://forms.gle/8UpNNNfrWh5Exnvd9" target="_blank" rel="noopener noreferrer" className='wordBtn wordBtnSolid'>Add a Program</a>
                <a href="/" className='wordBtn wordBtnOutline'>Find Programs</a>
                <a href="/" className='wordBtn wordBtnOutline'>Find Organizations</a>
            </div>
        </div>
      </div>
    </div>
  );

  export default WordAboutUs;
