import React, { useState } from 'react';
    
const TodoItem = (props) => {
    const { item, currentItems, setCurrentItems }=props;
    const [style, setStyle] = useState("")

    const handleDelete = () => {
        const filteredItems = currentItems.filter((p) => p.id !== item.id);
        console.log(filteredItems);
        setCurrentItems(filteredItems);
};

    const handleChange = (event) => {
        if(event.target.checked){
            setStyle('line-through');
            console.log('checked');
        }
        else{
            setStyle();
            console.log('not checked');
        }
};
    return (
        <>
            <li style={{textDecoration: style?('line-through'):null}}>
                {item.item}
                <input type='checkbox' onChange={handleChange}/>
                <button onClick={handleDelete} style={{backgroundColor:'red', color:'white'}}>Delete</button>
            </li>
            
        </>
    );
    
};
    
export default TodoItem;