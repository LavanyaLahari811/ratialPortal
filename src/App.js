import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import LoginPage from "./routes/loginPage/loginPage";
import FormContainer from "./routes/handleForm/handleForm";
import AdditionalInformationForm from "./components/additionalInfo/additionalInfo";
import PersonalDetails from "./components/personalDetail/personalDetails";
import BankDetails from "./components/bankDetails/bankDetails";


function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<FormContainer/>}/>
            <Route path="/add" element={<AdditionalInformationForm/>}/>
            <Route path="/per" element={<PersonalDetails/>}/>
            <Route path="/bank" element={<BankDetails/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
