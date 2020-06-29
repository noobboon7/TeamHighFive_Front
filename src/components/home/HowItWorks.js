import React from "react";

const HowItWorks = () => (
    <div className='container-fluid bg-white p-5 mt-5 how-it-works'>
      <div className="row align-items-center justify-content-start">
        <div className='col-lg-6 how-it-works-body p-5'>
            <p className='intro-lead m-0'>How it Works</p>
            <h1>Connecting Youth For a Better Tomorrow</h1>
            <p className='wordDescription'>Our team cares deeply about the racial injustices that affect people of color everyday. We believe that we can be a force for change by empowering underrepresented youth to connect with organizations that understands the need for inclusivity in providing equal access to opportunities and resources.</p>
            <div className='buttonDiv text-center'>
                <a href="https://forms.gle/8UpNNNfrWh5Exnvd9" target="_blank" rel="noopener noreferrer" className='wordBtn wordBtnSolid'>Add a Program</a>
                <a href="/" className='wordBtn wordBtnOutline'>Find Programs</a>
                <a href="/" className='wordBtn wordBtnOutline'>Find Organizations</a>
            </div>
        </div>
      </div>
    </div>
  );

  export default HowItWorks;
