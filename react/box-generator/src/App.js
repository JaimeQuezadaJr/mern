import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import Box from './components/Box';
import './App.css';
    
function App() {
    const [currentBoxes, setCurrentBoxes ] = useState( [
    {id:1, backgroundColor:'red', height:100, width:100},
    {id:2, backgroundColor:'blue', height:100, width:100},
    {id:3, backgroundColor:'green', height:100, width:100}
  ]);
    
    
    return (
        <div className="App">
            <BoxForm currentBoxes={currentBoxes} setCurrentBoxes={setCurrentBoxes}/>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'space-around'}}>
              {currentBoxes.map((box, index) => 
              <Box 
                  box={ box }
                  key={ box.id } />
              )}
              
            </div>    
        </div>
    );
}
  
export default App;

