import { ChangeEvent, SetStateAction, useState } from "react";
import ProgressBar from "./ProgressBar";
import "./PasswordField.css";
import { useAppContext } from "./AppContext";
interface RulesProps {
  onEndTesting: () => void;
}

function PasswordField({ onEndTesting }: RulesProps) {
  const { saved, setSaved } = useAppContext();
  const wrongPasswords: { [key: number]: string } = {
    1: "EasyPaasword123",
    2: "Easypassword123",
    3: "M3diumstr0ng#",
    4: "Med!umStrong#",
    5: "ComPlexPa$$w0rD#2024", //C0mpl3xP@$$w0rD#2024
    6: "C0mPl3xPassw0rD#2024", //C0mpl3xP@$$w0rD#2024
  };

  let [error1, setError1] = useState<string | null>(null);
  let [error2, setError2] = useState<string | null>(null);

  let [pw1, setPw1] = useState(wrongPasswords[1]);
  let [pw2, setPw2] = useState(wrongPasswords[2]);
  const [totalDeletionCount1, setTotalDeletionCount1] = useState(0);
  const [totalDeletionCount2, setTotalDeletionCount2] = useState(0);
  const [topFieldNumber, setTopFieldNumber] = useState(1);
  const [bottomFieldNumber, setBottomFieldNumber] = useState(2);
  const [progress, setProgress] = useState(5);
  const [complexity, setComplexity] = useState("Easy");

  const [cursorVisible, setCursorVisible] = useState(false);

  const samplePasswords: { [key: number]: string } = {
    1: "EasyPassword123",
    2: "EasyPassword123",
    3: "M3d!umStr0ng#",
    4: "M3d!umStr0ng#",
    5: "C0mpl3xP@$$w0rD#2024",
    6: "C0mpl3xP@$$w0rD#2024",
  };

  const [cursorPosition, setCursorPosition] = useState(0);
  const handleCursorPositionChange = () => {
    setTimeout(() => {
      const pw2Input = document.getElementById("pw2") as HTMLInputElement;
      if (pw2Input) {
        const newPosition = pw2Input.selectionStart ?? 0;
        setCursorPosition(newPosition);
      }
    }, 0);

    // Show the span for 0.5 seconds
    setCursorVisible(true);
    setTimeout(() => {
      setCursorVisible(false);
    }, 1000);
  };

  const handlePaste = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handlePasswordChange = (
    event: ChangeEvent<HTMLInputElement>,
    setPassword: {
      (value: SetStateAction<string>): void;
      (value: SetStateAction<string>): void;
      (value: SetStateAction<string>): void;
    },
    deletionCountState: {
      (value: SetStateAction<number>): void;
      (value: SetStateAction<number>): void;
      (arg0: (prevCount: any) => any): void;
    }
  ) => {
    const currentValue = event.target.value;
    const previousValue = setPassword === setPw1 ? pw1 : pw2;

    if (previousValue.length > currentValue.length) {
      const deletedCharacters = previousValue.length - currentValue.length;
      deletionCountState((prevCount) => prevCount + deletedCharacters);
    }

    setPassword(currentValue);
  };
  const [newValue, setNewValue] = useState("");
  const handlePasswordChange2 = (
    event: ChangeEvent<HTMLInputElement>,
    setPassword: {
      (value: SetStateAction<string>): void;
      (value: SetStateAction<string>): void;
      (value: SetStateAction<string>): void;
    },
    deletionCountState: {
      (value: SetStateAction<number>): void;
      (value: SetStateAction<number>): void;
      (arg0: (prevCount: any) => any): void;
    }
  ) => {
    const currentValue = event.target.value;
    const previousValue = setPassword === setPw1 ? pw1 : pw2;

    if (previousValue.length > currentValue.length) {
      const deletedCharacters = previousValue.length - currentValue.length;
      deletionCountState((prevCount) => prevCount + deletedCharacters);
    }
    setNewValue(currentValue);
    console.log(newValue);
    setPassword(currentValue);
  };

  const handleNextClick = () => {
    if (complexity === "Easy") {
      if (pw1 === samplePasswords[1]) {
        setError1(null);
        if (pw2 == samplePasswords[2]) {
          setError2(null);
          setComplexity("Medium");
          setProgress(progress + 30);
          setTopFieldNumber(3);
          setBottomFieldNumber(4);
          setSaved({
            ...saved,
            dc1: totalDeletionCount1,
            dc2: totalDeletionCount2,
          });

          setPw1(wrongPasswords[3]); // Update pw1 with wrongPassword[3]
          setPw2(wrongPasswords[4]); // Update pw2 with wrongPassword[4]

          setTotalDeletionCount1(0);
          setTotalDeletionCount2(0);
        } else {
          setError2("Incorrect Password");
        }
      } else {
        setError1("Incorrect Password");
      }
    } else if (complexity === "Medium") {
      if (pw1 === samplePasswords[3]) {
        setError1(null);
        if (pw2 == samplePasswords[4]) {
          setError2(null);
          setComplexity("Hard");
          setProgress(progress + 30);
          setTopFieldNumber(5);
          setBottomFieldNumber(6);
          setSaved({
            ...saved,
            dc3: totalDeletionCount1,
            dc4: totalDeletionCount2,
          });

          setPw1(wrongPasswords[5]); // Update pw1 with wrongPassword[5]
          setPw2(wrongPasswords[6]); // Update pw2 with wrongPassword[6]

          setTotalDeletionCount1(0);
          setTotalDeletionCount2(0);
        } else {
          setError2("Incorrect Password");
        }
      } else {
        setError1("Incorrect Password");
      }
    } else if (complexity === "Hard") {
      if (pw1 === samplePasswords[5]) {
        setError1(null);
        if (pw2 == samplePasswords[6]) {
          setError2(null);
          onEndTesting();
          setSaved({
            ...saved,
            dc5: totalDeletionCount1,
            dc6: totalDeletionCount2,
          });

          setPw1(""); // Set pw1 to an empty string or any default value
          setPw2(""); // Set pw2 to an empty string or any default value
        } else {
          setError2("Incorrect Password");
        }
      } else {
        setError1("Incorrect Password");
      }
    }
  };

  return (
    <>
      <ProgressBar progress={progress} />
      <div className="container col-lg-4 col-md-6">
        <br />
        <h2 className="text-center">Password Complexity {complexity}</h2>
        <br />

        <div className="card">
          <div className="card-header bg-info-subtle">
            Password Field Variation 1
          </div>
          <div className="card-body">
            <p className="card-text">
              Correct Password: &nbsp; &nbsp;"{samplePasswords[topFieldNumber]}"{" "}
              <br /> Incorrect Password: "{wrongPasswords[topFieldNumber]}"
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
                className={`form-control ${error1 ? "is-invalid" : ""}`}
                id="pw1"
                placeholder="Password"
                required
                onPaste={handlePaste}
                value={pw1}
                onChange={(e) =>
                  handlePasswordChange(e, setPw1, setTotalDeletionCount1)
                }
              />
              {error1 ? (
                <div className="invalid-feedback">Incorrect password</div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <br />

        <div className="card">
          <div className="card-header bg-purp-subtle">
            Password Field Variation 2
          </div>
          <div className="card-body">
            <p className="card-text">
              Correct Password: &nbsp; &nbsp;"{samplePasswords[topFieldNumber]}"{" "}
              <br /> Incorrect Password: "{wrongPasswords[bottomFieldNumber]}"
            </p>
            <label htmlFor="email2" className="form-label required">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email2"
              value={"someone@something.com"}
              readOnly
            />
            <br />
            <div>
              <label htmlFor="pw2" className="form-label required">
                Password{" "}
              </label>
              {/* <div className="topClass">
                {pw2.charAt(cursorPosition - 1)}|{pw2.charAt(cursorPosition)}
              </div> */}
              <div className="input-group mb-3">
                <input
                  type="password"
                  className={`form-control ${error2 ? "is-invalid" : ""}`}
                  id="pw2"
                  placeholder="Password"
                  required
                  onPaste={handlePaste}
                  value={pw2}
                  onChange={(e) =>
                    handlePasswordChange2(e, setPw2, setTotalDeletionCount2)
                  }
                  onSelect={handleCursorPositionChange}
                />{" "}
                <span className="input-group-text text-center ">
                  {cursorVisible && (
                    <>
                      {pw2.charAt(cursorPosition - 1)} <b>|</b>
                      {pw2.charAt(cursorPosition)}
                    </>
                  )}
                </span>
                {error1 ? (
                  <div className="invalid-feedback">Incorrect password</div>
                ) : (
                  <></>
                )}
              </div>
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

        {/*This Code is for testing. remove this from production build*
        <div
          style={{
            backgroundColor: "gray",
            color: "white",
            borderRadius: "4px",
          }}
        >
          <p className="text-center">
            {" "}
            For Testing purpose only | Total Deletion Count For Field &nbsp;
            {topFieldNumber} = {totalDeletionCount1}
            &nbsp; &nbsp; Total Deletion Count For Field {bottomFieldNumber} =
            {totalDeletionCount2}
          </p>
        </div>
        *This Code is for testing. remove this from production build*/}
      </div>
    </>
  );
}

export default PasswordField;
