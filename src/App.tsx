import { useState } from "react";
import Navbar from "./components/Navbar";
import PasswordField from "./components/PasswordField";
import Rules from "./components/Instructions";
import Footer from "./components/Footer";
import TextMagnifier from "./components/TextMagnifier";

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
      {testingStarted && <PasswordField />}
      <TextMagnifier initialText={"Parag"}></TextMagnifier>
      <Footer></Footer>
      {/* <End></End> */}
    </div>
  );
}

export default App;
