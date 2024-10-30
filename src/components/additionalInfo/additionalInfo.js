import React from "react";
import "./additionalInfo.css";

const AdditionalInformationForm = () => {
  return (
    <div className="form-container">
      <img src={require("../../assets/top4.png")} alt="top"></img>

      <div className="info-section">
        <p>Additional Information</p>
        <p>Availability: When they are available to start working</p>
        <p>
          Willingness to Relocate: Whether they are willing to relocate to a
          different city
        </p>
        <p>
          Criminal Record: Whether they have a criminal record (if applicable in
          your region)
        </p>
        <p>
          References: Contact information for references who can vouch for their
          skills and experience
        </p>
        <p>Optional Information (depending on your app):</p>
        <p>
          Specialized Skills: If your app focuses on a specific area like
          construction or IT, you may inquire about specialized skills relevant
          to that field
        </p>
        <p>
          Industry Experience: If your app caters to a specific industry like
          healthcare or manufacturing, you may ask about experience in that
          industry
        </p>
        <p>
          Language Skills: If your app requires workers who can communicate in
          multiple languages, you can collect information on their language
          proficiency
        </p>

        <p>Important Notes:</p>
        <p>
          The information you collect should comply with all relevant laws and
          regulations and respect worker privacy
        </p>

        <p>Additional Tips:</p>
        <p>Make the registration process simple and easy to follow</p>
        <p>
          Design an attractive and user-friendly interface for workers and
          experts
        </p>
        <p>
          Implement strong security measures to protect all collected
          information
        </p>
        <p>
          Provide workers and experts with tools and resources to manage their
          profiles and applications
        </p>

        <p>Getting Help:</p>
        <p>
          If you need assistance in setting up the worker/expert registration
          process for your app, consider contacting a professional developer or
          consultant.
        </p>

        <p>Documents, Payment & Wallet</p>
        <p>Documents:</p>
        <p>
          The specific documents required may vary depending on your location
          and regulations. However, some common documents you might consider
          collecting include:
        </p>
        <p>Government-issued ID (already mentioned in Personal Information)</p>
        <p>Proof of address (e.g., utility bill)</p>
        <p>Educational certificates (if relevant)</p>
        <p>Work certificates (if relevant)</p>

        <p>Payment & Wallet:</p>
        <p>
          You might consider integrating a payment system within your app to
          facilitate transactions between workers/experts and clients.
        </p>
        <p>
          A wallet feature could be helpful for workers/experts to manage their
          earnings within the app.
        </p>
      </div>

      <div className="form-actions">
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdditionalInformationForm;
