import { FC } from "react";
import "./Header.css";
import { HeaderProps } from "./HeaderProps";
import SkeletonHeader from "./SkeletonHeader";
import { STRINGS } from "../../constants/strings";

const Header: FC<HeaderProps> = ({
  isLoading,
  firstName = "Guest",
  surname = "User",
}) => {
  if (isLoading) {
    return <SkeletonHeader />;
  }

  return (
    <header className="header">
      <h1>
        {STRINGS.HEADER.WELCOME}, <br />
        {firstName} {surname}.
      </h1>
    </header>
  );
};

export default Header;
