import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: number;
  title: string;
  description: string;
  image_urls: string[];
  category: string;
  in_stock: boolean;
  price?: number;
  original_price?: number;
  rating?: number;
  created_at?: string;
  updated_at?: string;
};
