import "../assets/css/List.css";
import { listitem } from "../assets/data/listitem"
import ListItem from "../components/ListItem"
import { useRef, useEffect, useState } from "react";
// import * as images from "../assets/data/images";

export default function List( {setName} ) { 
  const ListData = listitem;
  let baseRef = useRef(null);
  let [baseLen, setBaseLen] = useState(0);
  let [onlineLen, setOnlineLen] = useState(0);
  let [workingLen, setWorkingLen] = useState(0);

  useEffect(() => {
    let online = 0, working = 0, offline = 0, total = 0;

    ListData.forEach((item) => {
      if (item.status == "Status: Available") {
        online++;
      }
      else if (item.status == "Status: Welding") {
        working++;
      }
      else if (item.status == "Status: Offline") {
        offline++;
      }
    });

    if (baseRef.current) {
      setBaseLen((baseRef.current.offsetWidth / window.innerWidth) * 100)
      
      total = online + working + offline;

      onlineLen = baseLen * (online/total);
      workingLen = (baseLen * (working/total)) + onlineLen;

      setOnlineLen(onlineLen);
      setWorkingLen(workingLen);
    }
  })

  return (
    <>
      <div className='list'>
        <div className='header'>
          <div className='maintext'>
            MANAGE DEVICES
          </div>
          <div className='overall_status' ref={baseRef} >
            <div className='working' style={{ width: `${workingLen}vw` }}>
              <div className='online' style={{ width: `${onlineLen}vw` }}></div>
            </div>
          </div>
        </div>

        {ListData.map((item) => (
          <ListItem
            name={item.name}
            setName = {setName}
            status={item.status}/>
        ))}
        

        {/* <div className='card'>
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
            <div className='card_title'> 
              WeldWise Robot 2
            </div>
            <div classname='text'>
              Status: Welding <br />
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
            <div className='card_title'> 
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
            <div className='card_title'> 
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
        </div> */}
      </div>
    </>
  )
}
