// ClientList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./clientlist.css";

const ClientList = () => {
  const [clientNames, setClientNames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3999/client/names")
      .then((response) => {
        setClientNames(response.data.clientNames);
      })
      .catch((error) => {
        console.error("Error fetching client names:", error);
      });
  }, []);

  useEffect(() => {
    console.log("clientNames", clientNames);
  }, [clientNames]);

  return (
    <div className="ClientList">
      <h2> سجل الزبائن</h2>
      <ul>
        {clientNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
