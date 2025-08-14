import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserById, getPostsByUser } from "../services/api";

export default function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getUserById(userId), getPostsByUser(userId)])
      .then(([userRes, postsRes]) => {
        setUser(userRes.data);
        setPosts(postsRes.data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <p>Loading profile...</p>;

  return (
    <div>
      <Link to="/">Back</Link>
      <h2>{user.name} (@{user.username})</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company?.name}</p>
      <p>Address: {user.address?.city}, {user.address?.street}</p>

      <h3>Posts</h3>
      {posts.map((p) => (
        <div key={p.id} className="card">
          <h4>{p.title}</h4>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}
