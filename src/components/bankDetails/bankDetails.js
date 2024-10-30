import React from "react";
import "./bankDetails.css";

const BankDetails = () => {
  return (
    <div className="bank-details-container">
      <form className="bank-details-form">
        <img src={require("../../assets/top3.png")} alt="top"></img>
        <h2>Bank details</h2>

        <div className="form-group inline-fields">
          <div className="field">
            <label>First Name :</label>
            <input type="text" name="firstName" />
          </div>
          <div className="field ">
            <label>Last Name :</label>
            <input type="text" name="lastName" />
          </div>
        </div>

        <div className="form-group">
          <label>Date Of Birth :</label>
          <input type="date" name="dob" />
        </div>

        <div className="form-group">
          <label>Residential Address :</label>
          <textarea name="address" rows="3"></textarea>
        </div>

        <div className="form-group">
          <label>Name Of Bank :</label>
          <input type="text" name="bankName" />
        </div>

        <div className="form-group inline-fields">
          <div className="field ">
            <label>Branch :</label>
            <input type="text" name="branch" />
          </div>
          <div className="field">
            <label>Region :</label>
            <input type="text" name="region" />
          </div>
        </div>

        <div className="form-group city">
          <label>City :</label>
          <input type="text" name="city" />
        </div>

        <div className="form-group">
          <label>Account in the name of :</label>
          <input type="text" name="accountName" />
        </div>

        <div className="form-group">
          <label>Account type :</label>
          <input type="text" name="accountType" />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BankDetails;
