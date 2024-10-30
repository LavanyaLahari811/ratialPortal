import React from "react";
import "./registrationForm.css";

const RegistrationForm = ({ handleNextForm }) => {
  const handleFileUploadClick = (e) => {
    e.preventDefault();
    const fileInput = e.target.previousElementSibling;
    fileInput.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNextForm();
  };

  return (
    <div className="registration-container">
      <img src={require("../../assets/top1.png")} alt="top" />
      <h2>Registration for Partner</h2>
      <form onSubmit={handleSubmit} action="#" method="post" encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group inline-fields-age">
          <div className="field">
            <label htmlFor="age">Age :</label>
            <input type="number" id="age" name="age" required />
          </div>
        </div>

        <div className="form-group inline-fields">
          <div className="field">
            <label htmlFor="phone">Phone Number :</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email Address :</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>

        <div className="form-group inline-fields">
          <div className="field">
            <label htmlFor="aadhaar">Aadhaar Number :</label>
            <input type="text" id="aadhaar" name="aadhaar" required />
          </div>
          <div className="field">
            <label htmlFor="pan">PAN Number :</label>
            <input type="text" id="pan" name="pan" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="skillset">Skillset :</label>
          <input type="text" id="skillset" name="skillset" placeholder="(whole skill option which you have mentioned in the user app.)" required />
        </div>

        <div className="form-group inline-fields">
          <div className="field">
            <label htmlFor="experience">Experience :</label>
            <input type="text" id="experience" name="experience" required />
          </div>
          <div className="field">
            <label htmlFor="previous-employers">Name of Previous Employers :</label>
            <input type="text" id="previous-employers" name="previous-employers" required />
          </div>
        </div>

        <div className="form-group large-width-field">
          <div className="field half-width">
            <label htmlFor="contacted-employers">Contacted Previous Employers :</label>
            <input type="text" id="contacted-employers" name="contacted-employers" required />
          </div>
        </div>

        <div className="form-group large-width-field">
          <div className="field">
            <label htmlFor="education">Education :</label>
            <input type="text" id="education" name="education" placeholder="Best Qualification, Trade school or apprenticeship" required />
          </div>
          <input type="file" id="education-file" name="education-file" style={{ display: "none" }} />
          <span className="upload-file" onClick={handleFileUploadClick}>Upload file</span>
        </div>

        <div className="form-group large-width-field">
          <div className="field">
            <label htmlFor="certificate">Certificate :</label>
            <input type="text" id="certificate" name="certificate" placeholder="Any relevant certificate or license" required />
          </div>
          <input type="file" id="certificate-file" name="certificate-file" style={{ display: "none" }} />
          <span className="upload-file" onClick={handleFileUploadClick}>Upload file</span>
        </div>

        <div className="form-group large-width-field">
          <div className="field">
            <label htmlFor="reference">Reference :</label>
            <input type="text" id="reference" name="reference" placeholder="Two personal or professional references" required />
          </div>
        </div>

        <div className="agreement-section">
          <label>Agree :</label>
          <p>
            1. I, [Worker's Name], agree to work with Quickhomie as an independent contractor.
            <br />
            2. I agree to abide by all applicable rules and regulations.
            <br />
            3. I agree to complete all tasks in a safe and efficient manner.
            <br />
            4. I am aware that I may be removed from Quickhomie if I violate any rules or regulations.
          </p>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
