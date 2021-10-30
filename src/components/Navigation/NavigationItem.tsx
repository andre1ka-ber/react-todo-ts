import React from "react";
import { useLocation } from "react-router-dom";

interface NavigationItemProps {
  title: string;
  icon?: string;
  path?: string;
  classString?: string;
  onClick?(): void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  children,
  icon,
  path,
  title,
  classString,
  onClick,
}) => {
  const location = useLocation();

  return (
    <div
      role="presentation"
      className={`navigation-item ${
        location.pathname === path ? "active" : ""
      } ${classString}`}
      onClick={onClick}
    >
      <div className="navigation-item-icon">
        {icon ? <i className={icon} /> : children}
      </div>
      <div className="navigation-item-title">{title}</div>
    </div>
  );
};

NavigationItem.defaultProps = {
  icon: "",
  path: "",
  classString: "",
  onClick() {
    return null;
  },
};

export default NavigationItem;
