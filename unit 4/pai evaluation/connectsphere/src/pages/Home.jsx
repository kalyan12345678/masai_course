import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import UserList from "../components/UserList";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <>
      <h2>Users</h2>
      <UserList users={users} />
    </>
  );
}
