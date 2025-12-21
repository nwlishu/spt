# SKU Conversion Guide

This guide will help you convert Thai product names to machine-safe SKU identifiers for AWS S3.

## 📋 What This Does

- Converts Thai product folder/file names to SKU format (e.g., `MOWER-0001`)
- Creates a mapping file to track Thai name → SKU conversions
- Updates image paths in products1.json
- Preserves Thai titles in the JSON (only paths are changed)
- Renames actual files and folders on disk

## 🏷️ SKU Format

Products are assigned SKUs based on their category:

| Category | SKU Prefix | Example |
|----------|------------|---------|
| อะไหล่เครื่องตัดหญ้า | MOWER | MOWER-0001 |
| อะไหล่เครื่องพ่นยา | SPRAY | SPRAY-0001 |
| อะไหล่ปั๊มชัก | PUMP | PUMP-0001 |
| ซีล | SEAL | SEAL-0001 |
| คอนเดนเซอร์ | COND | COND-0001 |

## 🚀 Step-by-Step Process

### Step 1: Generate SKU Mapping

Run the SKU mapping generator:

```bash
node generate-sku-mapping.mjs
```

This creates:
- `sku-mapping.json` - Full mapping data (JSON format)
- `sku-mapping.csv` - Human-readable mapping (CSV format)
- `src/app/products/products1-updated.json` - Updated product data with new image paths

**Example output:**
```
✓ MOWER-0001 → กระบอกเพลา+บู๊ช TD40/T200 NEW 8mm (151cm)
✓ MOWER-0002 → กระบอกเพลา+บู๊ช RB 8mm - 10mm (140cm)
✓ MOWER-0003 → กระบอกเพลา+บู๊ช UMK435 NEW 8mm (150cm)
...
```

### Step 2: Review the Mapping

Open `sku-mapping.csv` to review the conversions:

```csv
SKU,ID,Title,Category,Original Folder,New Folder
MOWER-0001,1,"กระบอกเพลา+บู๊ช TD40/T200 NEW 8mm (151cm)",อะไหล่เครื่องตัดหญ้า,"A02258_TD40_NEW_8mm",MOWER-0001
MOWER-0002,2,"กระบอกเพลา+บู๊ช RB 8mm - 10mm (140cm)",อะไหล่เครื่องตัดหญ้า,"กระบอกเพลา+บู๊ช RB 8mm - 10mm (140cm)",MOWER-0002
```

### Step 3: Backup Your Data

**IMPORTANT:** Always backup before renaming!

```bash
# Backup products folder
cp -r public/products public/products-backup

# Backup products1.json
cp src/app/products/products1.json src/app/products/products1-backup.json
```

### Step 4: Rename Files and Folders

Run the file rename script:

```bash
node rename-files-to-sku.mjs
```

This will:
- Create new SKU-named folders in `public/products/`
- Copy and rename files with SKU format (e.g., `MOWER-0001-1.jpg`, `MOWER-0001-2.jpg`)
- Remove old folders after successful copy

**Example:**
```
Before:
public/products/กระบอกเพลา+บู๊ช TD40/
  ├── กระบอกเพลาTD40T200.JPG
  └── กระบอกเพลาTD40T200(1).JPG

After:
public/products/MOWER-0001/
  ├── MOWER-0001-1.jpg
  └── MOWER-0001-2.jpg
```

### Step 5: Verify the Changes

Check the renamed files:

```bash
ls -la public/products/
```

You should see folders like:
```
MOWER-0001/
MOWER-0002/
MOWER-0003/
SPRAY-0001/
PUMP-0001/
...
```

### Step 6: Update products1.json

Replace the old products1.json with the updated version:

```bash
cp src/app/products/products1-updated.json src/app/products/products1.json
```

### Step 7: Upload to AWS S3

Upload the renamed folders to S3 with the new structure:

```bash
# Using AWS CLI
aws s3 sync public/products/ s3://spt-s3-bucket-2025-1/products/ \
  --acl public-read

# Or upload via AWS Console:
# 1. Go to S3 bucket: spt-s3-bucket-2025-1
# 2. Create 'products' folder if it doesn't exist
# 3. Upload all SKU folders (MOWER-0001, MOWER-0002, etc.)
```

### Step 8: Update Database

Update Supabase database with new image paths:

```bash
node update-database-paths.mjs
```

(You may need to create this script to update your Supabase database)

## 📁 File Structure After Conversion

### Local Files:
```
public/products/
├── MOWER-0001/
│   ├── MOWER-0001-1.jpg
│   └── MOWER-0001-2.jpg
├── MOWER-0002/
│   ├── MOWER-0002-1.webp
│   └── MOWER-0002-2.webp
└── ...
```

### S3 Structure:
```
s3://spt-s3-bucket-2025-1/
└── products/
    ├── MOWER-0001/
    │   ├── MOWER-0001-1.jpg
    │   └── MOWER-0001-2.jpg
    ├── MOWER-0002/
    │   ├── MOWER-0002-1.webp
    │   └── MOWER-0002-2.webp
    └── ...
```

### Updated products1.json:
```json
[
  {
    "id": 1,
    "image": [
      "https://spt-s3-bucket-2025-1.s3.ap-northeast-1.amazonaws.com/products/MOWER-0001/MOWER-0001-1.jpg",
      "https://spt-s3-bucket-2025-1.s3.ap-northeast-1.amazonaws.com/products/MOWER-0001/MOWER-0001-2.jpg"
    ],
    "title": "กระบอกเพลา+บู๊ช TD40/T200 NEW 8mm (151cm)",
    "description": "กระบอกเพลา",
    "category": "อะไหล่เครื่องตัดหญ้า",
    "inStock": true
  }
]
```

**Note:** Title remains in Thai for tracking, only image paths use SKU.

## 🔍 Finding Products

To find a product's SKU, use the mapping files:

**Option 1: Search sku-mapping.csv**
Open in Excel/Sheets and search for the Thai product name

**Option 2: Search sku-mapping.json**
```bash
# Search by Thai title
grep "กระบอกเพลา+บู๊ช TD40" sku-mapping.json
```

## 🛠️ Troubleshooting

### Folder not found
If you see "Folder not found" warnings, the folder name might have encoding issues. Check:
1. The actual folder name in `public/products/`
2. The `originalFolderName` in `sku-mapping.json`
3. Manually rename if needed

### Duplicate SKUs
If two products get the same SKU, they're in the same category. The counter should increment automatically. Check `sku-mapping.json` for duplicates.

### S3 Upload Issues
Make sure:
1. Files are renamed locally first
2. S3 bucket permissions allow public read
3. Using correct bucket name and region

## 📊 Example Conversion

**Before:**
```
Title: กระบอกเพลา+บู๊ช TD40/T200 NEW 8mm (151cm)
Folder: public/products/กระบอกเพลา+บู๊ช TD40/T200 NEW 8mm (151cm)/
Files: กระบอกเพลาTD40T200.JPG, กระบอกเพลาTD40T200(1).JPG
```

**After:**
```
Title: กระบอกเพลา+บู๊ช TD40/T200 NEW 8mm (151cm) (unchanged)
SKU: MOWER-0001
Folder: public/products/MOWER-0001/
Files: MOWER-0001-1.jpg, MOWER-0001-2.jpg
S3 URL: https://spt-s3-bucket-2025-1.s3.ap-northeast-1.amazonaws.com/products/MOWER-0001/MOWER-0001-1.jpg
```

## ✅ Checklist

- [ ] Run `node generate-sku-mapping.mjs`
- [ ] Review `sku-mapping.csv`
- [ ] Backup `public/products/` and `products1.json`
- [ ] Run `node rename-files-to-sku.mjs`
- [ ] Verify renamed folders in `public/products/`
- [ ] Update `products1.json` with updated version
- [ ] Upload to AWS S3
- [ ] Update Supabase database
- [ ] Test website to ensure images load
- [ ] Keep `sku-mapping.json` for future reference

## 📝 Notes

- The Thai title in products1.json is preserved for tracking
- Only image paths are converted to SKU format
- Keep `sku-mapping.json` and `sku-mapping.csv` for reference
- You can always refer back to the mapping to find original names
