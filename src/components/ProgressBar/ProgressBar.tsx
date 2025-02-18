import { FC } from "react";
import "./ProgressBar.css";
import { ProgressBarProps } from "./ProgressBarProps";

const ProgressBar: FC<ProgressBarProps> = ({
  approvalsReceived,
  approvalsRequired,
}) => {
  const fillPercentage =
    approvalsRequired > 0 ? (approvalsReceived / approvalsRequired) * 100 : 0;

  return (
    <div className="progress-bar-wrapper">
      <p className="approvals-text">
        {approvalsReceived}/{approvalsRequired}
      </p>

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${fillPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
