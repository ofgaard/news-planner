import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useAuth } from "../context/AuthProvider";

export const Login = () => {
  const { session, supabase } = useAuth();

  if (session) {
    return (
      <div>
        Logged in!{" "}
        <button onClick={() => supabase.auth.signOut()}>Logout</button>
      </div>
    );
  }

  return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
};
