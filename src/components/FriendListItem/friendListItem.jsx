import css from "./friendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({
  friendItem: { avatar, name, isOnline },
}) {
  const classes = clsx(
    css.friendItemStatus,
    isOnline ? css.online : css.offline
  );

  return (
    <li className={css.friendItem}>
      <img src={avatar} alt="Avatar" width="90" />
      <p className={css.friendItemName}>{name}</p>
      <p className={classes}>{isOnline ? "Online" : "Offline"}</p>
    </li>
  );
}
