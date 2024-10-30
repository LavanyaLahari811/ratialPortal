import React from 'react';
import './personalDetails.css';

const PersonalDetails = () => {
    const handleFileUploadClick = (e) => {
        e.preventDefault();
        const fileInput = e.target.previousElementSibling; 
        fileInput.click(); 
    };

    return (
        <div className="personal-details-container">
            <form className="personal-details-form">
                <img src={require("../../assets/top2.png")} alt='top'></img>
                <h2>Personal details</h2>

                <div className="form-row">
                    <div className="form-group">
                        <label>First name:</label>
                        <input type="text" name="firstName" />
                    </div>
                    <div className="form-group">
                        <label>Middle name:</label>
                        <input type="text" name="middleName" />
                    </div>
                    <div className="form-group">
                        <label>Last name:</label>
                        <input type="text" name="lastName" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Mobile number:</label>
                        <input type="text" name="mobileNumber" />
                    </div>
                    <div className="form-group">
                        <label>Email address:</label>
                        <input type="email" name="email" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Physical address:</label>
                    <input type="text" name="physicalAddress" />
                </div>

                <div className="form-group">
                    <label>Identification:</label>
                    <input type="text" name="identification" placeholder="Aadhaar card in India or another form of government identification." />
                </div>

                <div className="form-group upload-group">
                    <label>Passport photo:</label>
                    <input type="file" name="passportPhoto" style={{ display: 'none' }} />
                    <button onClick={handleFileUploadClick} className="upload-button">Choose file</button>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Experience:</label>
                        <input type="text" name="experience" placeholder="In Years" />
                    </div>
                    <div className="form-group">
                        <label>Name of previous employers:</label>
                        <input type="text" name="previousEmployers" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Experience :</label>
                        <input type="text" name="skillExperience" placeholder="Years of experience in each skill." />
                    </div>
                    <div className="form-group upload-group">
                        <label>Education:</label>
                        <input type="file" name="education" style={{ display: 'none' }} />
                        <button onClick={handleFileUploadClick} className="upload-button">Choose file</button>
                    </div>
                </div>

                
                <div className="form-row">
                    <div className="form-group">
                        <label>Previous Employers:</label>
                        <input type="text" name="prevEmployers" />
                    </div>
                    <div className="form-group">
                        <label>Employment dates:</label>
                        <input type="text" name="employmentDates" />
                    </div>
                </div>

               
                <div className="form-row">
                    <div className="form-group">
                        <label>Previous Projects:</label>
                        <input type="text" name="previousProjects" placeholder="Details of projects they've worked on previously" />
                    </div>
                    <div className="form-group">
                        <label>Salary Expectations:</label>
                        <input type="text" name="salaryExpectations" placeholder="Desired salary range." />
                    </div>
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default PersonalDetails;
