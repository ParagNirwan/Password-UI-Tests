import { useState } from "react";
import Navbar from "./components/Navbar";
import PasswordField from "./components/PasswordField";
import ProgressBar from "./components/ProgressBar";
import Rules from "./components/Rules";

function App() {
  // State variable to track whether testing has begun
  const [testingStarted, setTestingStarted] = useState(false);

  // Function to handle the start of testing
  const handleBeginTesting = () => {
    setTestingStarted(true);
  };

  return (
    <div>
      <Navbar />

      {!testingStarted && <Rules onBeginTesting={handleBeginTesting} />}

      {testingStarted && <ProgressBar />}
      {testingStarted && <PasswordField />}
    </div>
  );
}

export default App;
