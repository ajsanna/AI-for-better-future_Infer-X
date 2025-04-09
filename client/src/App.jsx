import { useEffect, useRef } from "react";
import "./assets/css/App.css";
import "./assets/css/List.css";
import * as images from "./assets/data/images";

function App() {
  const inputFileRef = useRef(null);
  const imgViewRef = useRef(null);

  useEffect(() => {
    const fileInput = inputFileRef.current;
    
    if (fileInput) {
      fileInput.addEventListener("change", uploadImage);
    }

    return () => {
      if (fileInput) {
        fileInput.removeEventListener("change", uploadImage);
      }
    };
  }, []);

  function uploadImage(event) {
    const file = event.target.files[0];
    if (!file) return;
  
    if (imgViewRef.current) {
      const imgLink = URL.createObjectURL(file);
      imgViewRef.current.style.backgroundImage = `url(${imgLink})`;
    }
  
    const formData = new FormData();
    formData.append("file", file); 
  
    console.log("Uploading file:", file.name);
  
    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData, 
    })
      .then((response) => response.json())
      .then((data) => console.log("Upload successful:", data))
      .catch((error) => console.error("Error uploading file:", error));
  }

  return (
    <>
      <div className='page'>
        <div className='status'>
          <div className='current_bot'>
            <div className='bot_name'>
              <i class="arrow left"></i>
              WeldWise Robot 2
            </div>
            <div className='progress_bar'>
              <div className='progress'></div>
                1%
              </div>
          </div>

          <div className='bottom_container'>
            <div className='info_container'>
              <div className="info_title">
                Device Information
              </div>
              <div className='image' style={{
                backgroundImage: `url(${images.robot_arm_3})`,
                marginTop: '2vh', 
                marginLeft: '1vw',
                height: '50vh',
                width: '15vw'
              }}></div>
              <div className='info_text' style={{paddingTop: '4vh'}}>
                ID: ARoX002 <br />
                Model Name: Arc Mate 50iD <br />
                Status: Welding <br />
                Progress: 1% <br />
                Time Remaining: 1 hour <br />
                Mode: Autonomous <br />
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
                      Material Thickness: 0.92mm <br />
                      Material Type: AISI 1010 carbon steel <br />
                      Material Resistance: 5346.4N <br />
                      Welding Time: 1500 ms <br />
                      Electrode Angle: 0 <br />
                      Welding Current: 1819.13A <br />
                      Nugget Diameter: 2.63 <br />
                    </div>
                  </div>

                  <div className='info_container'>
                    <div className='info_title'style={{
                    width: '16vw'
                  }}>
                      Device Health
                    </div>
                    <div className="info_text">
                      Performance Efficiency: 80% <br />
                      Required Maintainance: None <br />
                      Last Maintainance: 12/19/2024 <br />
                      Firmware Version: 1.0.3 (Latest) <br />
                    </div>
                  </div>
                </div>

                <div className='info_container'>
                  <div className='info_title'>
                    Live View 
                  </div>
                  <div className="info_text">
                    <div className="live_view">
                      <div className='weld_info_card' style={{paddingTop: '0'}}>
                        <label htmlFor="input-file" id="drop-area">
                          <input type="file" accept="image/*" id="input-file" hidden ref={inputFileRef} />
                          <div
                            id="img-view"
                            ref={imgViewRef}
                            style={{
                              backgroundImage: `url(${images.steel_welding})`,
                            }}>
                            <p className="drag_drop">Drag and drop or click here to upload image</p>
                          </div>
                        </label>
                      </div>
                    </div>
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
                    <strong>Performance Efficiency Since Last Maintainance</strong>
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
                    </div>
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

            {/* <div className="live_view">
              <div className='weld_info_card' style={{paddingTop: '0'}}>
                <label htmlFor="input-file" id="drop-area">
                  <input type="file" accept="image/*" id="input-file" hidden ref={inputFileRef} />
                  <div
                    id="img-view"
                    ref={imgViewRef}
                    style={{
                      backgroundImage: `url(${images.steel_welding})`,
                    }}>
                    <p className="drag_drop">Drag and drop or click here to upload image</p>
                  </div>
                </label>
              </div>
            </div> */}
        </div>
          
        </div>
        <div className='list'>
          <div className='header'>
            <div className='maintext'>
              MANAGE DEVICES
            </div>
            <div className='overall_status'>
              <div className='working'>
                <div className='online'></div>
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='image' style={{
              backgroundImage: `url(${images.robot_arm_1})`
            }}> </div>

            <div className='textbox'>
              <div className='card_title'> 
                WeldWise Robot 1
              </div>
              <div classname='text'>
                Status: Available
              </div>
            </div>

            <div className='status_bar' style={{
              backgroundColor: '#0d825f'
            }}></div>
          </div>

          <div className='card'>
            <div className='image' style={{
                backgroundImage: `url(${images.robot_arm_1})`
            }}> </div>

            <div className='textbox'>
              <div className='name'> 
                WeldWise Robot 2
              </div>
              <div classname='text'>
                Status: Welding <br />
                Progress: 1% <br />
                Time Remaining: 1 hour
              </div>
            </div>

            <div className='status_bar' style={{
              backgroundColor: '#edcd18'
            }}></div>
          </div>

          <div className='card'>
            <div className='image' style={{
              backgroundImage: `url(${images.robot_arm_1})`
            }}> </div>

            <div className='textbox'>
              <div className='name'> 
                WeldWise Robot 3
              </div>
              <div classname='text'>
                Status: Available
              </div>
            </div>

            <div className='status_bar' style={{
              backgroundColor: '#0d825f'
            }}></div>
          </div>

          <div className='card'>
            <div className='image' style={{
                backgroundImage: `url(${images.robot_arm_1})`
            }}> </div> 

            <div className='textbox'>
              <div className='name'> 
                WeldWise Robot 4
              </div>
              <div classname='text'>
                Status: Offline <br />
                Maintainance Required
              </div>
            </div>

            <div className='status_bar' style={{
              backgroundColor: '#ed1818'
            }}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
