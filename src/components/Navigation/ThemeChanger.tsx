import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAppTheme } from "../../redux/actionCreators/appActions";
import { appTheme } from "../../redux/selectors/appSelectors";
import NavigationItem from "./NavigationItem";

const ThemeChanger: React.FC = () => {
  const dispatcher = useDispatch();
  const currentTheme = useSelector(appTheme);
  const [themeIcon, setThemeIcon] = useState("");

  useEffect(() => {
    if (currentTheme === "light") {
      setThemeIcon("fas fa-sun");
    } else {
      setThemeIcon("fas fa-moon");
    }
  }, [currentTheme]);

  const changeTheme = () => {
    dispatcher(changeAppTheme());
  };

  return (
    <NavigationItem
      icon={themeIcon}
      title="Изменить тему"
      onClick={changeTheme}
    />
  );
};

export default ThemeChanger;
