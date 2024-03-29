interface ProgressBarProps {
  progress: number;
}
function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="container">
      <br />
      <div
        className="progress box pBorder"
        role="progressbar"
        aria-label="Example 20px high"
        style={{ height: "18px" }}
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-success overflow-visible text-light"
          style={{
            width: `${progress}%`,
          }}
        >
          Completed {progress}%
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
