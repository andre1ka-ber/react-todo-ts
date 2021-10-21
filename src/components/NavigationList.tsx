import React, { useState } from "react";
import NavigationListItem from "./NavigationListItem";

const navigationItems = [
    {
        icon: "fa fa-home",
        title: "Главная"
    },
    {
        icon: "fa fa-home",
        title: "Список завершенных"
    },
    {
        icon: "fab fa-facebook",
        title: "Корзина"
    },
];

const NavigationList: React.FC = () => {
    return (
        <div className={"navigation"}>
            {navigationItems.map((item, index) => {
                return (
                    <NavigationListItem icon={item.icon} title={item.title} key={index} />
                )
            })}
        </div>
    )
}

export default NavigationList;