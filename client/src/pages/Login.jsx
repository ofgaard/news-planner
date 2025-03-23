import { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

export const Login = () => {
  const { session, supabase } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  if (session) {
    return (
      <div>
        Logged in!{" "}
        <button onClick={() => supabase.auth.signOut()}>Logout</button>
      </div>
    );
  }

  const customTheme = {
    ...ThemeSupa,
    colors: {
      ...ThemeSupa.colors,
      brand: "#4CAF50",
      buttonText: "#fff",
      buttonBackground: "#4CAF50",
    },
  };

  return (
    <div className="flex justify-center mt-10">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: customTheme }}
        providers={[]}
      />
    </div>
  );
};
