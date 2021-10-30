import React from "react";
import { IUser } from "../interfaces/user";

interface UserCardProps {
  userData: IUser;
}

const UserCard: React.FC<UserCardProps> = ({ userData }) => (
  <div className="user-card">
    <div>
      <span>Имя пользователя:&nbsp;</span>
      {userData.username}
    </div>
    <div>
      <span>Полное имя:&nbsp;</span>
      {userData.name}
    </div>
    <div>
      <span>Электронная почта:&nbsp;</span>
      {userData.email}
    </div>
  </div>
);

export default UserCard;
