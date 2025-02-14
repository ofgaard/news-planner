import { getAllUsers } from "../services/api/Users";
import { useState, useEffect } from "react";

export const useFetchAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const data = await getAllUsers();

        const sortedUsers = data.sort((a, b) => a.name.localeCompare(b.name));
        setUsers(sortedUsers);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);
  return { users, loading, error };
};
