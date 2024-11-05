import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://witaacnpqmlpukpnwnyk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpdGFhY25wcW1scHVrcG53bnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MDM2MjQsImV4cCI6MjA0NTI3OTYyNH0.1Ig3iWR4IbgcVYiLdwqHYTN_JZgwvGEH_RpnuR2VpXc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
