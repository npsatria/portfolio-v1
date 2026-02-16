import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Client for client-side usage (if needed) and server-side public retrieval
export const supabase = createClient(supabaseUrl, supabaseKey);

// Optional: Admin client for server-side operations (bypassing RLS)
// export const supabaseAdmin = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key');
