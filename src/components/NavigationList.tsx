import React from "react";

const navigationItems = [
    {
        icon: "fas fa-home",
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
                  <div className={"navigation-item"} key={item.icon}>
                      <div className={"navigation-item-icon"}>
                          <i className={item.icon}></i>
                      </div>
                      <div className={"navigation-item-title"}>
                          <h4>{ item.title }</h4>
                      </div>
                  </div>
                )
            })}
            <div className={"navigation-item about-me-item"}>
                <div className={"navigation-item-icon"}>
                    <img src={"logo192.png"} height={32} width={32} />
                </div>
                <div className={"navigation-item-title"}>
                    Made with ReactJS + TypeScript
                </div>
            </div>
        </div>
    )
}

export default NavigationList;