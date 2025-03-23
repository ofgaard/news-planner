import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://qxmttzciskuyjxkfyjrl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4bXR0emNpc2t1eWp4a2Z5anJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTA4NDgsImV4cCI6MjA1NzUyNjg0OH0.0byINlRMF3zY6fhhMJq-FWycnHukDjhxJu-55PoEZ4k"
);
