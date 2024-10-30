import React, { useState } from "react";
import './loginPage.css';

const LoginPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const translations = {
    en: {
      signup: "Sign up",
      login: "Log in",
      continueWithGoogle: "Continue with Google",
      continueWithFacebook: "Continue with Facebook",
      signupWithEmail: "Sign up with email",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      emailAddress: "Email address",
      password: "Password",
      forgotPassword: "Forgot your password?",
      loginButton: "Log in"
    },
    es: {
      signup: "Registrarse",
      login: "Iniciar sesión",
      continueWithGoogle: "Continuar con Google",
      continueWithFacebook: "Continuar con Facebook",
      signupWithEmail: "Regístrate con email",
      termsOfService: "Términos de servicio",
      privacyPolicy: "Política de privacidad",
      emailAddress: "Dirección de correo electrónico",
      password: "Contraseña",
      forgotPassword: "¿Olvidaste tu contraseña?",
      loginButton: "Iniciar sesión"
    },
    fr: {
      signup: "S'inscrire",
      login: "Se connecter",
      continueWithGoogle: "Continuer avec Google",
      continueWithFacebook: "Continuer avec Facebook",
      signupWithEmail: "Inscrivez-vous par email",
      termsOfService: "Conditions d'utilisation",
      privacyPolicy: "Politique de confidentialité",
      emailAddress: "Adresse électronique",
      password: "Mot de passe",
      forgotPassword: "Mot de passe oublié?",
      loginButton: "Se connecter"
    },
    de: {
      signup: "Anmelden",
      login: "Einloggen",
      continueWithGoogle: "Weiter mit Google",
      continueWithFacebook: "Weiter mit Facebook",
      signupWithEmail: "Mit E-Mail registrieren",
      termsOfService: "Nutzungsbedingungen",
      privacyPolicy: "Datenschutz-Bestimmungen",
      emailAddress: "E-Mail-Addresse",
      password: "Passwort",
      forgotPassword: "Passwort vergessen?",
      loginButton: "Einloggen"
    }
  };

  
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <span className="close-btn">&times;</span>
        <div className="left-section">
          <h2>{translations[selectedLanguage].signup}</h2>
          <button className="social-btn google-btn">
            <img src={require("../../assets/google logo.png")} alt="Google G" />
            {translations[selectedLanguage].continueWithGoogle}
          </button>
          <button className="social-btn facebook-btn">
            <img src={require("../../assets/facebook logo.png")} alt="Facebook" />
            {translations[selectedLanguage].continueWithFacebook}
          </button>
          <button className="email-btn">
            <img src={require("../../assets/Icons.png")} alt="Email" />
            {translations[selectedLanguage].signupWithEmail}
          </button>
          <p>
            By signing up, you agree to the <a href="/">{translations[selectedLanguage].termsOfService}</a> and acknowledge you've read our <a href="/">{translations[selectedLanguage].privacyPolicy}</a>.
          </p>
        </div>
        <div className="center-line"></div>
        <div className="right-section">
          <h2>{translations[selectedLanguage].login}</h2>
          <form>
            <label className="labelInput" htmlFor="email">
              {translations[selectedLanguage].emailAddress}
            </label>
            <input type="email" id="email" required />
            <label
              className="labelInput"
              htmlFor="password"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              {translations[selectedLanguage].password}
            </label>
            <input type="password" id="password" required />
            <a href="/" className="forgot-password">
              {translations[selectedLanguage].forgotPassword}
            </a>
            <button type="submit" className="login-btn">
              {translations[selectedLanguage].loginButton}
            </button>
          </form>
          
          
        </div>
        
      </div>
      
      <div className="language-selector">
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="en">English (United States)</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
      
      
    </div>
  );
};

export default LoginPage;
