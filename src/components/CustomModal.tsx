import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalContent, modalLoading } from "../redux/selectors/appSelectors";
import UserCard from "./UserCard";
import { hideModal } from "../redux/actionCreators/appActions";
import Loader from "./Loader";

const CustomModal: React.FC = () => {
  const dispatcher = useDispatch();
  const content = useSelector(modalContent);
  const isLoading = useSelector(modalLoading);

  const clickHandler = (event: React.SyntheticEvent<HTMLElement>) => {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    if (target.className === "modal-window") {
      dispatcher(hideModal());
    }
  };

  return (
    <div
      role="presentation"
      className="modal-window"
      onClick={clickHandler}
      onKeyUp={clickHandler}
    >
      <div className="modal-wrapper" id="modalWindow">
        {isLoading ? <Loader /> : <UserCard userData={content} />}
      </div>
    </div>
  );
};

export default CustomModal;
