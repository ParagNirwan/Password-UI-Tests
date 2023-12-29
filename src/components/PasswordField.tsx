function PasswordField() {
  return (
    <div className="container">
      <br />
      <h2 className="text-center">Password Complexity {"Easy"}</h2>
      <br />
      <div className="card">
        <div className="card-header bg-info-subtle">Password Field #</div>
        <div className="card-body">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <p className="card-text">
            Please Enter the following text in the password field below
            "Password"
          </p>
          <div>
            <label htmlFor="pw1" className="form-label">
              Password*
            </label>
            <input
              type="email"
              className="form-control"
              id="pw1"
              placeholder="Password"
            />
          </div>

          {/* <a href="#" className="btn btn-primary">
            Check
          </a> */}
        </div>
      </div>
      <br />

      <div className="card">
        <div className="card-header bg-info-subtle">Password Field #</div>
        <div className="card-body">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <p className="card-text">
            Please Enter the following text in the password field below
            "Password"
          </p>
          <div>
            <label htmlFor="pw1" className="form-label">
              Password*
            </label>
            <input
              type="email"
              className="form-control"
              id="pw1"
              placeholder="Password"
            />
          </div>

          {/* <a href="#" className="btn btn-primary">
            Check
          </a> */}
        </div>
      </div>
      <br />
      <div className="text-center">
        <a href="#" className="btn btn-primary">
          Next
        </a>
      </div>
    </div>
  );
}
export default PasswordField;
