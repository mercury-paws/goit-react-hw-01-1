export default function Profile({
  name,
  tag,
  image,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <>
      <div>
        <img src={image} alt="User avatar" />
        <p>Name {name}</p>
        <p>Tag {tag}</p>
        <p>Location {location}</p>
      </div>
      <ul>
        <li>
          <span>Followers </span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </>
  );
}
