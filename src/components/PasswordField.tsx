import { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./PasswordField.css";

function PasswordField() {
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [totalDeletionCount1, setTotalDeletionCount1] = useState(0);
  const [totalDeletionCount2, setTotalDeletionCount2] = useState(0);
  const [topFieldNumber, setTopFieldNumber] = useState(1);
  const [bottomFieldNumber, setBottomFieldNumber] = useState(2);
  const [progress, setProgress] = useState(5);
  const [complexity, setComplexity] = useState("Easy");
  const [saved, setSaved] = useState({
    dc1: 0,
    dc2: 0,
    dc3: 0,
    dc4: 0,
    dc5: 0,
    dc6: 0,
  });

  const samplePasswords = {
    1: "EasyPassword123",
    2: "EasyPassword123",
    3: "M3d!umStr0ng#",
    4: "M3d!umStr0ng#",
    5: "H@rdP@ssw0rd$123",
    6: "H@rdP@ssw0rd$123",
  };

  const [displayedCharacters, setDisplayedCharacters] = useState("");

  const clearDisplayedCharacters = () => {
    setDisplayedCharacters("");
  };

  const handlePaste = (e) => {
    e.preventDefault();
  };

  const handlePasswordChange = (event, setPassword, deletionCountState) => {
    const currentValue = event.target.value;
    const previousValue = setPassword === setPw1 ? pw1 : pw2;

    if (previousValue.length > currentValue.length) {
      const deletedCharacters = previousValue.length - currentValue.length;
      deletionCountState((prevCount) => prevCount + deletedCharacters);
    }

    setPassword(currentValue);

    if (setPassword === setPw2) {
      const cursorPosition = event.target.selectionStart;
      let start, end;

      if (cursorPosition === 0) {
        start = 0;
        end = Math.min(currentValue.length, cursorPosition + 2);
      } else if (cursorPosition === currentValue.length) {
        start = Math.max(0, cursorPosition - 2);
        end = currentValue.length;
      } else {
        start = Math.max(0, cursorPosition - 1);
        end = Math.min(currentValue.length, cursorPosition + 1);
      }

      const charactersAroundCursor = currentValue.substring(start, end);

      setDisplayedCharacters(charactersAroundCursor);
      setTimeout(clearDisplayedCharacters, 3000);
    }
  };

  const handleCursorMove = (event) => {
    if (event.target.id === "pw2") {
      const cursorPosition = event.target.selectionStart;
      const currentValue = event.target.value;
      let start, end;

      if (cursorPosition === 0) {
        start = 0;
        end = Math.min(currentValue.length, cursorPosition + 2);
      } else if (cursorPosition === currentValue.length) {
        start = Math.max(0, cursorPosition - 2);
        end = currentValue.length;
      } else {
        start = Math.max(0, cursorPosition - 1);
        end = Math.min(currentValue.length, cursorPosition + 1);
      }

      const charactersAroundCursor = currentValue.substring(start, end);

      setDisplayedCharacters(charactersAroundCursor);
      setTimeout(clearDisplayedCharacters, 2000);
    }
  };

  const handleNextClick = () => {
    if (complexity === "Easy") {
      setComplexity("Medium");
      setProgress(progress + 30);
      setTopFieldNumber(3);
      setBottomFieldNumber(4);
      setSaved({
        ...saved,
        dc1: totalDeletionCount1,
        dc2: totalDeletionCount2,
      });
      setTotalDeletionCount1(0);
      setTotalDeletionCount2(0);
    } else if (complexity === "Medium") {
      setComplexity("Hard");
      setProgress(progress + 30);
      setTopFieldNumber(5);
      setBottomFieldNumber(6);
      setSaved({
        ...saved,
        dc3: totalDeletionCount1,
        dc4: totalDeletionCount2,
      });
      setTotalDeletionCount1(0);
      setTotalDeletionCount2(0);
    } else {
      setSaved({
        ...saved,
        dc5: totalDeletionCount1,
        dc6: totalDeletionCount2,
      });
    }
  };

  return (
    <>
      <ProgressBar progress={progress} />
      <div className="container">
        <br />
        <h2 className="text-center">Password Complexity {complexity}</h2>
        <br />

        <div className="card">
          <div className="card-header bg-info-subtle">
            Password Field {topFieldNumber}
          </div>
          <div className="card-body">
            <p className="card-text">
              Please enter the following text in the password field below
              without the double quotes &nbsp; "
              {samplePasswords[topFieldNumber]}"
            </p>
            <div>
              <label htmlFor="email" className="form-label required">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={"someone@something.com"}
                readOnly
              />
              <br />
              <label htmlFor="pw1" className="form-label required">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="pw1"
                placeholder="Password"
                required
                onPaste={handlePaste}
                value={pw1}
                onChange={(e) =>
                  handlePasswordChange(e, setPw1, setTotalDeletionCount1)
                }
              />
            </div>
          </div>
        </div>
        <br />

        <div className="card">
          <div className="card-header bg-info-subtle">
            Password Field {bottomFieldNumber}
          </div>
          <div className="card-body">
            <p className="card-text">
              Please enter the following text in the password field below
              without the double quotes &nbsp; "
              {samplePasswords[bottomFieldNumber]}"
            </p>
            <label htmlFor="email" className="form-label required">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={"someone@something.com"}
              readOnly
            />
            <br />
            <div>
              <label htmlFor="pw2" className="form-label required">
                Password
              </label>
              <div className="my-div">
                {displayedCharacters && (
                  <p className="text-center">{displayedCharacters}</p>
                )}
              </div>
              <input
                type="password"
                className="form-control"
                id="pw2"
                placeholder="Password"
                required
                onPaste={handlePaste}
                value={pw2}
                onChange={(e) =>
                  handlePasswordChange(e, setPw2, setTotalDeletionCount2)
                }
                onKeyDown={handleCursorMove} // For arrow key events
                onTouchMove={handleCursorMove} // For touch events
              />
            </div>
          </div>
        </div>
        <br />

        <div className="text-center">
          <a href="#" className="btn btn-primary" onClick={handleNextClick}>
            Next
          </a>
        </div>
        <br />

        <div
          style={{
            backgroundColor: "gray",
            color: "white",
            borderRadius: "4px",
          }}
        >
          <p className="text-center">
            For Testing purpose only | Total Deletion Count For Field &nbsp;
            {topFieldNumber} = {totalDeletionCount1}
            &nbsp; &nbsp; Total Deletion Count For Field {bottomFieldNumber} =
            {totalDeletionCount2}
          </p>
        </div>
      </div>
    </>
  );
}

export default PasswordField;
