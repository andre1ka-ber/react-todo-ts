import React from "react";
import { NavLink } from "react-router-dom";
import { navigationLinks } from "../../constants/navigationLinks";
import NavigationItem from "./NavigationItem";
import ThemeChanger from "./ThemeChanger";

const NavigationList: React.FC = () => (
  <div className={"navigation"}>
    {navigationLinks.map((item, index) => (
      <NavLink to={item.path} key={item.icon}>
        <NavigationItem icon={item.icon} title={item.title} path={item.path} />
      </NavLink>
    ))}

    <div className={"bottom-items"}>
      <ThemeChanger />
      <NavigationItem title={"Made with ReactJS + TypeScript"} classString={"about-me-item"}>
        <img src={"logo192.png"} height={32} width={32} alt={"react-logo"} className={"spin-logo"}/>
      </NavigationItem>
    </div>
  </div>
)

export default NavigationList;