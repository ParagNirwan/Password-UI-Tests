function Rules() {
  return (
    <div className="container">
      <br />
      <div className="card">
        <div className="card-header bg-primary">Guidelines for the Tests</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            <ul>
              <li>
                <strong>User Focus:</strong> Participants, the purpose of these
                tests is to evaluate the user interface (UI) and not your
                personal performance. Feel free to make mistakes; the focus is
                on assessing the UI's functionality.
              </li>
              <li>
                <strong>Generic Passwords:</strong> Passwords provided are
                generic and unrelated to personal information. Approach the test
                with the understanding that the goal is to assess the UI, not
                the security or memorability of the given password.
              </li>
              <li>
                <strong>Objective:</strong> The primary goal is to evaluate the
                efficiency and accuracy of password entry. Participants should
                concentrate on entering the password correctly, prioritizing
                accuracy over speed.
              </li>
              <li>
                <strong>Natural Interaction:</strong> Use the password entry UI
                naturally and in a typical manner, similar to how you would
                interact with any other application.
              </li>
              <li>
                <strong>Multiple Attempts:</strong> You are permitted to attempt
                entering the password multiple times. However, please refrain
                from refreshing the page once the tests begin to maintain the
                continuity of the evaluation process.
              </li>
            </ul>
          </p>
          <div className="text-center">
            <a href="#" className="btn btn-primary">
              Begin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
