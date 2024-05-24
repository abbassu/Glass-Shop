import React, { useState } from "react";
import axios from "axios";
import "./ClientForm.css"; // Import the CSS file for the form
import "./popup.css"; // Import the CSS file for the popup

const ClientForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [successPopup, setSuccessPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any field is empty
    if (!name || !address || !phone) {
      setErrorPopup(true);
      setTimeout(() => {
        setErrorPopup(false);
      }, 4000);
      return;
    }

    const newClient = { name, address, phone };

    axios
      .post("http://localhost:3999/client", newClient)
      .then((response) => {
        console.log("تمت إضافة عميل جديد:", response.data);
        setSuccessPopup(true);
        // Clear input fields
        setName("");
        setAddress("");
        setPhone("");
        // Hide the popup after 3 seconds
        setTimeout(() => {
          setSuccessPopup(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("خطأ في إضافة العميل:", error);
      });
  };

  return (
    <div className="form-container">
      <h2>إضافة عميل جديد</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="الاسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="العنوان"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="الهاتف"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">إضافة عميل</button>
      </form>
      {successPopup && (
        <div className="popup success">تمت إضافة العميل بنجاح!</div>
      )}
      {errorPopup && <div className="popup error">يرجى ملء جميع الحقول</div>}
    </div>
  );
};

export default ClientForm;
