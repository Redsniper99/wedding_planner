# Gallery Management System

## How to Add New Wedding Albums

### 1. Create a Folder
Navigate to `public/images/recent-work/` and create a new folder for your album.

**Folder Naming Format:**
- Simple: `Wedding Name` (e.g., "Sarah & John Wedding")
- With Category: `Wedding Name - Category` (e.g., "Sarah & John Wedding - Ceremony")

**Categories:** Ceremony, Reception, Decor, Couple, Venue, or any custom category

### 2. Add Images
Add your wedding photos to the folder. Supported formats:
- `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`

The first image (alphabetically) will be used as the cover photo.

### 3. Generate Gallery Data
Run one of these commands:

```bash
# Generate gallery data manually
npm run gallery:generate

# Or just start the dev server (it auto-generates)
npm start
```

### 4. New Album Badge
Albums created within the last 30 days will automatically show a "NEW" badge in both:
- Gallery page
- Recent Works section on Home page

## Example Structure

```
public/images/recent-work/
├── Sarah & John Wedding - Ceremony/
│   ├── 001.jpg
│   ├── 002.jpg
│   └── 003.jpg
├── Emma & Michael - Reception/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── photo3.jpg
└── Outdoor Garden Wedding - Venue/
    ├── venue1.jpg
    └── venue2.jpg
```

## Features

✅ **Automatic Detection**: Scans folders and generates JSON data
✅ **NEW Badge**: Shows on recent albums (last 30 days)
✅ **Album Slider**: Click any album to view full gallery with navigation
✅ **Category Filtering**: Filter albums by category in Gallery page
✅ **Responsive**: Works on mobile and desktop
✅ **Auto-Sort**: Albums sorted by date (newest first)

## Tips

- Use descriptive folder names
- Keep image file sizes optimized (under 500KB recommended)
- First image in folder becomes the cover
- Delete empty folders before generating
