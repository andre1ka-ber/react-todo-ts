import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "./assets/tailwind.css";
import "./assets/scss/app.scss";
import "react-toastify/dist/ReactToastify.css";

import NavigationList from "./components/Navigation/NavigationList";
import CustomModal from "./components/CustomModal";
import AppRouting from "./AppRouting";
import useAppThemeWatcher from "./UseAppThemeWatcher";
import { appTheme } from "./redux/selectors/appSelectors";

const App: React.FC = () => {
  const theme = useSelector(appTheme);

  useAppThemeWatcher();

  return (
    <div>
      <div className="main">
        <NavigationList />
        <div className="todo-wrapper">
          <AppRouting />
        </div>
        <ToastContainer theme={theme} progressClassName="bg-yellow-500" />
      </div>
      <CustomModal />
    </div>
  );
};

export default App;
