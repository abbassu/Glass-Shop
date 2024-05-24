import React, { useState } from "react";
import "./warshat.css"; // Import your custom CSS file

const WidthAndHeight = (props) => {
  // State to hold the arrays of width and height
  const [arrayWidth, setArrayWidth] = useState(props.arrr.map(() => ""));
  const [arrayHeight, setArrayHeight] = useState(props.arrr.map(() => ""));

  // Function to update the width array
  const handleWidthChange = (index, value) => {
    const newArray = [...arrayWidth];
    newArray[index] = value;
    setArrayWidth(newArray);
    console.log("Widths:", newArray); // Logging width array
  };

  // Function to update the height array
  const handleHeightChange = (index, value) => {
    const newArray = [...arrayHeight];
    newArray[index] = value;
    setArrayHeight(newArray);
    console.log("Heights:", newArray); // Logging height array
  };

  // Combine arrayWidth and arrayHeight into an array of objects
  function abb() {
    const combinedArray = arrayWidth.map((width, index) => ({
      w: width,
      h: arrayHeight[index],
    }));
    console.log({ qaiasat: combinedArray });
    props.setQaiasat({ qaiasat: combinedArray });
  }

  return (
    <div className="width-height-container">
      {props.arrr.map((item, index) => (
        <div className="dimension-container" key={index}>
          <div>
            <label htmlFor={`heightInput-${index}`} lang="ar">
              الطول:
            </label>
            <input
              type="text"
              id={`heightInput-${index}`}
              value={arrayHeight[index]}
              onChange={(e) => handleHeightChange(index, e.target.value)}
              lang="ar"
            />
          </div>
          <div>
            <label htmlFor={`widthInput-${index}`} lang="ar">
              العرض:
            </label>
            <input
              type="text"
              id={`widthInput-${index}`}
              value={arrayWidth[index]}
              onChange={(e) => handleWidthChange(index, e.target.value)}
              lang="ar"
            />
          </div>
        </div>
      ))}

      <button onClick={abb}> make one </button>
    </div>
  );
};

export default WidthAndHeight;
