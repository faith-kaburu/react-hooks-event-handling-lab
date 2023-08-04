// Code Keypad Component Here
import React from "react";

function Keypad (){
  // Event handler function to handle the change event
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      {/* Render an input field with type "password" */}
      <input type="password" onChange={handleChange} />
    </div>
  );
};

export default Keypad;