// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hqantivbviyebihpvjdo.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxYW50aXZidml5ZWJpaHB2amRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNDQxMTgsImV4cCI6MjA2ODYyMDExOH0.To-mI0vTp7fJCNDCdDydniv20rGfj2yqdyP2LS_fPu0'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
