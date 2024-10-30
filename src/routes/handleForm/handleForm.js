import React, { useState } from "react";
import RegistrationForm from "../../components/registrationForm/registrationForm";
import PersonalDetails from "../../components/personalDetail/personalDetails";
import BankDetails from "../../components/bankDetails/bankDetails";
import AdditionalInformationForm from "../../components/additionalInfo/additionalInfo";

const FormContainer = () => {
  const [currentForm, setCurrentForm] = useState(1);

  const handleNextForm = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };

  return (
    <div>
      {currentForm === 1 && (
        <RegistrationForm handleNextForm={handleNextForm} />
      )}
      {currentForm === 2 && <PersonalDetails handleNextForm={handleNextForm} />}
      {currentForm === 3 && <BankDetails />}
      {currentForm === 4 && <AdditionalInformationForm />}
    </div>
  );
};

export default FormContainer;
