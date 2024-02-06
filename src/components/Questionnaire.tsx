import React, { useState } from "react";
import { useAppContext } from "./AppContext";
import config from "../../config";
import "./Questionnaire.css";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
interface QuestionnaireProps {
  onFinish: () => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ onFinish }) => {
  const [age, setAge] = useState<number | "">("");
  const [device, setDevice] = useState<string>("");
  const [passwordField, setPasswordField] = useState<string>("");
  const { saved } = useAppContext();
  const [ageError, setAgeError] = useState<string | null>(null);
  const [deviceError, setDeviceError] = useState<string | null>(null);
  const [passwordFieldError, setPasswordFieldError] = useState<string | null>(
    null
  );

  firebase.initializeApp(config);
  const handleFinish = () => {
    console.log(saved);
    // Validate the age field
    if (age === "" || age < 13 || age > 100) {
      setAgeError("Please enter a valid age between 13 and 100.");
      return;
    } else {
      setAgeError(null);
    }

    // Validate the device field
    if (!device) {
      setDeviceError("Please select a device.");
      return;
    } else {
      setDeviceError(null);
    }

    // Validate the password field
    if (!passwordField) {
      setPasswordFieldError("Please select a password field preference.");
      return;
    } else {
      setPasswordFieldError(null);
    }

    // If all validations pass, call the onFinish callback

    const finalRes = {
      saved,
      questionnaireData: {
        age,
        device,
        passwordField,
      },
    };

    //code for firebase
    firebase.database().ref("questionnaireData").push(finalRes);

    // Log the finalRes object
    console.log(finalRes);
    onFinish();
  };

  return (
    <div className="container col-lg-6 col-md-6">
      <div className="card">
        <div className="card-header bg-success-subtle text-dark">
          Questionnaire
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="age">1. Age:</label>
            <input
              type="number"
              className={`form-control ${ageError ? "is-invalid" : ""}`}
              id="age"
              placeholder="Enter your age"
              min="13"
              max="100"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
            {ageError && <div className="invalid-feedback">{ageError}</div>}
          </div>

          <br />
          <div className="form-group">
            <label>2. Device used:</label>
            <div className="form-check">
              <input
                type="radio"
                className={`form-check-input ${
                  deviceError ? "is-invalid" : ""
                }`}
                id="device-smartphone"
                name="device"
                value="smartphone"
                onChange={() => setDevice("smartphone")}
              />
              <label className="form-check-label" htmlFor="device-smartphone">
                Smartphone/Tablet
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className={`form-check-input ${
                  deviceError ? "is-invalid" : ""
                }`}
                id="device-laptop"
                name="device"
                value="laptop"
                onChange={() => setDevice("laptop")}
              />
              <label className="form-check-label" htmlFor="device-laptop">
                Laptop
              </label>
            </div>
            {deviceError && (
              <div className="invalid-feedback">{deviceError}</div>
            )}
          </div>

          <br />
          <div className="form-group">
            <label>3. Which Password field would you prefer?</label>
            <div className="form-check">
              <input
                type="radio"
                className={`form-check-input ${
                  passwordFieldError ? "is-invalid" : ""
                }`}
                id="field1"
                name="Field"
                value="Field 1"
                onChange={() => setPasswordField("Field 1")}
              />
              <label className="form-check-label" htmlFor="field1">
                <img src="../../public/field1.png" className="lambai"></img>
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className={`form-check-input ${
                  passwordFieldError ? "is-invalid" : ""
                }`}
                id="field2"
                name="Field"
                value="Field 2"
                onChange={() => setPasswordField("Field 2")}
              />
              <label className="form-check-label" htmlFor="field2">
                <img src="../../public/field2.png" className="lambai"></img>
              </label>
            </div>
            {passwordFieldError && (
              <div className="invalid-feedback">{passwordFieldError}</div>
            )}
          </div>

          <br />
          <center>
            <div className="form-group">
              <button
                className="btn bg-success text-light"
                onClick={handleFinish}
              >
                Finish
              </button>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
