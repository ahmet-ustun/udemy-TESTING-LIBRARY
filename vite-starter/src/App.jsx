import "./App.css";
import React from "react";
import { kebabCaseToTitleCase } from "./helpers.js";

function App() {
  const [buttonColor, setButtonColor] = React.useState("medium-violet-red");
  const [isDisabled, setIsDisabled] = React.useState(false);

  const nextColor = buttonColor === "medium-violet-red" 
    ? "midnight-blue" 
    : "medium-violet-red";

  return (
    <div>
      <button 
        className={`${buttonColor} ${isDisabled ? "disabled" : ""}`} 
        onClick={() => setButtonColor(nextColor)}
        disabled={isDisabled}
      >
          Change to {kebabCaseToTitleCase(nextColor)}
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
