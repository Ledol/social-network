import React from "react";
import s from "./Friends.module.css";
import { FriendItem } from "./FriendItem/FriendItem";
import style from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FriendsType } from "../../redux/sidebarReducer";

export type FriendsPageType = {
  friends: Array<FriendsType>;
};

export const Friends = (props: FriendsPageType) => {
  const friendsElement = props.friends.map((f) => {
    return <FriendItem key={f.id} id={f.id} name={f.name} image={f.image} />;
  });

  return (
    <div className={s.friend}>
      <div className={style.item}>
        <NavLink to="/Friends" activeClassName={style.activeLink}>
          Friends
        </NavLink>
      </div>
      {friendsElement}
    </div>
  );
};
