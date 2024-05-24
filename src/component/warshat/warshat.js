import React, { useState } from "react";
import "./warshat.css";
import Widhtadnhight from "./widthandhight";
import axios from "axios";

const Warshat = () => {
  const [num_boxes, set_num] = useState([1]);

  const [formData, setFormData] = useState({
    name: "",
    costPerMeter: "",
    numOfMeters: "",
    date: "",
    colorWarsha: "",
    qaiasat: [{ w: "", h: "" }],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "w" || name === "h") {
      const qaiasat = [...formData.qaiasat];
      qaiasat[index][name] = value;
      setFormData({ ...formData, qaiasat });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addDimension = () => {
    setFormData({
      ...formData,
      qaiasat: [...formData.qaiasat, { w: "", h: "" }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("formData", formData);
    try {
      const response = await axios.post(
        "http://localhost:3999/warshat/",
        formData
      );
      console.log("Data posted successfully:", response.data);
      // Reset form data
      setFormData({
        name: "",
        costPerMeter: "",
        numOfMeters: "",
        date: "",
        colorWarsha: "",
        qaiasat: [{ w: "", h: "" }],
      });
      // Show success popup
      setShowSuccessPopup(true);
      // Hide success popup after 3 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 4000);
    } catch (error) {
      console.error("Error posting data:", error);
      setError("Failed to add client data");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="warshat">
      <h2> اضافة ورشة جديدة</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="input11">
            <label> : الاسم</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input11">
            <label>: تكلفة المتر </label>
            <input
              type="text"
              name="costPerMeter"
              value={formData.costPerMeter}
              onChange={handleChange}
            />
          </div>
          <div className="input11">
            <label> : عدد الامتار</label>
            <input
              type="text"
              name="numOfMeters"
              value={formData.numOfMeters}
              onChange={handleChange}
            />
          </div>
          <div className="input11">
            <label>: التاريخ </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="input11">
            <label> : لون الزجاج</label>
            <input
              type="text"
              name="colorWarsha"
              value={formData.colorWarsha}
              onChange={handleChange}
            />
          </div>
          <div className="abaad">
            <div>
              <label>: قياس الزجاج </label>
              {formData.qaiasat.map((item, index) => (
                <div key={index}>
                  {/* <label>العرض:</label> */}
                  <input
                    type="text"
                    name="w"
                    value={item.w}
                    onChange={(e) => handleChange(e, index)}
                    placeholder="العرض"
                  />
                  {/* <label>الارتفاع:</label> */}
                  <input
                    type="text"
                    name="h"
                    value={item.h}
                    onChange={(e) => handleChange(e, index)}
                    placeholder="الارتفاع"
                  />
                </div>
              ))}
            </div>

            <button type="button" onClick={addDimension}>
              إضافة المزيد
            </button>
          </div>
          {showSuccessPopup && (
            <div
              className={`success-popup show`}
              onAnimationEnd={() => setShowSuccessPopup(false)}
            >
              تمت إضافة ورشة بنجاح!
            </div>
          )}
        </div>

        <button onClick={handleSubmit}> اضافة الورشة </button>
      </form>
    </div>
  );
};

export default Warshat;
