import React from "react"

export default function Plots({ plotdata }) {
  return (
    <>
      <strong>Performance Efficiency in the Last 4 Months</strong>
      <div className="plot" style={{width: '22.5vw', height: '10vh'}}>
        { console.log(plotdata.name) }
        <div className="bar" style={{height: `${plotdata.first}vh`, marginLeft: '0.75vh', 
          backgroundColor: 
            parseFloat(plotdata.first) >= 8
            ? '#0d825f'
            : "#ed1818"
        }}></div>
        <div className="bar" style={{height: `${plotdata.second}vh`,  backgroundColor: 
          parseFloat(plotdata.second) >= 8
          ? '#0d825f'
          : "#ed1818"
        }}></div>
        <div className="bar" style={{height: `${plotdata.third}vh`,  backgroundColor: 
          parseFloat(plotdata.third) >= 8
          ? '#0d825f'
          : "#ed1818"  
        }}></div>
        <div className="bar" style={{height: `${plotdata.fourth}vh`, 
           backgroundColor: 
           parseFloat(plotdata.fourth) >= 8
           ? '#0d825f'
           : "#edcd18"
        }}></div>
      </div>
      <div className="label_box">
        <div className="label_text">Dec</div>
        <div className="label_text">Jan</div>
        <div className="label_text">Feb</div>
        <div className="label_text">Mar</div>
      </div>
    </>
  )
}