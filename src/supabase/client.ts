import { createClient } from "@supabase/supabase-js";

// Create supabase client
export default createClient(
  import.meta.env.VITE_BACKEND_URL as string,
  import.meta.env.VITE_BACKEND_KEY as string,
);
