# Supabase Setup Guide for Product Data

This guide will help you set up Supabase for your lawn mower parts e-commerce application.

## Prerequisites

1. A Supabase account (sign up at https://supabase.com)
2. Your existing products.json data

## Step 1: Create a Supabase Project

1. Go to https://app.supabase.com
2. Click "New Project"
3. Fill in the project details:
   - Project name: `lawn-mover` (or your preferred name)
   - Database password: Choose a strong password
   - Region: Select the closest region to your users
4. Wait for the project to be created (this may take a few minutes)

## Step 2: Get Your API Keys

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (a long string starting with `eyJ...`)

3. Update your `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...your-key-here
   ```

## Step 3: Create the Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase-schema.sql` from your project
3. Paste it into the SQL Editor and click **Run**

This will create:
- A `products` table with all necessary columns
- Indexes for better query performance
- Row Level Security (RLS) policies
- Automatic timestamp updates

## Step 4: Set Up Storage for Product Images

### Option 1: Use Supabase Storage (Recommended)

1. In Supabase dashboard, go to **Storage**
2. Click **Create a new bucket**
3. Name it: `product-images`
4. Make it **Public** (so images are accessible without authentication)
5. Click **Create bucket**

6. Go to **SQL Editor** and run the contents of `supabase-storage-setup.sql` to set up storage policies

7. Upload your existing product images:
   - You can upload images via the Supabase dashboard (Storage → product-images → Upload)
   - Or use the Supabase API to upload programmatically

8. Update image URLs in your product data to use Supabase storage URLs:
   ```
   https://xxxxx.supabase.co/storage/v1/public/product-images/your-image.webp
   ```

### Option 2: Keep Using Local Images

If you prefer to keep your images in the `/public/products/` folder:
- Your existing image paths will work as-is
- Just make sure to include them in your database (e.g., `/products/...`)

## Step 5: Import Your Product Data

You can import your data from `products.json` to Supabase in several ways:

### Method 1: Using the Supabase Dashboard (Easiest)

1. Go to **Table Editor** → **products**
2. Click **Insert** → **Insert row**
3. Manually add each product (good for small datasets)

### Method 2: Using SQL INSERT Statements

1. Convert your JSON data to SQL INSERT statements
2. Example:

```sql
INSERT INTO products (title, description, image_urls, category, in_stock)
VALUES
  (
    'กระบอกเพลา+บู๊ช TD40/T200 NEW 8mm (151cm)',
    'กระบอกเพลา',
    ARRAY[
      '/products/กระบอกเพลา+บู๊ช TD40/T200 NEW 8mm (151cm)/กระบอกเพลาTD40T200.webp',
      '/products/กระบอกเพลา+บู๊ช TD40/T200 NEW 8mm (151cm)/กระบอกเพลาTD40T200(1).webp'
    ],
    'อะไหล่เครื่องตัดหญ้า',
    true
  ),
  -- Add more products...
;
```

### Method 3: Using a Migration Script (Recommended for Large Datasets)

Create a Node.js script to migrate your data:

```javascript
// migrate-products.js
const { createClient } = require('@supabase/supabase-js');
const productsData = require('./src/app/products/products.json');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function migrateProducts() {
  for (const product of productsData) {
    const { data, error } = await supabase
      .from('products')
      .insert({
        title: product.title,
        description: product.description,
        image_urls: product.image,
        category: product.category,
        in_stock: product.inStock ?? true,
        price: product.price,
        original_price: product.originalPrice,
        rating: product.rating
      });

    if (error) {
      console.error(`Error inserting product ${product.id}:`, error);
    } else {
      console.log(`Inserted product: ${product.title}`);
    }
  }
}

migrateProducts();
```

Run it with:
```bash
node migrate-products.js
```

## Step 6: Test Your Setup

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Visit http://localhost:3000/products

3. You should see your products loaded from Supabase!

4. Check the browser console for any errors

## Step 7: Verify Data

1. In Supabase dashboard, go to **Table Editor** → **products**
2. Verify all your products are there
3. Check that image URLs are correct

## Troubleshooting

### Products Not Loading

1. Check browser console for errors
2. Verify your `.env.local` has correct values
3. Make sure you restarted the dev server after adding env variables
4. Check Supabase logs: Dashboard → Logs → Postgres Logs

### Images Not Displaying

1. If using Supabase Storage:
   - Verify bucket is public
   - Check storage policies are set correctly
   - Verify image URLs are correct

2. If using local images:
   - Make sure images exist in `/public/products/`
   - Check that paths in database match actual file paths

### Authentication Errors

1. Verify your API keys are correct
2. Make sure RLS policies are set up (run `supabase-schema.sql`)
3. Check that the `anon` key has read access

## Next Steps

### Add Admin Features

You can add admin features to manage products:
- Create new products
- Update existing products
- Upload images
- Delete products

You already have an admin dashboard at `/admin` - you can extend it to manage products!

### Optimize Performance

- Enable caching for product queries
- Use Supabase Realtime for live updates
- Implement pagination on the backend (using `.range()`)
- Add search indexes for better search performance

### Add More Features

- Product reviews and ratings
- Inventory management
- Product variants (size, color, etc.)
- Product categories with descriptions and images
- Featured products
- Product search with full-text search

## Database Schema Reference

```sql
products (
  id                 BIGSERIAL PRIMARY KEY,
  title             TEXT NOT NULL,
  description       TEXT,
  image_urls        TEXT[] NOT NULL DEFAULT '{}',
  category          TEXT NOT NULL,
  in_stock          BOOLEAN DEFAULT true,
  price             DECIMAL(10, 2),
  original_price    DECIMAL(10, 2),
  rating            DECIMAL(2, 1) CHECK (rating >= 0 AND rating <= 5),
  created_at        TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at        TIMESTAMP WITH TIME ZONE DEFAULT NOW()
)
```

## Support

If you encounter any issues:
1. Check Supabase documentation: https://supabase.com/docs
2. Check the Supabase Discord: https://discord.supabase.com
3. Review the SQL schema and make sure it was executed correctly
