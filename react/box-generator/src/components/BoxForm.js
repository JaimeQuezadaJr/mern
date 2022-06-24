import React, { useState } from 'react';
import { v4 } from 'uuid';
    
const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const { currentBoxes, setCurrentBoxes } = props;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(color.length != 0){
            const currentBox = {
                id: v4(),
                backgroundColor: color,
                height: size ,
                width: size
            };
            console.log(currentBox);
            setCurrentBoxes([...currentBoxes, currentBox]);
            setColor("");
            setSize("");
        }
        else {
            alert('Please fill form')
        }
        
};
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Color Boxes</h1>
            <label htmlFor="color">Color</label>
            <input type="text" id="color" value={ color } onChange={ (e) => setColor(e.target.value) }/>
            {color.length > 0 && color.length <3 ? (
                <p>Color must be more than 2 characters long</p>
            ) :null
            }
            <label htmlFor="size">Height & Width</label>
            <input type="number" id="size" value={ size } onChange={ (e) => setSize(parseInt(e.target.value)) }/>
            <input type="submit" value="Add" />
            {color.length > 0 && color.length <3 ? (
                <p>Color must be more than 2 characters long</p>
            ) :null
            }
        </form>
    );
};
    
export default BoxForm;