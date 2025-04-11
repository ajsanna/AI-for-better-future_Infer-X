import React from "react"
import * as images from "../assets/data/images";
import "../assets/css/listitem.css"
 
export default function ListItem( {name, setName, status} ) {
  const handleClick = (name) => {
    setName(name);
    console.log(name);
  };

  return (
    <>
      <button className="card" onClick={() => handleClick(name)}>
        <div className='image' style={{
          backgroundImage: `url(${images.robot_arm_1})`,
          marginTop: '1vh',
          marginLeft: '1vw',
          width: '5vw',
          height: '10vh'
        }}> </div>
        <div className="textbox">
          <div className='card_title'> 
            {name}
          </div>
          <div classname='text'>
            {status}
          </div>
        </div>

        <div className='status_bar' style={{
          backgroundColor: 
            status === "Status: Available"
            ? "#0d825f"
            : status === "Status: Welding"
            ? "#edcd18"
            : status === "Status: Offline"
            ? "#ed1818"
            : "#888",
        }}></div>
      </button>
    </>
  );
}