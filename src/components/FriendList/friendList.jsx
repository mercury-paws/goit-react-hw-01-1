import FriendListItem from "../FriendListItem/friendListItem.jsx";
import css from "./friendList.module.css";

export default function FriendList({ profileFriends }) {
  return (
    <>
      <ul className={css.friendList}>
        {profileFriends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem friendItem={friend} />
          </li>
        ))}
      </ul>
    </>
  );
}
