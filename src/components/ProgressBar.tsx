function ProgressBar() {
  return (
    <div className="container">
      <br />
      <div
        className="progress"
        role="progressbar"
        aria-label="Example 20px high"
        style={{ height: "25px" }}
      >
        <div
          className="progress-bar bg-success overflow-visible text-light"
          style={{ width: "50%" }}
        >
          Progress {50}%
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
