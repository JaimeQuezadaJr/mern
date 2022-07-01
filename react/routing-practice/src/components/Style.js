import React from "react";
import { useParams } from "react-router-dom";

const Style = (props) => {
    const { word, color, backgroundColor } = useParams(); 
    return (
        <h1 style= {{backgroundColor: backgroundColor, color:color }}>The word is: { word } </h1>
    );
}

export default Style;