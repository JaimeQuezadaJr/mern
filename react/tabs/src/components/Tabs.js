import React, { useState } from 'react'; 

const Tabs = (props) => {
    const [city, setCity] = useState("");
    const [message, setMessage] = useState("")
    const handleChange1 = () => {
        console.log("clicking 1");
        setCity("London");
        setMessage("London is the capital city of England.");
        };
    const handleChange2 = () => {
        console.log("clicking 2");
        setCity("Paris");
        setMessage("Paris is the capital of France.");
    };
    const handleChange3 = () => {
        console.log("clicking 3");
        setCity("Tokyo");
        setMessage("Tokyo is the capital of Japan.");
    }
        
    
return (
    <>
<h2>Tabs</h2>
    <p>Click on the buttons inside the tabbed menu:</p>

<div className="tab">
  <button className="tablinks" onClick={handleChange1}>Tab 1</button>
  <button className="tablinks" onClick={handleChange2}>Tab 2</button>
  <button className="tablinks" onClick={handleChange3}>Tab 3</button>
</div>

<div id="tabMessage" className="tabcontent">
  <h3>{city}</h3>
  <p>{message}</p>
</div>

    </>
)
};

export default Tabs;