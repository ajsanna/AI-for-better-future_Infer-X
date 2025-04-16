import "../assets/css/Details.css";
import * as images from "../assets/data/images";
import plotdata from "../assets/data/plotdata";
import LiveView from "../components/LiveView.jsx";
import Plots from "../components/Plots.jsx";
import { useRef, useEffect, useState } from "react";

export default function Details( {information, setName} ) { 
  let baseRef = useRef(null);
  let [baseLen, setBaseLen] = useState(0);
  let [progressLen, setProgressLen] = useState(0);

  useEffect(() => {
    if (baseRef.current && information.progress.includes('%')) {
      setBaseLen((baseRef.current.offsetWidth / window.innerWidth) * 100)
      
      const progressValue = parseFloat(information.progress.replace(/%$/, ''));
      const progressWidth = (baseLen * progressValue) / 100;

      setProgressLen(progressWidth)
    }
  })

  const handleClick = () => {
    setName(null);
  };

  return (
    <>
      <div className='status'>
        <div className='current_bot'>
          <div className='bot_name'>
            <button className="button" onClick = {() => handleClick()}>
              <i class="arrow left"></i>
            </button>
            { information.name }
          </div>
          <div className='progress_bar'  ref={baseRef} style={{
              borderColor: 
                information.progress === "available"
                ? "#0d825f"
                : information.progress === "offline"
                ? "#ed1818"
                : "#edcd18",
            }}>
            <div className='progress' style={{ 
                width: 
                information.progress === "available"
                ? "0vw"
                : information.progress === "offline"
                ? "0vw"
                :`${progressLen}vw`
              }}></div>
              { 
                information.progress !== "available" && 
                information.progress !== "offline" && 
                information.progress 
              }
            </div>
          </div>

        <div className='bottom_container'>
          <div className='info_container'>
            <div className="info_title">
              Device Information
            </div>
            <div className='image' style={{
              backgroundImage: `url(${images.robot_arm_2})`,
              marginTop: '2vh', 
              marginLeft: '0.5vw',
              marginRight: '0.5vw',
              height: '50vh',
              width: '15vw'
            }}></div>
            <div className='info_text' style={{paddingTop: '4vh'}}>
              { information.botinfo.map((line) => (
                <div>{ line }</div>
              ))}
            </div>
          </div>
          
          <div className="column">
            <div className="row">
              <div className="column">
                <div className='info_container'>
                  <div className='info_title'>
                    Weld Information 
                  </div>
                  <div className="info_text">
                    { information.weldinfo.map((line) => (
                      <div>{ line }</div>
                    ))}
                  </div>
                </div>

                <div className='info_container'>
                  <div className='info_title'style={{
                  width: '16vw'
                }}>
                    Device Health
                  </div>
                  <div className="info_text">
                    { information.devicehealth.map((line) => (
                      <div>{ line }</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='info_container'>
                <div className='info_title'>
                  Live View 
                </div>
                <div className="info_text">
                  <LiveView/>
                </div>
              </div>
            </div>

            <div className='info_container'>
              <div className='info_title'>
                Metrics
              </div>
              <div className="row">
                <div className="info_text" style={{
                  paddingTop:'1.5vh',
                  paddingBottom: '1.5vh'
                }}>
                  {/* <strong>Performance Efficiency in the Last 4 Months</strong>
                  <div className="plot" style={{width: '22.5vw', height: '10vh'}}>
                    <div className="bar" style={{height: '9.5vh', marginLeft: '1vh', backgroundColor: '#0d825f'}}></div>
                    <div className="bar" style={{height: '9.25vh', backgroundColor: '#0d825f'}}></div>
                    <div className="bar" style={{height: '9vh', backgroundColor: '#0d825f'}}></div>
                    <div className="bar" style={{height: '8.75vh', backgroundColor: '#0d825f'}}></div>
                  </div>
                  <div className="label_box">
                    <div className="label_text">Dec</div>
                    <div className="label_text">Jan</div>
                    <div className="label_text">Feb</div>
                    <div className="label_text">Mar</div>
                  </div> */}
                  <Plots 
                    plotdata = {plotdata.find(item => item.name == information.name)}
                  />
                </div>

                <div className="info_text" style={{
                  paddingTop:'1.5vh',
                  paddingBottom: '1.5vh'
                }}>
                <strong>Time Profile (Past 24 Hours)</strong>
                  <div className="row">
                    <div className="plot" style={{width: '20vw', height: '10vh'}}>
                      <div className="bar" style={{height: '9.5vh', width: '6vw', marginLeft: '1vh', marginRight: '0', backgroundColor: '#edcd18'}}>
                        5.3
                      </div>
                      <div className="bar" style={{height: '9.5vh', width: '20vw', marginLeft: '0', backgroundColor: '#0d825f'}}>
                        18.7
                      </div>
                    </div>
                    <div className="column" style={{marginTop: '0.5vh'}}>
                      <div className="row">
                        <div className="bar" style={{width: '1vh', height: '1vw',  backgroundColor: '#0d825f'}}></div>
                        Running Time
                      </div>
                      <div className="row">
                        <div className="bar" style={{width: '1vh', height: '1vw',  backgroundColor: '#edcd18'}}></div>
                        Idle Time
                      </div>
                      <div className="row">
                        <div className="bar" style={{width: '1vh', height: '1vw',  backgroundColor: '#ed1818'}}></div>
                        Offline Time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>         
        </div>
      </div>
    </>
  )
}