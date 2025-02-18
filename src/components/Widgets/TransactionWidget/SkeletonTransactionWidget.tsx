import { FC } from "react";
import "./TransactionWidget.css";
import "../../../styles/Skeleton.css";

const SkeletonTransactionWidget: FC = () => {
  return (
    <div className="transaction-widget-wrapper skeleton">
      <div className="skeleton-transaction-widget-header">
        <div className="transaction-widget-header-img-wrapper skeleton" />
        <div className="skeleton-line skeleton color-sand200 skeleton-header-line" />
      </div>
      <div className="transactions-list-wrapper">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="transaction-card skeleton skeleton-transaction-card"
          />
        ))}
      </div>
    </div>
  );
};

export default SkeletonTransactionWidget;
