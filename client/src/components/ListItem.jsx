import React from "react"
import * as images from "../assets/data/images";
import "../assets/css/listitem.css"

export default function ListItem( {name, status} ) {
  return (
    <>
      <div className="card">
        <div className='image' style={{
          backgroundImage: `url(${images.robot_arm_1})`
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
      </div>
    </>
  );
}