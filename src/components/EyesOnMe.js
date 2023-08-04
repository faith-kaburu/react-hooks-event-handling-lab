// Code EyesOnMe Component Here

import React from "react";

function EyesOnMe (){

      // Event handler function when the button is focused
      const handleFocus = () => {
        console.log('Good!');
      };
    
      // Event handler function when the button is blurred
      const handleBlur = () => {
        console.log('Hey! Eyes on me!');
      };
    
      return (
        <div>
          {/* Render a button with the text 'Eyes on me' */}
          <button onFocus={handleFocus} onBlur={handleBlur}>
            Eyes on me
          </button>
        </div>
      );
    };
    
    export default EyesOnMe;
    