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
      title: "Objective",
      content:
        "The primary goal is to evaluate the efficiency and accuracy of password entry. Participants should concentrate on entering the password correctly, prioritizing accuracy over speed.",
    },
    {
      title: "Wrong Password Entry",
      content:
        "The prefilled passwords have one or more characters wrong in it, please correct them. Try to delete only the wrong characters, the less characters you delete the better.",
    },
    {
      title: "Try Not to delete the whole password",
      content:
        "Try Not to delete the whole password at once and only the wrong characters.",
    },
  ];

  return (
    <div className="container">
      <br />
      <div className="card">
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
            </ul>
          </span>
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
