import React, { useState, useEffect } from "react";

const YourComponent = () => {
  const [clientNames, setClientNames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3999/client/names")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setClientNames(data.clientNames))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Client Names</h1>
      <ul>
        {clientNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
