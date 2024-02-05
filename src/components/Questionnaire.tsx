interface QuestionnaireProps {
  onFinish: () => void;
}

function Questionnaire({ onFinish }: QuestionnaireProps) {
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
              className="form-control"
              id="age"
              placeholder="Enter your age"
              min="13"
              max="100"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Device used:</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="device-smartphone"
                name="device"
                value="smartphone"
              />
              <label className="form-check-label" htmlFor="device-smartphone">
                Smartphone/Tablet
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="device-laptop"
                name="device"
                value="laptop"
              />
              <label className="form-check-label" htmlFor="device-laptop">
                Laptop
              </label>
            </div>
          </div>
          <br />
          <div className="form-group">
            <label>Which Password field would you prefer ?</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="field1"
                name="Field"
                value="Field 1"
              />
              <label className="form-check-label" htmlFor="field1">
                Field 1
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="field2"
                name="Field"
                value="Foe;d 2"
              />
              <label className="form-check-label" htmlFor="field2">
                Field 2
              </label>
            </div>
          </div>
          <br />
          <center>
            <div className="form-group">
              <button className="btn bg-success text-light" onClick={onFinish}>
                Finish
              </button>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
