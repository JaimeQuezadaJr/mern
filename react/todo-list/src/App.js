import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import './App.css';
import { useState } from 'react';

function App() {
  const [currentItems, setCurrentItems] = useState([]);
  return (
    <div className="App">
          <TodoForm currentItems={currentItems} setCurrentItems={setCurrentItems}/>
          <p></p>
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
            {currentItems.map((item, index) => 
          <TodoItem
              item={ item }
              key={ item.id }
              currentItems={currentItems}
              setCurrentItems={setCurrentItems} />
          )}
          
          </div>    
    </div>
  );
}

export default App;
