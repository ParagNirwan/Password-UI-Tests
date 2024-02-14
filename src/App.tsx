import {  useState } from "react";
import Navbar from "./components/Navbar";
import PasswordField from "./components/PasswordField";
import Rules from "./components/Instructions";
import Questionnaire from "./components/Questionnaire";
import End from "./components/End";

function App() {
  // State variable to track whether testing has begun
  const [testingStarted, setTestingStarted] = useState(false);
  const [testingEnded, setTestingEnded] = useState(false);
  const [finish, setFinish] = useState(false);

  // Function to handle the start of testing
  const handleBeginTesting = () => {
    setTestingStarted(true);
  };

  const handleEndTesting = () => {
    setTestingEnded(true);
  };

  const handleFinish = () => {
    setFinish(true);
  };

  return (
    <div>
      <Navbar />
      {!testingStarted && <Rules onBeginTesting={handleBeginTesting} />}
      {testingStarted && !testingEnded && (
        <PasswordField onEndTesting={handleEndTesting} />
      )}
      {testingEnded && !finish && <Questionnaire onFinish={handleFinish} />}
      {finish && <End />}

      {/* <End></End> */}
    </div>
  );
}

export default App;
