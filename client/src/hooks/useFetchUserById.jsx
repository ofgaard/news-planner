import { getUserById } from "../services/api/Users";
import { useEffect, useState } from "react";

export const useFetchUserById = (id) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getUserById(id);
        if (!data) {
          console.log("hook: user not found");
        }
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);
  return { user, loading, error };
};
