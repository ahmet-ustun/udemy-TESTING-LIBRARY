import "./App.css";
import React from "react";

function App() {
  const [buttonColor, setButtonColor] = React.useState("red");
  const [isDisabled, setIsDisabled] = React.useState(false);

  const nextColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button 
        className={`${buttonColor} ${isDisabled ? "disabled" : ""}`} 
        onClick={() => setButtonColor(nextColor)}
        disabled={isDisabled}
      >
          Change to {nextColor}
      </button>
      <br />
      <input 
        type="checkbox" 
        id="disable-button-checkbox" 
        defaultChecked={false} 
        checked={isDisabled}
        onChange={(e) => setIsDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">
        Disable button
      </label>
    </div>
  );
}

export default App;
