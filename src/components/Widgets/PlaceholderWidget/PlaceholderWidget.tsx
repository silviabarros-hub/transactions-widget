import { FC } from "react";
import "./PlaceholderWidget.css";
import SkeletonPlaceholderWidget from "./SkeletonPlaceholderWidget";
import { PlaceholderWidgetProps } from "./PlaceholderWidgetProps";

const PlaceholderWidget: FC<PlaceholderWidgetProps> = ({ isLoading }) => {
  if (isLoading) {
    return <SkeletonPlaceholderWidget />;
  }

  return <div className="placeholder-wrapper" />;
};

export default PlaceholderWidget;
