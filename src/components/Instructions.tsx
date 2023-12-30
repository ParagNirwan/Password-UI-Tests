import { useState } from "react";

interface RulesProps {
  onBeginTesting: () => void;
}

function Rules({ onBeginTesting }: RulesProps) {
  const instructions = [
    {
      title: "User Focus",
      content:
        "Participants, the purpose of these tests is to evaluate the user interface (UI) and not your personal performance. Feel free to make mistakes; the focus is on assessing the UI's functionality.",
    },
    {
      title: "Generic Passwords",
      content:
        "Passwords provided are generic and unrelated to personal information. Approach the test with the understanding that the goal is to assess the UI, not the security or memorability of the given password.",
    },
    {
      title: "Objective",
      content:
        "The primary goal is to evaluate the efficiency and accuracy of password entry. Participants should concentrate on entering the password correctly, prioritizing accuracy over speed.",
    },
    {
      title: "Natural Interaction",
      content:
        "Use the password entry UI naturally and in a typical manner, similar to how you would interact with any other application.",
    },
    {
      title: "Multiple Attempts",
      content:
        "You are permitted to attempt entering the password multiple times. However, please refrain from refreshing the page once the tests begin to maintain the continuity of the evaluation process.",
    },
    {
      title: "Integrity Constraints",
      content:
        "For the Integrity of tests, copying and pasting text is disabled.",
    },
  ];

  let [beginTest] = useState(false);
  console.log(beginTest);

  return (
    <div className="container">
      <br />
      <div className="card">
        <div className="card-header bg-warning-subtle text-dark">
          Instructions for the tests.
        </div>
        <div className="card-body">
          <h5 className="card-title">
            Write Something here or comment it out later
          </h5>
          <p className="card-text">
            <ul>
              {instructions.map((instruction, index) => (
                <li key={index}>
                  <strong>{instruction.title}:</strong> {instruction.content}
                </li>
              ))}
            </ul>
          </p>
          <div className="text-center">
            <button className="btn btn-primary" onClick={onBeginTesting}>
              Begin Testing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
