import React from "react";


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
        <div className='connect-head-div'>
            <p className='connect-head' > PREPARED FOR SUCCESS</p>
        </div>
        <div className='connect-title-div'>
            <h1>We're Pround of our Connections</h1>
        </div>
            <div className="counterDiv">
                <div className="data-div">
                    <h1>{(prgArr.filter(prg=> prg.start_season === 'Summer' || prg.start_season === 'N/A')).length}</h1>
                    <p>SUMMER PROGRAMS</p>
                </div>
                <div className="data-div">
                <h1>{(prgArr.filter(prg=> prg.categories.includes('education') || prg.categories.includes('colleges') || prg.categories.includes('schools'))).length}</h1>
                    <p>EDUCATIONAL PROGRAMS</p>
                </div>
                <div className="data-div">
                    <h1>{(prgArr.filter(prg => prg.age_group === 'All' || parseInt(prg.age_group.split('-')[1]) < 16)).length}</h1>
                    <p>YOUTH ORGANIZATIONS</p>
                </div>
                <div className="data-div">
                    <h1>{8}</h1>
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