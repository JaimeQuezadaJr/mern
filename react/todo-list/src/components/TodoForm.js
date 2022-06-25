import React, { useState } from 'react';
import { v4 } from 'uuid';
    
const TodoForm = (props) => {
    const [listItem, setListItem] = useState("");
    const { currentItems, setCurrentItems } = props;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(listItem.length != 0){
            const item = {
                id: v4(),
                item: listItem,
            };
            console.log(item);
            console.log(currentItems);
            setCurrentItems([...currentItems, item]);
            setListItem("");
        }
        else {
            alert('Please fill form')
        }
        
};
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Todo List</h1>
            <label htmlFor="items">Todo Items</label>
            <input type="text" id="items" value={ listItem } onChange={ (e) => setListItem(e.target.value) }/>
            <input type="submit" value="Add" />
            {listItem.length > 0 && listItem.length <3 ? (
                <p>List item must be more than 2 characters long</p>
            ) :null
            }
        </form>
    );
};
    
export default TodoForm;