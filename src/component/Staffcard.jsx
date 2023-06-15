import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faHeart, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Button from "./Button";
import { useState } from 'react';


const StaffCard = ({name,about,post,isOnline,imgSrc}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const follow = () =>{
    setIsFollowing(true) 

  }
    const cardStyle = {
        border: '1px solid black',
        borderRadius: '10px',
        margin: '16px',
        backgroundColor: "white"
    }
  return (
    <div>
        <div style={cardStyle}>
            {isOnline? <p style={{color:'green'}}>Active</p>:<p style={{color:'red'}}>Active</p>}
            <img src={imgSrc} alt="profile" style={{width:'120px', height:'120px', borderRadius:'80px'}}/>
            <h2>{name}</h2>
            <h4>{post}</h4>
            <p>{about}</p>
            <Button eventHandler={follow}>{!isFollowing ? "follow" : "following"}</Button>
            <div style={{display:"flex", padding: '5px 15px', backgroundColor:"navy"}}>
           <div style={{display:"flex", marginLeft:"5px"}}>
           <FontAwesomeIcon icon={faImage} style={{marginTop:"25px", marginRight:"7px", width:"20px", height:"20px", color:"red"}}/>
           <p><i style={{color:"red"}}>post</i><br/> <i style={{color:"white"}}>635</i></p>
           </div> 

           <div style={{display:"flex",marginLeft:"60px" }}>
           <FontAwesomeIcon icon={faHeart} style={{marginTop:"25px", marginRight:"7px", width:"20px", height:"20px", color:"red"}}/>
           <p><i style={{color:"red"}}>Favorites</i><br/> <i style={{color:"white"}}>3,472</i></p>
           </div>

           <div style={{display:"flex", marginLeft:"40px",}}>
           <FontAwesomeIcon icon={faPaperPlane} style={{marginTop:"25px", marginRight:"7px", width:"20px", height:"20px", color:"red"}}/>
           <p><i style={{color:"red"}}>Messages</i><br/> <i style={{color:"white"}}>1,293</i></p>
           </div>
            
            
        </div>
        </div>
    </div>
  )
}

export default StaffCard