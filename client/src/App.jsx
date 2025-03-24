import { useEffect, useRef } from "react";
import "./assets/css/App.css";
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
    if (file && imgViewRef.current) {
      const imgLink = URL.createObjectURL(file);
      imgViewRef.current.style.backgroundImage = `url(${imgLink})`;
    }
  }

  return (
    <>
      <div className='page'>
        <div className='status'>
          <div className='current_bot'>
            <div className='bot_name'>
              Autonomous Robot 2
            </div>
            <div className='progress_bar' style={{width: '50vw'}}>
              <div className='progress'></div>
              1%
            </div>
          </div>

          <div className='bottom_container'>
            <div className='bot_info_container'>
              <div className='image' style={{
                marginTop: '5vh', 
                backgroundImage: `url(${images.robot_arm_1})`,
                height: '50vh',
                width: '20vw'
              }}></div>
              <div className='info_text'>
                ID: ARoX002 <br />
                Model Name: Arc Mate 50iD <br />
                Status: Welding <br />
                Mode: Autonomous <br />
                Progress: 1% <br />
                Time Remaining: 1 hour <br />
                Weld Quality: Good
              </div>
            </div>

            <div className='weld_info_container'>
              <div className='weld_info_card'>
                <div className='weld_info_card_title'>
                  Material Thickness: 0.92mm
                </div>
              </div>

              <div className='weld_info_card'>
                <div className='weld_info_card_title'>
                  Material Type: AISI 1010 carbon steel
                </div>
              </div>

              <div className='weld_info_card'>
                <div className='weld_info_card_title'>
                  Material Resistance: 5346.4N
                </div>
              </div>

              <div className='weld_info_card'>
                <div className='weld_info_card_title'>
                  Welding Time: 1500 ms
                </div>
              </div>

              <div className='weld_info_card'>
                <div className='weld_info_card_title'>
                  Electrode Angle: 0 
                </div>
              </div>

              <div className='weld_info_card'>
                <div className='weld_info_card_title'>
                  Welding Current: 1819.13A
                </div>
              </div>

              <div className='weld_info_card'>
                <div className='weld_info_card_title'>
                  Current Weld Quality: Good
                </div>
              </div>

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
        <div className='list'>
          <div className='header'>
            <div className='maintext'>
              STATUS
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
              <div className='name'> 
                Autonomous Robot 1
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
                Autonomous Robot 2
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
                Autonomous Robot 3
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
                Autonomous Robot 4
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
