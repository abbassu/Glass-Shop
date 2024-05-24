import React, { useState, useEffect } from "react";
import axios from "axios";
import "./hesablist.css";
const ClientAccounts = () => {
  const [clientAccounts, setClientAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3999/hsabat/accounts"
        );
        setClientAccounts(response.data.clientAccounts);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch client accounts. Please try again later.");
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="client-accounts-container">
      <h2>Client Accounts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Total Cost For All Warshat</th>
              <th>Payment For All Warshat</th>
              <th>Remain Cost</th>
            </tr>
          </thead>
          <tbody>
            {clientAccounts.map((account) => (
              <tr key={account.Id}>
                <td>{account.NameClient}</td>
                <td>{account.TotalCostForAllWarshat}</td>
                <td>{account.PaymentForAllWarshat}</td>
                <td>
                  {account.TotalCostForAllWarshat -
                    account.PaymentForAllWarshat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClientAccounts;
