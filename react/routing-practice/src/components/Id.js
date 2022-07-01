import React from "react";
import { useParams } from "react-router-dom";

const Id = (props) => {
    const { id } = useParams();
    const handleId = () => {
    if( isNaN(id)) {
       return <h1>The word is: {id} </h1>
    }
    else{
       return <h1>The number is : {id}</h1>
    }
};
    return (
        <div>
            {handleId()}
        </div>
    );
}

export default Id;