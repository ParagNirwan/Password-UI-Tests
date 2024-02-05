import React, { useState } from "react";

interface QuestionnaireProps {
  onFinish: () => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ onFinish }) => {
  const [age, setAge] = useState<number | "">("");
  const [device, setDevice] = useState<string>("");
  const [passwordField, setPasswordField] = useState<string>("");

  const [ageError, setAgeError] = useState<string | null>(null);
  const [deviceError, setDeviceError] = useState<string | null>(null);
  const [passwordFieldError, setPasswordFieldError] = useState<string | null>(
    null
  );

  const handleFinish = () => {
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
    onFinish();
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header bg-success-subtle text-dark">
          Questionnaire
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="age">Age:</label>
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
            <label>Device used:</label>
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
            <label>Which Password field would you prefer?</label>
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
                Field 1
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
                Field 2
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
