import React, { useState } from 'react';
    
const Box = (props) => {
    const { box }=props;
    return (
        <>
            <p style={{backgroundColor:box.backgroundColor, height: box.height, width: box.width}}></p>
        </>
    );
    
};
    
export default Box;

