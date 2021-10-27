import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { navigationLinks } from "../constants/navigationLinks";

const NavigationList: React.FC = () => {
    const location = useLocation();

    const classes = (path: string): string => {
        const array = ['navigation-item'];
        if (location.pathname === path) {
            array.push("active")
        }
        return array.join(" ")
    }

    return (
        <div className={"navigation"}>
            {navigationLinks.map((item, index) => {
                return (
                  <NavLink to={item.path} key={item.icon}>
                      <div className={classes(item.path)} >
                          <div className={"navigation-item-icon"}>
                              <i className={item.icon}></i>
                          </div>
                          <div className={"navigation-item-title"}>
                              <h4>{ item.title }</h4>
                          </div>
                      </div>
                  </NavLink>
                )
            })}
            <div className={"navigation-item about-me-item"}>
                <div className={"navigation-item-icon"}>
                    <img src={"logo192.png"} height={32} width={32} alt={"react-logo"} />
                </div>
                <div className={"navigation-item-title"}>
                    Made with ReactJS + TypeScript
                </div>
            </div>
        </div>
    )
}

export default NavigationList;