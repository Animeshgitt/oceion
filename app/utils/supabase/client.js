// utils/supabase/client.js
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.BASE_URL,
  process.env.NON_KEY
)