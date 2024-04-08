import css from "./friendListItem.module.css";
export default function FriendListItem({
  friendItem: { avatar, name, isOnline },
}) {
  return (
    <li className={css.friendItem}>
      <img src={avatar} alt="Avatar" width="90" />
      <p className={css.friendItemName}>{name}</p>
      <p className={css.friendItemStatus}>{isOnline ? "Online" : "Offline"}</p>
    </li>
  );
}
