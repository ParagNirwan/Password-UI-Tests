function PasswordField() {
  const handlePaste = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <br />
      <h2 className="text-center">Password Complexity {"Easy"}</h2>
      <br />
      <div className="card">
        <div className="card-header bg-info-subtle">
          Password Field #{"number"}
        </div>
        <div className="card-body">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <p className="card-text">
            Please enter the following text in the password field below
            {"Password"}
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
            />
          </div>

          {/* <a href="#" className="btn btn-primary">
            Check
          </a> */}
        </div>
      </div>
      <br />

      <div className="card">
        <div className="card-header bg-info-subtle">
          Password Field #{"number"}
        </div>
        <div className="card-body">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <p className="card-text">
            Please enter the following text in the password field below
            {"Password"}
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
            <input
              type="password"
              className="form-control"
              id="pw2"
              placeholder="Password"
              required
              onPaste={handlePaste}
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
