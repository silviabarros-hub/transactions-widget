import { FC } from "react";
import "./WidgetsList.css";
import PlaceholderWidget from "./PlaceholderWidget/PlaceholderWidget";
import TransactionWidget from "./TransactionWidget/TransactionWidget";
import { WidgetListProps } from "./WidgetsListProps";

const WidgetsList: FC<WidgetListProps> = ({ isLoading }) => {
  return (
    <section className="widgets-list-wrapper">
      <PlaceholderWidget isLoading={isLoading} />
      <TransactionWidget isLoading={isLoading} />
      <PlaceholderWidget isLoading={isLoading} />
    </section>
  );
};

export default WidgetsList;
