import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>@{user.username}</p>
      <p>{user.email}</p>
      <Link to={`/users/${user.id}`}>View Profile</Link>
    </div>
  );
}
