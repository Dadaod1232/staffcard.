import React from "react";

const Button = ({children, eventHandler}) =>{
    const ButtonStyle = {
        margin: "10px 0px",
        borderRadius:"5px",
        padding:"10px, 60px",
        backgroundColor:"skyblue",
        color:"white",
    };
    return (
        <div>
            <button style={ButtonStyle} onClick={eventHandler}>{children}</button>
        </div>
    );
};

export default Button;