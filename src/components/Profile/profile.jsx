import css from "./profile.module.css";

export default function Profile({
  data: {
    username,
    tag,
    avatar,
    location,
    stats: { followers, views, likes },
  },
}) {
  return (
    <>
      <div className={css.container}>
        <img src={avatar} alt="User avatar" className={css.image} width="250" />
        <p className={css.nameStyle}>{username}</p>
        <p className={css.tagStyle}>@{tag}</p>
        <p className={css.locationStyle}>{location}</p>
      </div>
      <ul className={css.infoStyleList}>
        <li className={css.infoStyleItem}>
          <span>Followers </span>
          <span className={css.numbers}>{followers}</span>
        </li>
        <li className={css.infoStyleItem}>
          <span>Views</span>
          <span className={css.numbers}>{views}</span>
        </li>
        <li className={css.infoStyleItem}>
          <span>Likes</span>
          <span className={css.numbers}>{likes}</span>
        </li>
      </ul>
    </>
  );
}
