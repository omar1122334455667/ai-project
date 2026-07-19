const SUPABASE_URL = 'https://dqrloakwwverurdryscb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxcmxvYWt3d3ZlcnVyZHJ5c2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMTk1NzksImV4cCI6MjA5OTU5NTU3OX0.vuZlXdPXLtYgrOKNTnxTE1FQfEegJoD8JAyj9jq1bNc';

const _supabase = (typeof window.supabase !== 'undefined' && window.supabase)
    ? window.supabase
    : (typeof supabase !== 'undefined' ? supabase : null);
const supabaseClient = _supabase ? _supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
