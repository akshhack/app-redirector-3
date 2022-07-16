import React from "react";
import ReactDOM from "react-dom";

const Popup = () => {
  return (
    <>
      <h1>Redirectivity</h1>
		  <div className="disabled"><span data-show="disabled" style={{display: "none"}}>Disabled</span></div>
		  <button id="toggle-disabled"><span data-show="disabled" style={{display: "none"}}>Enable Redirector</span><span data-show="!disabled">Disable Redirector</span></button>
      <button id="open-redirector-settings">Edit Redirects</button>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
