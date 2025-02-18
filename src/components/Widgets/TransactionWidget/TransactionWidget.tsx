import { FC, useState } from "react";
import "./TransactionWidget.css";
import TransactionCard from "./TransactionCard/TransactionCard";
import { Transaction } from "../../../data/mockTransactions/mockTransactions.interface";
import { mockTransactions } from "../../../data/mockTransactions/mockTransactions";
import { TransactionWidgetProps } from "./TransactionWidgetProps";
import SkeletonTransactionWidget from "./SkeletonTransactionWidget";
import { STRINGS } from "../../../constants/strings";

const TransactionWidget: FC<TransactionWidgetProps> = ({ isLoading }) => {
  const [activeTab, setActiveTab] = useState<"Pending" | "History">("Pending");

  if (isLoading) {
    return <SkeletonTransactionWidget />;
  }

  const filteredTransactions = mockTransactions.filter((tx: Transaction) =>
    activeTab === "Pending" ? !tx.submitted : tx.submitted
  );

  return (
    <div className="transaction-widget-wrapper">
      <div className="transaction-widget-header">
        <div className="transaction-widget-header-title">
          <div className="transaction-widget-header-img-wrapper">
            <img src="/src/assets/icons/nav-approvals.svg" />
          </div>
          <p>{STRINGS.TRANSACTION.TRANSACTIONS}</p>
        </div>
        <div className="transaction-widget-tabs">
          <button
            className={activeTab === "Pending" ? "active" : ""}
            onClick={() => setActiveTab("Pending")}
          >
            {STRINGS.TRANSACTION.PENDING}
          </button>
          <button
            className={activeTab === "History" ? "active" : ""}
            onClick={() => setActiveTab("History")}
          >
            {STRINGS.TRANSACTION.HISTORY}
          </button>
        </div>
      </div>
      <div className="transactions-list-wrapper">
        {filteredTransactions.map((tx: Transaction) => (
          <TransactionCard
            key={tx.id}
            approvalsReceived={tx.approvalsReceived ?? 0}
            approvalsRequired={tx.approvalsRequired ?? 5}
            icon={tx.icon}
            receiver={tx.receiver}
            sender={tx.sender}
            timestamp={tx.timestamp}
            unit={tx.unit}
            value={tx.value}
            status={tx.status}
            submitted={tx.submitted}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionWidget;
