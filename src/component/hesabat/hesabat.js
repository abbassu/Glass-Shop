import React, { useState } from "react";
import axios from "axios";
import "./hesabat.css"; // Import CSS for styling

const HsabatForm = () => {
  const [formData, setFormData] = useState({
    nameClient: "",
    dof3a: 0,
    date: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    if (!formData.nameClient || !formData.dof3a || !formData.date) {
      setErrorMessage("يرجى ملء جميع الحقول.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3999/hsabat/",
        formData
      );
      setIsLoading(false);
      setSuccessMessage("تمت إضافة الدفعة بنجاح.");

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      setFormData({ nameClient: "", dof3a: "", date: "" }); // Reset form fields
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("فشل في إرسال البيانات. يرجى المحاولة مرة أخرى.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>نموذج إرسال البيانات</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>اسم الزبون:</label>
          <input
            type="text"
            name="nameClient"
            value={formData.nameClient}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>قيمة الدفعة </label>
          <input
            type="number"
            name="dof3a"
            value={formData.dof3a}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>التاريخ:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "جارٍ الإرسال..." : "إرسال"}
        </button>
      </form>
      {successMessage && (
        <div className="success-popup">
          <span>{successMessage}</span>
        </div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default HsabatForm;
