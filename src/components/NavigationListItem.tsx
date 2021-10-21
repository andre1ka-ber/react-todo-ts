import React from "react"

interface NavigationListItemProps {
    icon: string;
    title: string;
}

const NavigationListItem: React.FC<NavigationListItemProps> = ({icon, title}) => {
    return (
        <div className={"navigation-item"}>
            <div className={"navigation-item-icon"}>
                <i className={icon}/>
            </div>
            <div className={"navigation-item-title"}>
                <h4>{ title }</h4>
            </div>
        </div>
    )
}

export default NavigationListItem;