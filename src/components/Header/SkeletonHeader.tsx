import { FC } from "react";
import "./Header.css";
import "../../styles/Skeleton.css";

const SkeletonHeader: FC = () => {
  return (
    <header className="header">
      <div className="skeleton-header">
        <div className="skeleton-line skeleton width-40" />
        <div className="skeleton-line skeleton width-20" />
      </div>
    </header>
  );
};

export default SkeletonHeader;
