import React from "react"
import "../assets/css/BlankPage.css"
import * as images from "../assets/data/images";

export default function BlankPage() {
  return (
    <>
      <div className="column" style={{
        paddingLeft: '20vw'
      }}>
        <div className="background_img" style={{
          backgroundImage: `url(${images.robot_arm_logo})`,
          width: '26vw',
          height: '33vh'}}>
        </div>
        <div className="background_txt">
          Weldwise Arm Control System
        </div>
        <div className="background_subtxt">
          Select a device to begin
        </div>
      </div>
      
    </>
  )
}