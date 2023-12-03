import React from 'react'
import prev from "../../Images/prev.png";

const RightButton = (onDisable,onClick) => {
  return (
    <img 
    src={prev}
    alt=''
    width='35px'
    onClick={onClick}
    onDisable={onDisable}
    height='35px'
    style={{ float: "Right", marginTop: "220px", cursor: "pointer" }}/>
  )
}

export default RightButton ;

