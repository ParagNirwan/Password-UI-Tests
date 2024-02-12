interface RulesProps {
  onBeginTesting: () => void;
}
import "./main.css";
function Rules({ onBeginTesting }: RulesProps) {
  const instructions = [
    {
      title: "User Focus",
      content:
        "Participants, the purpose of these tests is to evaluate the user interface (UI) and not your personal performance. Feel free to make mistakes; the focus is on assessing the UI's functionality.",
    },
    {
      title: "Objective",
      content:
        "The primary goal is to evaluate the efficiency and accuracy of password entry. Participants should concentrate on entering the password correctly, prioritizing accuracy over speed.",
    },
    {
      title: "Task type",
      content: "Some tasks will have the password field with wrong passwords inputted. You'll have to correct the passwords."
    }
  ];

  return (
    <div className="container">
      <br />
      <div className="card box">
        <div className="card-header bg-warning-subtle text-dark">
          Instructions for the tests.
        </div>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <span className="card-text">
            <ul>
              {instructions.map((instruction, index) => (
                <li key={index}>
                  <strong>{instruction.title}:</strong> {instruction.content}
                </li>
              ))}
              <li>
                <b>2 Variants: </b>The test has 2 variants of password fields.
                Notice the difference and use that during the UI tests.
                <ul>
                  <li>
                    Variant A: <img src="/v1.gif" className="lambai2"></img>
                  </li>
                  <li>
                    Variant B: <img src="/v2.gif" className="lambai2"></img>
                  </li>
                </ul>
              </li>
            </ul>
          </span>
          <div className="text-center">
            <button className="btn btn-primary box" onClick={onBeginTesting}>
              Begin Testing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
