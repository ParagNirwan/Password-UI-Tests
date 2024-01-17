function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">
          <img
            src="/jjk.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          &nbsp; Password UI Tests
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
