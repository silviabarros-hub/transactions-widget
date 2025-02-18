import { FC } from "react";
import "./PlaceholderWidget.css";
import "../../../styles/Skeleton.css";

const SkeletonPlaceholderWidget: FC = () => {
  return <div className="placeholder-wrapper skeleton"></div>;
};

export default SkeletonPlaceholderWidget;
