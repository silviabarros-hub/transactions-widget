import { FC } from "react";
import { TransactionCardProps } from "./TransactionCardProps";
import { truncateString } from "../../../../utils/truncateString";
import { getMainTextPrefix } from "../../../../utils/getMainTextPrefix";
import { getRelativeTimestamp } from "../../../../utils/getRelativeTimestamp";
import "./TransactionCard.css";
import ProgressBar from "../../../ProgressBar/ProgressBar";
import { STRINGS } from "../../../../constants/strings";
import { useWindowWidth } from "../../../../utils/useWindowWidth";

const TransactionCard: FC<TransactionCardProps> = ({
  sender,
  receiver,
  value,
  unit,
  icon,
  submitted,
  status,
  approvalsReceived = 0,
  approvalsRequired = 5,
  timestamp,
}) => {
  const isPending = !submitted;

  const windowWidth = useWindowWidth();

  const receiverTruncated =
    !isPending && windowWidth < 500
      ? truncateString(receiver, 6, 2)
      : truncateString(receiver, 8, 4);

  const relativeTimestamp = getRelativeTimestamp(timestamp);
  const mainTextPrefix = getMainTextPrefix(submitted, status);

  return (
    <div className="transaction-card">
      <div className="transaction-card-header">
        <p className="transaction-title">
          {mainTextPrefix}{" "}
          <span className="highlighted">
            {value} <span className="transaction-token">{unit}</span>
          </span>{" "}
          {STRINGS.TRANSACTION.TO}{" "}
          <span className="highlighted">{receiverTruncated}</span>
        </p>
        {!isPending && status && (
          <span className={`status-badge ${status.toLowerCase()}`}>
            {status}
          </span>
        )}
      </div>
      <div className="transaction-token-img">
        <img src={icon} /> {truncateString(sender, 5, 10)}
      </div>
      {isPending ? (
        <div className="transaction-card-progressbar-wrapper">
          <ProgressBar
            approvalsReceived={approvalsReceived}
            approvalsRequired={approvalsRequired}
          />
          <div className="transaction-card-timestamp">
            <p>{relativeTimestamp}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TransactionCard;
